import { useContext, useState } from "react"
import { myContext } from "./LoginContext";

const UnAuthApp=()=>{
    const [name,setName]=useState("");
    const {login}=useContext(myContext);
    return(
        <>
        Enter Your name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>{login(name)}}>Login</button>
        </>
    )
}
export default UnAuthApp;