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
        if (!result) {
          res.send("Invalid User");
        } else {
          const { password: passwordHash } = result.get();
          compareHash(password, passwordHash)
            .then(result => {
              if (result) {
                const jwtToken = createToken({
                  sub: "admin",
                  email
                });
                res.cookie("jwt", jwtToken, { httpOnly: true });
                res.redirect("/");
              } else {
                res.send("Invalid User");
              }
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  })
  .get("/logout", (req, res) => {
    res.clearCookie("jwt");
    res.redirect("/");
  });

module.exports = adminRouter;
