const express = require("express");

const adminRouter = express.Router();

adminRouter
  .post("/login", (req, res) => {
    res.send("Form Submitted!");
  });

module.exports = adminRouter;