const Sequelize = require("sequelize");
const ClassDB = require("../config/ClassDB");
const Student = require("./StudentsModel");
const Teacher = require("./Teachers");

const seedData = [
  {
    teacher: {
      firstName: "Dani",
      lastName: "Akash",
      email: "test@gmail.com",
      subject: "english"
    },
    students: [
      {
        firstName: "Arun",
        lastName: "Kumar",
        age: 16,
        gender: "male"
      },
      {
        firstName: "Ram",
        lastName: "Kumar",
        age: 16,
        gender: "male"
      },
      {
        firstName: "Ravi",
        lastName: "Kumar",
        age: 16,
        gender: "male"
      },
      {
        firstName: "Magesh",
        lastName: "Kumar",
        age: 16,
        gender: "male"
      },
      {
        firstName: "Suresh",
        lastName: "Kumar",
        age: 16,
        gender: "male"
      }
    ]
  }
];

const DbSeeder = (isForced = false) => {
  Teacher.sync({ force: isForced })
    .then(() => {
      return Student.sync({ force: isForced });
    })
    .then(() => {
      seedData.forEach(seed => {
        Teacher.create(seed.teacher).then(result => {
          console.log("Teacher Created");
          console.log(result.get());
          const { id: teacherId = null } = result.get();
          seed.students.forEach(student => {
            Student.build({
              ...student,
              teacherId
            })
              .save()
              .then(result => {
                console.log("Student Inserted");
                console.log(result.get());
              })
              .catch(() => {
                console.erro("Failed to insert Student");
                console.log(student);
              });
          });
        });
      });
    });
};

DbSeeder(true);
