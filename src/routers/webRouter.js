const express = require("express");
const students = require("../models/Students");

const webRouter = express.Router();

webRouter
  .get("/students", (req, res) => {
    res.render("students", {
      layout: "navigation",
      pageTitle: "Students",
      students
    });
  })
  .get("/add-student", (req, res) => {
    res.render("addStudent", {
      layout: "navigation",
      pageTitle: "Add New Student",
      studentID: students.length + 1
    });
  })
  .get("/edit-student/:id", (req, res) => {
    const { id = "" } = req.params;
    const requiredStudent = students.find(student => {
      if (parseInt(id) === student.id) return true;
      else return false;
    });
    if (requiredStudent) {
      res.render("addStudent", {
        layout: "navigation",
        pageTitle: "Add New Student",
        studentID: requiredStudent.id,
        mode: "edit",
        student: requiredStudent
      });
    } else {
      res.status(404).send("Not Found");
    }
  })
  .get("/admin/login", (req, res) => {
    res.render("adminLogin", {
      layout: "login",
      pageTitle: "Admin Login",
      submitTarget: "/admin/login",
      submitMethod: "POST",
      formTitle: "Admin Login Page"
    });
  });

module.exports = webRouter;