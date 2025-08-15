let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial 1",
    rating: 4.2,
  },
  {
    id: 2,
    title: "ReactJS Tutorial 2",
    rating: 3,
  },
  {
    id: 3,
    title: "ReactJS Tutorial 3",
    rating: 3.2,
  },
  {
    id: 4,
    title: "ReactJS Tutorial 4",
    rating: 4.5,
  },
];

// cách 1
// function getBlog(courses) {
//   for (const course of courses) {
//     if (course.rating >= 4) {
//       console.log(`${course.title}: ${course.rating}`);
//     }
//   }
// }
// getBlog(courses);

// cách 2
// courses
//   .filter((course) => course.rating >= 4)
//   .forEach((course) => console.log(`${course.title}: ${course.rating}`));

// cach 3
// let courseRating = console.log(courses.filter((course) => course.rating >= 4));
