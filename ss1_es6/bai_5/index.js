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

let courseRating = courses
  .filter((course) => course.rating < 4)
  .map((course) => `${course.id} - ${course.title} - ${course.rating}`);
console.log(courseRating);
