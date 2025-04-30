import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./nameSlice";

const App=()=>{
    const userName=useSelector(state=>state.myname.user);
    const dispatch=useDispatch();
    return(
        <>
        <h1>Welcome ::{userName}</h1>
        <button onClick={()=>{dispatch(changeName())}}>Click Me!</button>
        </>
    )
}
export default App;