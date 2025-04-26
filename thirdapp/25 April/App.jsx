// import { useRef } from "react";
// const App=()=>{
//     const myRef=useRef();
//     const Mydisplay=()=>{
//         myRef.current.style.border = "3px solid red";
//         myRef.current.style.width = "200px";
//         myRef.current.style.padding = "30px";
//         myRef.current.style.borderRadius = "30px";
//         myRef.current.style.backgroundColor = "red";



//     }
//     return(
//         <>
//         <h1>Welcome To Cybrom!!!!!!!</h1>
//         <button onClick={Mydisplay}>Click Me</button>
//         <div ref={myRef}>
//             Your are Cybrom Student!!!!1
//         </div>
//         </>
//     )
// };
// export default App;



// import { useRef } from "react";
// const App=()=>{
//     const myRef=useRef();
//     const display=()=>{
//         myRef.current.innerHTML="We Learn UseRef";
//         myRef.current.style.color="red";
//     }
//     return(
//         <>
//          <h1 ref={myRef}>
//             Welcome To Cybrom
//          </h1>
//          <button onClick={display}>Click Me!!!!</button>
//         </>
//     )
// }
// export default App;





// import { useEffect, useRef, useState } from "react";
// const App=()=>{
//     const [name,setName]=useState("");
//     const myRef=useRef(0);
//     useEffect(()=>{
//         myRef.current+=1;
//     })
//     return(
//         <>
//         Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> 
//         <h1>Rendering Count :{myRef.current}</h1>
//         </>
//     )
// }
// export default App;

// import { useRef } from "react";

// const App = () => {
//   const myRef = useRef(null); // Initialize ref with null
//  const myRef1=useRef();
//   const Display = () => {
//     if (myRef.current) {
//         myRef.current.style.border="3px solid black";
//         myRef.current.style.width = "200px";
//         myRef.current.style.padding = "30px";
//       myRef.current.style.borderRadius = "30px"; // No space in "30px"
//     }
//   };
//   const Display1=()=>{
//     myRef.current.innerHTML = "Welcome To Cybrom";
//     // myRef.current.style.textAlign = "center"; // Centers text inside the div

//     // myRef.current.style.border = "3px solid black";
//     // myRef.current.style.width = "200px";
//     // myRef.current.style.height = "200px";

//     // myRef.current.style.padding = "30px";
//     // myRef.current.style.borderRadius = "50%"; // No space in "30px"
//   }
// const Display2=()=>{
//   myRef.current.style.textAlign = "center"; // Centers text inside the div

//   myRef.current.style.border = "3px solid black";
//   myRef.current.style.width = "200px";
//   myRef.current.style.height = "200px";

//   myRef.current.style.padding = "30px";
//   myRef.current.style.borderRadius = "50%"; // No space in "30px"
// }
//   return (
//     <>
//       <button onClick={Display}>Change Border Radius</button>
//       <button onClick={Display1}>Change InnerHTML</button>
//       <button onClick={Display2}>Change Border</button>
//       <div
//         ref={myRef}
        
//       >
//         <h1 >Hello User!!!</h1>
//       </div>
//     </>
//   );
// };

// export default App;

