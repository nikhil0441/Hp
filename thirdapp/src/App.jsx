import { useContext } from "react";
import { myContext } from "./usercontext";

const App = () => {
  const { name, setName } = useContext(myContext);

  const changeName = () => {
    setName("newName"); // you can set any new name
  };

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Name: {name}</h2>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default App;
