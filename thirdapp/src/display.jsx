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

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.id}</td>
          <td>{key.name}</td>
          <td>{key.age}</td>
          <td>{key.city}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1>Employee Data:</h1>
      <table border="1">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>city</th>
          <th>designation</th>
          <th>salary</th>
        </tr>
        {ans}
      </table>
    </>
  );
};
export default Display;
