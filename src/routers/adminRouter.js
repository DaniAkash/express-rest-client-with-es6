const express = require("express");
const Admin = require("../models/Admin");
const { compareHash } = require("../services/hashingService");

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
              // Crafting jwt cookie
              res.send("Login Success");
            } else {
              res.send("Invalid User");
            }
          })
      }
    })
    .catch(console.error);
  });

module.exports = adminRouter;