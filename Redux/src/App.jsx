
import "./App.css"; // Importing the CSS file for styling
import { useSelector, useDispatch } from "react-redux";
import { addTask,delTask } from "./ToDoSlice";


import { useState } from "react";

const App = () => {
  const work = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();

  const [val, setVal] = useState("");
  let sno = 0;

  const ans = work.map((key) => {
    sno++;
    return (
      <tr key={sno} className="table-row">
        <td className="table-cell">{sno}</td>
        <td className="table-cell">{key.task}</td>
        <td className="table-cell">
          <button onClick={()=>dispatch(delTask({id:key.id}))} >Delete</button>
        </td>
      </tr>
    );
  });
  const del=(e)=>{
   console.log(e);
  }

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
          onClick={() => dispatch(addTask({ task: val }))}
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
            <th className="table-header" >Delete</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default App;