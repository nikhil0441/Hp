import Empdata from "../Code/EmpData";
import Empdesign from "../Code/Empdesign";

const App = () => {
  const ans = Empdata.map((key) => (
    <Empdesign
      eno={key.name}
      nm={key.city}
      design={key.designation}
      sal={key.salary}
    />
  ));
  return (
    <>
      <h1 align="center">Welcome to the Employee Data Base</h1>
      <table
        border="1"
        align="center"
        width="600"
        height="200"
        // bgcolor="yellow"
      >
        <tr bgcolor="red">
          <th>Name</th>
          <th>City</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        {ans}
      </table>
    </>
  );
};
export default App;
