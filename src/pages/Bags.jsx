import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../pages/cardSlice";
import "../css/Style.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Bags = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
 useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []); 
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Bags");
        setData(response.data);
      } catch (error) {
        console.error("Failed to load bags data", error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container" data-aos="fade-right">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            {" "}
            {/* Changed col-md-6 to col-md-4 */}
            <Card className="Cards" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={item.images}
                className="card-image"
                style={{
                  width: "100%",
                  height: "150px", // Adjusted height for shorter box
                  objectFit: "contain",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.borderColor = "#007bff")
                }
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "#ddd")}
              />
              <hr />
              <Card.Body style={{ padding: "10px" }}>
                <Card.Title style={{ fontSize: "14px" }}>
                  {item.name}
                </Card.Title>
                <hr />
                <Card.Text style={{ fontSize: "9px" }}>
                  {item.description}
                </Card.Text>
                <hr />
                <Card.Text style={{ color: "blue", fontSize: "12px" }}>
                  {item.price}
                </Card.Text>
                <hr />
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  style={{ fontSize: "12px" }}
                >
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

export default Bags;
