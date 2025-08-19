import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleInput = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAdd = () => {
    const { item, list } = this.state;
    if (item.trim() !== "") {
      this.setState({
        list: [...list, item],
        item: "",
      });
    }
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Todo List
          </h2>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={this.state.item}
              onChange={this.handleInput}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={this.handleAdd}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {this.state.list.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-200 transition"
              >
                <span>{todo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
