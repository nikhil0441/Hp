import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../pages/cardSlice";
import LaptopData from "../config/LaptopData";
import "../css/Style.css";

const Laptop = () => {
  const [myData, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        let response = await axios.get(LaptopData); // Ensure LaptopData is a valid URL
        setData(response.data);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      {myData.map((item) => (
        <Card className="Cards" style={{ width: "18rem" }} key={item.id}>
          <Card.Img variant="top" src={item.images} />
          <hr />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <hr />
            <Card.Text>{item.specification}</Card.Text>
            <hr />
            <Card.Text style={{ color: "blue" }}>{item.price}</Card.Text>
            <hr />
            <Button onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Laptop;
