// // import my1 from "./Images/I.jpeg";
// // import my2 from "./Images/I2.jpeg";
// // import my3 from "./Images/Images1.jpeg";

// // const App=()=>{
// //     return (
// //       <>
// //         <h1>Welcome To React Js</h1>
// //         <img src={my1} alt="" />
// //         <hr />
// //         <img src={my2} alt="" />
// //         <hr />
// //         <img src={my3} alt="" />
// //       </>
// //     );
// // }
// // export default App;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// import Carousel from "react-bootstrap/Carousel";

// import my1 from "./Images/I.jpeg";
// import my2 from "./Images/I2.jpeg";
// import my3 from "./Images/Images1.jpeg";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import c1 from "./Images/T1.jpeg";
// import c2 from "./Images/T2.jpeg";
// import c3 from "./Images/T3.jpeg";
// import c4 from "./Images/T4.jpeg";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const App = () => {
//   return (
//     <>
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Carousel>
//         <Carousel.Item>
//           <img src={my1} width="100%" height="300" alt="" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={my2} width="100%" height="300" alt="" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={my3} width="100%" height="300" alt="" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       <Container>
//         <Row>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={c1} />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={c2} />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={c3} />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
        
//         </Row>
//       </Container>
//       <div id="Mycard">
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={c1} />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={c2} />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={c3} />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={c4} />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </div>
//       <h1>Welcome To Raect Js</h1>
//     </>
//   );
// };
// export default App;


















// const App=()=>{
//   const Display=()=>{
//     alert("Button are Clicked!")
//   }
//   return(
//     <>
//     <h1>Welcome To React Js</h1>
//     <button onClick={Display}> Click Me</button>
    
//     </>
//   )
// }
// export default App;





// const App=()=>{
//   const Myname=(nm)=>{
//     alert(`My Name is ${nm}`);
//   }
//   return(
//     <>
//     <h1>Welcome To React Js!</h1>
//     <button onClick={()=>{Myname("Nikhil!")}}>Click Me</button>
//     </>
//   )
// }
// export default App;







// const App=()=>{
//   const Display=(e)=>{
//     alert("Type Is: "+e.type +" Name is: "+e.target.name +" Value is:"+e.target.value)
//   }
//   return(
//     <>
//     <button onClick={Display} name="BTN1" value="MyBTN">Click Me</button>
//     </>
//   )
// }
// export default App;



// const App=()=>{
//   const Display=(nm,e)=>{
//     alert("Name is "+nm +" Value is : "+e.target.value +" Name is : "+e.target.name);
//   }
//   return(
//     <>
//     <button value="BTN" name="Button" onClick={(e)=>{Display("NIKHIL",e)}}>Click Me!</button>
//     </>
//   )
// }
// export default App;





const App=()=>{
  return(
    <>
    <h1>Welcome To react Js</h1>
    </>
  )
}
export default App;
 