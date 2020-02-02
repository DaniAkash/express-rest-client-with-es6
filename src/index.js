const express = require("express");
const students = require("./models/Students");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/students", (req, res) => {

  /**
   * Express is smart enough to figure out the
   * response header's MIME type
   */
  // res.send(students);
  // res.send("<h1>Hello</h1>")

  /**
   * Multiple properties of the same object of the express modules
   * can be chained together
   */
  // res.status(200);
  // res.json({students}); // These two statements can be chained together

  /**
   * It's a good practice to be explicit 
   * of the status codes and response types
   */
  res.status(200).json({ students });
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
