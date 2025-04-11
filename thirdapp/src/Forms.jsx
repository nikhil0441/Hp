import { useState } from "react";
import axios from "axios";

const Reg = () => {
  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    // Basic input validation
    if (
      !input.empno ||
      !input.name ||
      !input.age ||
      !input.city ||
      !input.designation ||
      !input.salary
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      setIsLoading(true); // Show loading state
      const api = "http://localhost:3000/employee";
      const response = await axios.post(api, input);
      console.log(response);
      alert("Registration Successful!!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>Registration Form:</h1>
      <br />
      Enter EmpNo:{" "}
      <input
        type="number"
        name="empno"
        onChange={handleInput}
        style={{ marginBottom: "10px" }}
      />
      <br />
      Enter Employee Name:{" "}
      <input
        type="text"
        name="name"
        onChange={handleInput}
        style={{ marginBottom: "10px" }}
      />
      <br />
      Enter Age:{" "}
      <input
        type="number"
        name="age"
        onChange={handleInput}
        style={{ marginBottom: "10px" }}
      />
      <br />
      Enter City:{" "}
      <input
        type="text"
        name="city"
        onChange={handleInput}
        style={{ marginBottom: "10px" }}
      />
      <br />
      Enter Designation:{" "}
      <input
        type="text"
        name="designation"
        onChange={handleInput}
        style={{ marginBottom: "10px" }}
      />
      <br />
      Enter Salary:{" "}
      <input
        type="number"
        name="salary"
        onChange={handleInput}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isLoading ? "Registering..." : "Register!!"}
      </button>
    </>
  );
};

export default Reg;
