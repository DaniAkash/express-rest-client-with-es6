const { validateToken } = require("../services/jwtService");

const adminAuth = (req, res, next) => {
  const { jwt = "" } = req.cookies;
  const admin = validateToken(jwt);
  if(admin) {
    req.admin = admin;
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = adminAuth;