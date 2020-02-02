const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello");
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`)
})