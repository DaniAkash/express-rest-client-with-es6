const jwt = require("jsonwebtoken");

exports.createToken = (payload) => {
  return jwt.sign(
    payload, 
    process.env.JWT_KEY, 
    {
      expiresIn: "3 hours"
    }
  );
};