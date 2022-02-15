const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register new user
router.post("/register", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  if (!email || !password || !firstName || !lastName)
    return res.status(400).json("Please ensure all fields are entered");

  if (password !== confirmPassword)
    return res.status(400).json("Passwords do not match");

  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(),
    email: email,
  });

  console.log(newUser);

  try {
    const addedUser = await newUser.save();
    return res.status(200).json(addedUser);
  } catch (err) {
    return res.status(500).json("Unable to register account");
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json("User not found");

    var decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decryptedPassword === req.body.password) {
      const { password, ...data } = user._doc;
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "4d" }
      );
      res.status(200).json({ ...data, accessToken });
    } else {
      res.status(400).json("Incorrect password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
