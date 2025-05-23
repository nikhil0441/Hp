// import "../css/style.css";
import { useEffect, useState } from "react";
import products from "../config/product";
import "../css/Home.css"
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import hp2 from "../images/hp2.avif";
import hp3 from "../images/hp3.avif";
import hp4 from "../images/hp4.avif";
import hp5 from "../images/hp5.avif";
import hp6 from "../images/hp6.avif";
import hp7 from "../images/hp7.avif";
import hp8 from "../images/hp8.avif";
import hp9 from "../images/hp9.avif";
const Home = () => {
  const [mydata,setData]=useState([]);
 const loadData=async()=>{
   let response=await axios.get(products);
   setData(response.data);
  
 }
useEffect(() => {
  loadData(); // Fetch products when component mounts
}, []);


 
  return (
    //   <h1>Welcome to the Home Page!</h1>
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={hp2} alt="First slide" className="carousel-img" />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={hp3} alt="First slide" className="carousel-img" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={hp4} alt="First slide" className="carousel-img" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={hp5} alt="First slide" className="carousel-img" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={hp6} alt="First slide" className="carousel-img" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div className="headline">
          <h1>Hey there!</h1>
          <hr />
          <h2>What can we help you ﬁnd today?</h2>
        </div>
      </div>

      {/* ✅ Rendering data properly */}
      <div className="products" style={{cursor:"pointer"}}>
        {mydata.map((key) => (
          <div key={key.id}>
            <img src={key.images} alt={key.name} />
            <h4>{key.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
