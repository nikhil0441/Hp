import { useState,createContext } from "react";
import Comp1 from "./Comp1";
const mycontext=createContext();
const App=()=>{
    const [input,setInput]=useState("Nikhil");
    return (
      <>
        <h1>Welcome !!!!! {input}</h1>
        <button onClick={()=>{setInput("Harshal")}}>Click Me!!!!</button>
        <mycontext.Provider value={input}>
          <Comp1 />
        </mycontext.Provider>
      </>
    );
}
export default App;
export {mycontext};