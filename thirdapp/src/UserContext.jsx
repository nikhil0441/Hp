import { createContext, useState } from "react";

const myContext = createContext();

const UserContext = ({ children }) => {
  const [name, setName] = useState("anuj");

  return (
    <myContext.Provider value={{ name, setName }}>
      {children}
    </myContext.Provider>
  );
};

export default UserContext;
export { myContext };
