// import { useDispatch,useSelector } from "react-redux";
// import { changeColor } from "./colorSlice";
// import { useState } from "react";
// const App=()=>{
//     const myclr=useSelector(state=>state.mycolor.color);
//     const [val,setValue]=useState("");
//     const dispath=useDispatch();

//     return(
//         <>
//         <h1>Change Color for div</h1>
//         Enter Color: <input type="text" onChange={(e)=>{setValue(e.target.value)}} />
//         <button onClick={()=>{dispath(changeColor(val))}}>Click Me!!!</button>
//         <br />
//         <br />
//         <div style={{width:"200px", height:"200px", border:"2px solid black",backgroundColor:myclr}}>

//         </div>
//         </>
//     )
// }
// export default App;


import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./ToDoSlice";
import { useState } from "react";
const App=()=>{
    const work=useSelector(state=>state.ToDo.task);
    const disPath=useDispatch();
    
    const [val,setVal]=useState("");
    let sno=0;
    const ans=work.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                
                <td>{sno}</td>
           <td>{key.task}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>TODO Programm</h1>
       
        Enter Wprk: <input type="text" onChange={(e)=>{setVal(e.target.value)}} />
       <button onClick={()=>{disPath(addTask({task:val}))}}>Add</button>
       
       <hr />
       <table>
        <tr>
            <th>#</th>
       <th></th>
        </tr>
        {ans}
       </table>
        </>
        
    )
}
export default App;