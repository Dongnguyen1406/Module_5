import axios from "axios";

const API_URL = "http://localhost:3000/todos";

export const getTodos = () => {
  return axios.get(API_URL);
};

export const addTodo = (todo) => {
  return axios.post(API_URL, todo);
};
