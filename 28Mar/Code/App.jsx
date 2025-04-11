// import Header from "./Header";
// import Fun from "./Data";
// import Footer from "./Footer"
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome To Cybrom</h1>
//     <Header/>
//     <Fun/>
//     <Footer/>
//     </>
//   )
// }

// export default App;



//-----------------------------------------props----------------
// import Student from "./Student"


// const App=()=>{
//   return (
//     <>
//       <h1 align="center">Welcome To React JS Class</h1>
//       <Student name="Nikhil" city="Bhopal" sub="React JS" />
//     </>
//   );
// }

// export default App;



// import College from "./College";
// const name="OIST";
// const seat=120;
// const fees=105000;
// const App=()=>{
//   return(
// <>
// <h1 align="center">Welcome To React JS</h1>
// <College  clg={name} seat={seat} fees={fees}/>
// </>
//   )
// }
// export default App;


// import Cybrom1 from "./Cybrom1";
// const College={
//   name:"OIST",
//   fees:105000,
//   city:"Bhopal",
//   sub:"JAVA"
// }

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome To React Js</h1>
//     <Cybrom1  nm={College.name} fees={College.fees} city={College.city} sub={College.sub}/>
//     </>
//   )
// }
// export default App;




//----------------------------------Map-------------------------------

// const App=()=>{
//   const Student=["NIKHIL","HARSHAL","AMAR"];
//   const ans=Student.map((key)=>{
//     return(
//       <>
//       <h1>{key}</h1>
//       </>
//     )
//   });
//   return(
//     <>
//     <h1>Welcome To Cybrom</h1>
//     {ans}
//     </>
//   )
// }

// export default App;



// const App=()=>{
//   const subject=["PHP","Java","CPP","JS"];
//   const ans=subject.map((key)=>{
//     return(
//       <>
//       <option value="" >
//         {key}
//       </option>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1 align="center">Welcome To cybrom</h1>
//     <select name="" id="">
//     {ans}
//     </select>
//     </>
//   )
// }
// export default App;







// const Student = [
//   {
//     rollno: 121,
//     name: "NIKHIL",
//     city: "Bhopal",
//     fees: 78000,
//   },
//   {
//     rollno: 122,
//     name: "Kunal",
//     city: "Rewa",
//     fees: 77000,
//   },
//   {
//     rollno: 123,
//     name: "Harshal",
//     city: "Bhopal",
//     fees: 89000,
//   },
//   {
//     rollno: 124,
//     name: "Karna",
//     city: "Delhi",
//     fees: 68000,
//   },
//   {
//     rollno: 125,
//     name: "Amar",
//     city: "Delhi",
//     fees: 98000,
//   },
// ];


// const App=()=>{
//   const ans=Student.map((key)=>{
//     return (
//       <>
//         <tr>
//           <td>{key.rollno}</td>
//           <td>{key.name}</td>
//           <td>{key.city}</td>
//           <td>{key.fees}</td>
//         </tr>
//       </>
//     );
//   })
//   return(
//     <>
//     <h1 align="center">Welcome To Cybrom</h1>
//     <table border="1" width="400">
//       <tr>
//         <th>rollno</th>
//         <th>Name</th>
//         <th>city</th>
//         <th>fees</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }
// export default App;






import EmpData from "./EmpData";
import Empdesign from "./Empdesign";
const App=()=>{
  const ans=EmpData.map((key)=>{
  return(
    <Empdesign eno={key.empno}/>
  )
  })
  return(
    <>

    </>
  )
}


