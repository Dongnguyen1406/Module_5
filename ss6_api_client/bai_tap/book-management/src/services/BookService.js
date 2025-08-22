import axios from "axios";

const API_URL = "http://localhost:3000/books";

export const getAllBooks = () => {
  return axios.get(API_URL);
};

export const getAllBookByName = async (title) => {
  try {
    const result = await axios.get(`${API_URL}?title_like=${title}`);
    return result.data;
  } catch (error) {
    return [];
  }
};

export const addBook = async (book) => {
  try {
    const result = await axios.post(API_URL, book);
    if (result.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const deleteBook = async (id) => {
  try {
    const result = await axios.delete(`${API_URL}/${id}`);
    return result.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateBook = async (id, updateBook) => {
  try {
    const result = await axios.put(`${API_URL}/${id}`, updateBook);
    return result.status === 200;
  } catch (error) {
    return false;
  }
};
