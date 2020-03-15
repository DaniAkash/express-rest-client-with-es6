const express = require("express");

const teacherRouter = express.Router();

teacherRouter
  .get("/", (req, res) => {
    res.send("Teachers Home!")
  });

module.exports = teacherRouter;