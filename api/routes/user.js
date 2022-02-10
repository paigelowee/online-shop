const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const { authenticateUser, authenticateAdmin } = require("../utils");

// Update user
router.put("/:id", authenticateUser, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedUser) {
      const { password, ...data } = updatedUser._doc;
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete user
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
