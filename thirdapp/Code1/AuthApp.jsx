import { useContext } from "react"
import { myContext } from "./LoginContext"

const AuthApp=()=>{
    const {user,logout}=useContext(myContext);
    return(
        <>
        <h1>Welcome :{user.name}!</h1>
        <button onClick={logout}>Logout</button>
        </>
    )
}
export default AuthApp;