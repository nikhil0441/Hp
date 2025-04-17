import UserContext from "./UserContext";
import { useContext } from "react";
import { myContext } from "./UserContext";
const Cybrom2=()=>{
    const {name}=useContext(myContext);
    return(
        <>
        <h1> WElcome !!!!!!!!{name}</h1>
        </>
    )
}
export default Cybrom2;