// import { useState } from "react";
// import axios from "axios";
// const App=()=>{
//   const [input,setInput]=useState({});
//   const Handle=(e)=>{
//    const name=e.target.name;
//    const value=e.target.value;
//    setInput((values)=>({...values,[name]:value}));
//    console.log(input);
//   }
//   const HandleSubmit= async()=>{
//     let api = "http://localhost:3000/student";
//     let res=await axios.post(api,input);
//   }
//   return (
//     <>
//       <h1>Application Form</h1>
//       Enter RollNo: <input type="text" name="rollno" onChange={Handle} />
//       <br />
//       <br />
//       Enter Name: <input type="text" name="name" onChange={Handle} />
//       <br />
//       <br />
//       Enter City: <input type="text" name="city" onChange={Handle} />
//       <br />
//       <br />
//       Enter Fees: <input type="text" name="fees" onChange={Handle} />
//       <br />
//       <br />
//       <button  onClick={HandleSubmit}>Save!!!</button>
//     </>
//   );
// }
// export default App;











