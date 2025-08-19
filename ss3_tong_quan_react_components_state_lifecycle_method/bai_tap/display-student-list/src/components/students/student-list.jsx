import React, { Component } from "react";

class StudentListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Nguyễn Văn A", age: 20, address: "Hà Nội" },
        { id: 2, name: "Trần Thị B", age: 21, address: "Đà Nẵng" },
        { id: 3, name: "Lê Văn C", age: 19, address: "Hồ Chí Minh" },
        { id: 4, name: "Phạm Thị D", age: 22, address: "Cần Thơ" },
      ],
    };
  }

  render() {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Danh sách sinh viên
        </h2>
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, index) => (
              <tr
                key={student.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition`}
              >
                <td className="py-3 px-4 text-left">{index + 1}</td>
                <td className="py-3 px-4 text-left">{student.name}</td>
                <td className="py-3 px-4 text-left">{student.age}</td>
                <td className="py-3 px-4 text-left">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentListComponent;
