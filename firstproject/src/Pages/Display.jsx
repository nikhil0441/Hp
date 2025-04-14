import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Display = () => {
  const [myData, setMyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Employee");
      setMyData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(
        "Error loading data:",
        error.response?.data || error.message
      );
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase().trim();
    setSearchTerm(term);
    setCurrentPage(1);

    if (!term) {
      setFilteredData(myData);
      setSelectedEmployee(null);
      return;
    }

    const results = myData.filter((employee) => {
      const empNo = employee.empno?.toString().toLowerCase() || "";
      const empName = employee.name?.toLowerCase() || "";
      const empDesignation = employee.designation?.toLowerCase() || "";

      return (
        empNo.includes(term) ||
        empName.includes(term) ||
        empDesignation.includes(term)
      );
    });

    setFilteredData(results);
  };

  const handleEmployeeSelect = (employee) => {
    if (selectedEmployee && selectedEmployee.id === employee.id) {
      setSelectedEmployee(null);
    } else {
      setSelectedEmployee(employee);
    }
  };

  const handleDelete = (employee) => {
    toast.info(
      <div>
        <h4>Delete this record?</h4>
        <p>Emp No: {employee.empno}</p>
        <p>Name: {employee.name}</p>
        <p>Designation: {employee.designation}</p>
        <p>Salary: {employee.salary}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              padding: "5px 15px",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => {
              toast.dismiss();
              deleteRecord(employee.id);
            }}
          >
            Delete
          </button>
          <button
            style={{
              background: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => toast.dismiss()}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Employee/${id}`);
      toast.success("Record deleted successfully");
      loadData();
      setSelectedEmployee(null);
    } catch (error) {
      toast.error("Failed to delete record");
      console.error(
        "Error deleting record:",
        error.response?.data || error.message
      );
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <h1
        className="text-center mb-4 text-success"
        style={{ fontWeight: "bolder" }}
      >
        Employee Details
      </h1>

      {/* Search Section */}
      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search employee by name, emp no or designation"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setSearchTerm("");
                setFilteredData(myData);
                setCurrentPage(1);
              }}
            >
              Clear
            </button>
          )}
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      {/* Selected Employee Detail Form */}
      {selectedEmployee && (
        <div className="card mb-4 shadow">
          <div className="card-header bg-primary text-white">
            <h5>Employee Details</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Employee Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedEmployee.empId}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedEmployee.name}
                    readOnly
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedEmployee.Design}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Salary</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedEmployee.salary}
                    readOnly
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(selectedEmployee)}
                >
                  Delete Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Employees Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th>Emp No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length > 0 ? (
              currentRecords.map((employee) => (
                <tr
                  key={employee.id}
                  onClick={() => handleEmployeeSelect(employee)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.Design}</td>
                  <td>{employee.salary}</td>
                  <td className="text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(employee);
                      }}
                      className="btn btn-outline-danger btn-sm"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredData.length > recordsPerPage && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <li
                  key={number}
                  className={`page-item ${
                    currentPage === number ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                </li>
              )
            )}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}

      <ToastContainer />
    </div>
  );
};

export default Display;
