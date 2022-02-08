const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers?.token?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.staus(403).json("Invalid token");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Authentication failed");
  }
};

const authenticateUser = (req, res, next) => {
  verifyToken(req, res, () => {
    // if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
    // } else {
    //   res.status(403).json("Unanauthorised action");
    // }
  });
};

const authenticateAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // if (req.user.isAdmin) {
    next();
    // } else {
    //   res.status(403).json("Unauthorised action");
    // }
  });
};

module.exports = { authenticateUser, authenticateAdmin };
