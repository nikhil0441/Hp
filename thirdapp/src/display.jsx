import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/employee";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "80%",
    margin: "20px auto",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const headerStyle = {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  };

  const ans = mydata.map((key) => (
    <tr key={key.id}>
      <td style={thTdStyle}>{key.id}</td>
      <td style={thTdStyle}>{key.name}</td>
      <td style={thTdStyle}>{key.age}</td>
      <td style={thTdStyle}>{key.city}</td>
      <td style={thTdStyle}>{key.designation}</td>
      <td style={thTdStyle}>{key.salary}</td>
    </tr>
  ));

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Employee Data</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>ID</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Name</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Age</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>City</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Designation</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Salary</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Display;
