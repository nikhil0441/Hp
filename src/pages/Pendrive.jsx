import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../pages/cardSlice";
import "../css/Style.css";
import Aos from "aos";
import "aos/dist/aos.css"

const Pendrive = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []); 
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Pendrive");
        setData(response.data);
      } catch (error) {
        console.error("Failed to load pendrive data", error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container" data-aos="fade-right">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <Card className="Cards" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={item.images}
                className="card-image"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.borderColor = "#007bff")
                }
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "#ddd")}
              />
              <hr />
              <Card.Body>
                <Card.Title style={{ fontSize: "15px" }}>
                  {item.name}
                </Card.Title>
                <hr />
                <Card.Text style={{ fontSize: "10px" }}>
                  {item.specification}
                  {/* {console.log(item.name, item.specification)} */}
                </Card.Text>
                <hr />
                <Card.Text style={{ color: "blue" }}>{item.price}</Card.Text>
                <hr />
                <Button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pendrive;
