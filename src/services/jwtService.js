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

exports.validateToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};