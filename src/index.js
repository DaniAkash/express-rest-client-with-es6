const express = require("express");
const bodyParser = require("body-parser");
const students = require("./models/Students");
const studentsRouter = require("./routers/studentsRouter");

const app = express();

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/students", studentsRouter);

app.get("/student/:id", (req, res) => {
  // const studentId = req.params.id;
  const { id = "" } = req.params;
  const requiredStudent = students.find(student => {
    if (parseInt(id) === student.id) return true;
    else return false;
  });
  res.status(200).json({ student: requiredStudent });
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
