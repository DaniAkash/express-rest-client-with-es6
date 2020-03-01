const sequelize = require("sequelize");

const ClassDB = new sequelize(process.env.DB_URL);

ClassDB.authenticate()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => {
    console.log("connection failed");
    console.error(err);
  });

module.exports = ClassDB;