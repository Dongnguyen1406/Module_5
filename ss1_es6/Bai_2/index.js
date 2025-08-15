const person = {
  firstName: `John`,
  lastName: `Doe`,
  age: 30,
  gender: `male`,
  occupation: `developer`,
  nationality: `American`,
  city: `New York`,
  hobbies: [`reading`, `traveling`, `photography`],
  language: [`English`, `Spanish`],
  education: {
    degree: `Bachelor`,
    major: `Computer Science`,
    university: `Harvard University`,
  },
};

// Destructuring + Rest
const { firstName, gender, education, language, ...rest } = person;

// tạo student bằng spread
const student = {
  firstName,
  gender,
  degree: education.degree,
  language: person.language[0],
};

console.log("Thông tin student:");
for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}
