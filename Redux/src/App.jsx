import { useDispatch,useSelector } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";
const App=()=>{
    const myclr=useSelector(state=>state.mycolor.color);
    const [val,setValue]=useState("");
    const dispath=useDispatch();

    return(
        <>
        <h1>Change Color for div</h1>
        Enter Color: <input type="text" onChange={(e)=>{setValue(e.target.value)}} />
        <button onClick={()=>{dispath(changeColor(val))}}>Click Me!!!</button>
        <br />
        <br />
        <div style={{width:"200px", height:"200px", border:"2px solid black",backgroundColor:myclr}}>

        </div>
        </>
    )
}
export default App;