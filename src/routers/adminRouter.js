const express = require("express");
const Admin = require("../models/Admin");
const { compareHash } = require("../services/hashingService");
const { createToken } = require("../services/jwtService");

const adminRouter = express.Router();

adminRouter
  .post("/login", (req, res) => {    
    const { email, password } = req.body;
    Admin.findOne({
      where: { email }
    })
    .then(result => {
      if(!result) {
        res.send("Invalid User");
      } else {
        const { password: passwordHash } = result.get();
        compareHash(password, passwordHash)
          .then(result => {
            if(result) {
              const jwtToken = createToken({
                sub: "admin",
                email
              });
              console.log(jwtToken);
              res.send("Login Success");
            } else {
              res.send("Invalid User");
            }
          })
          .catch(console.error);
      }
    })
    .catch(console.error);
  });

module.exports = adminRouter;