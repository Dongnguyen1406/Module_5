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
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];

let createNewArray = (array1, array2) => {
  let newArray = [...array1, ...array2];
  console.log(newArray);
};
createNewArray(courses, addedCourses);
