// import { useState } from "react";
// const App=()=>{
//   const [nm,setName]=useState("nikhil");
//   return(
//     <>
//     <h1>Welcome To React Js {nm}</h1>
//     <button onClick={()=>{setName("Harshal")}}>Click Me</button>
//     </>
//   )
// }
// export default App;

// import { useEffect } from "react";
// import { useState } from "react";

// import { useState } from "react";
// const App=()=>{
//   const [Color,setName]=useState("Red");
//   return(
//     <>
//     <h1 style={{color:Color}}>My favourite Color Is:{Color}</h1>
//     <button onClick={()=>{setName("blue")}}>Blue</button>
//     <button onClick={()=>{setName("Yellow")}}>Yellow</button>
//     <button onClick={()=>{setName("green")}}>Green</button>
//     <button onClick={()=>{setName("Black")}}>Black</button>
//     </>
//   )
// }
// export default App;

// import { useState } from "react";
// import { Button } from "react-bootstrap";
// const App=()=>{
//   const [cnt,setName]=useState(0);
//   const mydec=()=>{
//     if(cnt<=0){
//       alert("Not less than zero!");
//     }
//     else{
//       setName(cnt-1);
//     }
//   }
//   return (
//     <>
//       <h1 align="center">My Counter App</h1>
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           borderRadius: "30px",
//           backgroundColor: "white",
//           width: "300px",
//           margin: "auto",
//         }}
//       >
//         <h1>My Count :{cnt}</h1>
//         <button style={{color:"red",margin:"5px"}} onClick={()=>{setName(cnt+1)}}>Incerment</button>
//         <button style={{color:"Green",margin:"5px"}} onClick={mydec}>Decerment</button>
//         <button style={{color:"blue",margin:"5px"}} onClick={()=>{setName(0)}}>Reset</button>
//       </div>
//     </>
//   );
// }
// export default App;

// import { useState,useEffect } from "react";
// const App=()=>{
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setcount(count+1);
//     },3000)
//   })
// return(
//   <>
//   <h1>Welcome:{count}</h1>
//   </>
// )
// }
// export default App;

// const App=()=>{
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setcount(count+1);
//     },10000)
//   })
// return(
//   <>
//   <h1>React Example :{count}</h1>
//   <h1>Hook(useEffect)</h1>
//   </>
// )

// }
// export default App;

// const App=()=>{
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//   setTimeout(()=>{
//     setcount(count + 1);
//   },4000)
//   },[])
//   return(
//     <>
//     <h1>React Example:{count}</h1>
//     </>
//   )
// }
// export default App;

// import { useEffect } from "react";
// import { useState } from "react";

// const App=()=>{
//   const [count,setcount]=useState(0);
//   const [multi,setMulti]=useState(0);
//   useEffect(()=>{
//   setMulti(count*2);
//   },[count])
//   return(
//     <>
//     <h1>My Counter App:{count}</h1>
//     <h1>Multipication :{multi}</h1>
//     <button onClick={()=>{setcount(count+1)}}>Click me!</button>
//     </>
//   )
// }
// export default App;

// import { useState,useEffect } from "react";
// const App=()=>{
//   const [name,setName]=useState(" ");
//   const [city,setcity]=useState(" ");
//   const handle=()=>{
//     alert(`My Name is ${name} City is ${city}`)
//   }
//   return(
//     <>
//     <h1>Application Form</h1>
//     name: <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
//     <br />
//     <br />
//     City: <input type="text" value={city}  onChange={(e)=>{setcity(e.target.value)}} />
//     <br />
//     <br />
//     <button onClick={handle}>Click Me!</button>
//     </>
//   )
// }
// export default App;

// import { useState } from "react";

// const App = () => {
//   const [input, setInput] = useState({});

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//   };

//   const save = () => {
//     console.log("Form Data:", input); // Example action to save or process form data
//     alert("Data Saved!");
//   };

//   return (
//     <>
//       <h1>Application Form</h1>
//       Roll No: <input type="text" name="rollNo" onChange={handleInput} />
//       <br />
//       <br />
//       Name: <input type="text" name="name" onChange={handleInput} />
//       <br />
//       <br />
//       City: <input type="text" name="city" onChange={handleInput} />
//       <br />
//       <br />
//       Fees: <input type="text" name="fees" onChange={handleInput} />
//       <br />
//       <br />
//       <button onClick={save}>Save!!!</button>
//     </>
//   );
// };

// export default App;



// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [input, setInput] = useState({});

//   const handleEvent = (e) => {
//     const { name, value } = e.target;
//     setInput((values) => ({ ...values, [name]: value }));
//   };

//   const save = async () => {
//     try {
//       const api = "http://localhost:3000/Student";
//       const res = await axios.post(api, input);
//       alert("Data has been saved successfully!");
//       console.log("Response:", res.data); // Optional for debugging
//     } catch (error) {
//       console.error("Error saving data:", error);
//       alert("Failed to save data. Please try again.");
//     }
//   };

//   return (
//     <>
//       <h1>Application Form</h1>
//       Enter RollNo: <input type="text" name="rollNo" onChange={handleEvent} />
//       <br />
//       <br />
//       Enter Name: <input type="text" name="name" onChange={handleEvent} />
//       <br />
//       <br />
//       Enter City: <input type="text" name="city" onChange={handleEvent} />
//       <br />
//       <br />
//       Enter Fees: <input type="text" name="fees" onChange={handleEvent} />
//       <br />
//       <br />
//       <button onClick={save}>Save It!</button>
//     </>
//   );
// };

// export default App;















import { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState({});
  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = async () => {
    let api = "http://localhost:3000/Student";
    const response = await axios.post(api, input);
    alert("data saved successfully");
  };
  return (
    <>
      <h1>Application Form</h1>
      Enter RollNo : <input type="text" name="rollNo" onChange={handleEvent} />
      <br />
      <br />
      Enter Name : <input type="text" name="name" onChange={handleEvent} />
      <br />
      <br />
      Enter City : <input type="text" name="city" onChange={handleEvent} />
      <br />
      <br />
      Enter fees : <input type="text" name="fees" onChange={handleEvent} />
      <br />
      <br />
      <button onClick={handleSubmit}>Save It!</button>
    </>
  );
};
export default App;