import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, compTask, delTask, IncompTask, EditTask } from "./todoSlice";
import { useState } from "react";

const App = () => {
  const work = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const ans = work.map((task, index) => (
    <tr key={task.id} className="table-row">
      <td className="table-cell">{index + 1}</td>
      <td className="table-cell">
        {editId === task.id ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "red" : "black",
            }}
          >
            {task.task}
          </span>
        )}
      </td>
      <td className="table-cell">
        <button onClick={() => dispatch(delTask({ id: task.id }))}>
          Delete
        </button>
      </td>
      <td className="table-cell">
        <button onClick={() => dispatch(compTask({ id: task.id }))}>
          Complete
        </button>
      </td>
      <td className="table-cell">
        <button onClick={() => dispatch(IncompTask({ id: task.id }))}>
          Incomplete
        </button>
      </td>
      <td className="table-cell">
        {editId === task.id ? (
          <button
            onClick={() => {
              dispatch(EditTask({ id: task.id, newTask: editValue }));
              setEditId(null);
              setEditValue("");
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setEditId(task.id);
              setEditValue(task.task);
            }}
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="app-container">
      <h1 className="title">TODO Program</h1>
      <div className="input-container">
        <label className="label">Enter Work:</label>
        <input
          type="text"
          value={val}
          className="input-box"
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          className="add-button"
          onClick={() => {
            if (val.trim() !== "") {
              dispatch(addTask({ id: Date.now(), task: val }));
              setVal("");
            }
          }}
        >
          Add
        </button>
      </div>
      <hr />
      <table className="task-table">
        <thead>
          <tr>
            <th className="table-header">#</th>
            <th className="table-header">Task</th>
            <th className="table-header">Delete</th>
            <th className="table-header">Complete</th>
            <th className="table-header">Incomplete</th>
            <th className="table-header">Edit</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default App;
