import React, { useEffect, useState } from "react";
import { getAllBookByName, deleteBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchBook = async () => {
    try {
      const temp = await getAllBookByName(search);
      setBooks(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [search]);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có muốn xóa sách này không?")) {
      try {
        await deleteBook(id);
        toast.success("Xóa thành công!");
        fetchBook();
      } catch (error) {
        toast.error("Xóa thất bại!");
        console.log(error);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Library</h2>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search book..."
            className="border border-gray-400 p-2 rounded w-64"
          />
          <button
            onClick={() => navigate("/add")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
          >
            Add New Book
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="px-6 py-3 ">STT</th>
                <th className="px-6 py-3 ">Title</th>
                <th className="px-6 py-3 ">Quantity</th>
                <th className="px-6 py-3 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr
                  key={book.id}
                  className="bg-white border-b hover:bg-gray-100 transition duration-150"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{book.title}</td>
                  <td className="px-6 py-4">{book.quantity}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => navigate(`/update/${book.id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {books.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;
