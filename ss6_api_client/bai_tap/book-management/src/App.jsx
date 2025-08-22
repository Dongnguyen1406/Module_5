import "./App.css";
import BookList from "./components/BookList";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<CreateForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
