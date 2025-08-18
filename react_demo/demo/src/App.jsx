import "./App.css";
import React from "react";

const initialCourses = [
  { id: 1, title: "ReactJS Tutorial 1", rating: 4.2 },
  { id: 2, title: "ReactJS Tutorial 2", rating: 3.0 },
  { id: 3, title: "ReactJS Tutorial 3", rating: 3.2 },
  { id: 4, title: "NodeJS Cơ bản", rating: 4.7 },
  { id: 5, title: "ES6 Nâng cao", rating: 4.0 },
];

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Danh sách khóa học</h1>

          <ul className="grid gap-3">
            {initialCourses.map((c) => (
              <li
                key={c.id}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow transition"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-slate-600">
                    Rating: {c.rating}
                  </div>
                </div>
              
              </li>
            ))}
          </ul>

          {initialCourses.length === 0 && (
            <p className="text-slate-500 mt-6">Không có dữ liệu phù hợp.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
