const Sequelize = require("sequelize");
const ClassDB = require("../config/ClassDB");
const { generateHashSync } = require("../services/hashingService");

const Admin = ClassDB.define("admin", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  setterMethods: {
    password(plainTextPassword) {
      this.setDataValue(
        "password", 
        generateHashSync(plainTextPassword)
      );
    },
  }
});

const newAdmin = {
  email: "test@gmail.com",
  password: "password!"
};

Admin.sync({ force: true })
  .then(() => {
    console.log("table created");
    return Admin.create(newAdmin);
  })
  .then(result => {
    console.log(result.get());
  })
  .catch(console.error);