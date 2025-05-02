import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
const App=()=>{
    const add=useSelector((state)=>state.todo.task)
    const myDispatch=useDispatch();
    const [val,setVal]=useState("");
    return(
        <>
        <h1>Welcome To TO-Do App</h1>
        Enter Your Task : <input type="text" onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={()=>myDispatch(addTask({task:val}))} >Add</button>
        </>
    )
}
export default App;