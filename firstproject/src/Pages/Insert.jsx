// Import dependencies
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const Insert = () => {
  // State for form inputs
  const [Input, setInput] = useState({
    empId: "",
    name: "",
    designation: "",
    salary: "",
  });

  // State for validation errors
  const [Errors, setErrors] = useState({});

  // Handles input changes and updates state dynamically
  const HandleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors for the field
  };

  // Validates form inputs
  const validateForm = () => {
    const errors = {};
    if (!Input.empId || isNaN(Input.empId)) {
      errors.empId = "Employee ID must be a valid number.";
    }
    if (!Input.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!Input.designation.trim()) {
      errors.designation = "Designation is required.";
    }
    if (!Input.salary || isNaN(Input.salary)) {
      errors.salary = "Salary must be a valid number.";
    }
    return errors;
  };

  // Handles form submission and sends POST request
  const HandleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Stop if there are validation errors
    }

    let api = "http://localhost:3000/Employee";

    try {
      const res = await axios.post(api, Input); // POST request
      console.log(res.data); // Log server response
      setInput({
        empId: "",
        name: "",
        designation: "",
        salary: "",
      }); // Reset form inputs
      setErrors({}); // Clear any existing errors
      
    } catch (error) {
      console.error("Error during submission:", error); // Log errors
      setErrors({ api: "Failed to submit data. Please try again later." });
    }
  };

  return (
    <>
      <div className="MyForm">
        <h1>Application Form</h1>
        <Form onSubmit={HandleSubmit}>
          {/* Emp Id Input Field */}
          <Form.Group className="mb-3">
            <Form.Label>Emp Id</Form.Label>
            <Form.Control
              type="text"
              name="empId"
              value={Input.empId}
              onChange={HandleInput}
              placeholder="Enter Employee ID"
              isInvalid={!!Errors.empId}
            />
            <Form.Control.Feedback type="invalid">
              {Errors.empId}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Emp Name Input Field */}
          <Form.Group className="mb-3">
            <Form.Label>Emp Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={Input.name}
              onChange={HandleInput}
              placeholder="Enter Employee Name"
              isInvalid={!!Errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {Errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Designation Input Field */}
          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              value={Input.designation}
              onChange={HandleInput}
              placeholder="Enter Designation"
              isInvalid={!!Errors.designation}
            />
            <Form.Control.Feedback type="invalid">
              {Errors.designation}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Salary Input Field */}
          <Form.Group className="mb-3">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              value={Input.salary}
              onChange={HandleInput}
              placeholder="Enter Salary"
              isInvalid={!!Errors.salary}
            />
            <Form.Control.Feedback type="invalid">
              {Errors.salary}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* API Error Message */}
        {Errors.api && <p className="text-danger">{Errors.api}</p>}
      </div>
    </>
  );
};

export default Insert;
