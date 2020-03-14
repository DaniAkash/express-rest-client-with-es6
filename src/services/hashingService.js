const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.generateHash = plainTextPassword => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainTextPassword, saltRounds, 
      (err, encryptedPassword) => {
        if(err) {
          reject(err);
        } else {
          resolve(encryptedPassword);
        }
      }
    )
  })
}

exports.generateHashSync = plainTextPassword => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plainTextPassword, salt);
  return hash;
};