import { useEffect, useState } from "react";
import products from "../config/product";
import "../css/Home.css";
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
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const [mydata, setData] = useState([]);

  const loadData = async () => {
    let response = await axios.get(products);
    setData(response.data);
  };
useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    loadData(); // Fetch products when component mounts
  }, []);

  return (
    <div>
      {/* Carousel Section */}
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
            <img src={hp3} alt="Second slide" className="carousel-img" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={hp4} alt="Third slide" className="carousel-img" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Additional carousel items can be added here */}
        </Carousel>
      </div>

      {/* Headline Section */}
      <div>
        <div className="headline">
          <h1>Hey there!</h1>
          <hr />
          <h2>What can we help you ﬁnd today?</h2>
        </div>
      </div>

      {/* Products Section */}
      <div className="container" data-aos="fade-right">
        <div className="row">
          {mydata.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  src={item.images}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor:"pointer"
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
