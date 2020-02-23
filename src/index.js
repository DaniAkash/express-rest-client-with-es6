const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const studentsRouter = require("./routers/studentsRouter");
const studentRouter = require("./routers/studentRouter");
const students = require("./models/Students");
const formatIndex = require("./views/helpers/formatIndex");
const ifEquality = require("./views/helpers/ifEquality");

const app = express();

/**
 * Configuring express to use handlebars
 */
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: {
    formatIndex,
    ifEquality
  }
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
// including __dirname cuz the following line gets called when code is running as a process
app.set("views", path.join(__dirname, "./views"));

/**
 * Middleware for reading json data from
 * request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    pageTitle: "Home"
  });
});

app.get("/web/students", (req, res) => {
  res.render("students", {
    layout: "navigation",
    pageTitle: "Students",
    students
  });
});

app.get("/web/add-student", (req, res) => {
  res.render("addStudent", {
    layout: "navigation",
    pageTitle: "Add New Student",
    studentID: students.length + 1
  });
});

app.get("/web/edit-student/:id", (req, res) => {
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
});

app.use("/students", studentsRouter);

app.use("/student", studentRouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
