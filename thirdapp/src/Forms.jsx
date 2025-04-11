import { useState } from "react";
import axios from "axios";

const Reg = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async () => {
    let api = "http://localhost:3000/employee";
    const response = await axios.post(api, input);
    console.log(response);
    alert("Registration Successful!!");
  };

  return (
    <>
      <h1>Registration Form:</h1>
      <br />
      Enter EmpNo: <input type="number" name="empno" onChange={handleInput} />
      <br /> <br />
      Enter Employee Name:{" "}
      <input type="text" name="name" onChange={handleInput} />
      <br />
      <br />
      Enter Age: <input type="number" name="age" onChange={handleInput} />
      <br />
      <br />
      Enter City: <input type="text" name="city" onChange={handleInput} />
      <br />
      <br />
      Enter Designation:{" "}
      <input type="text" name="designation" onChange={handleInput} />
      <br />
      <br />
      Enter Salary: <input type="number" name="salary" onChange={handleInput} />
      <br />
      <br />
      <button onClick={handleSubmit}>Register!!</button>
    </>
  );
};
export default Reg;
