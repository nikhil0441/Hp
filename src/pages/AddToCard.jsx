import { useSelector, useDispatch } from "react-redux";
import "../css/Style.css";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { qtyDecr, qtyIncr, proRemove } from "./cardSlice";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AddToCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[₹,]/g, ""));
    return acc + numericPrice * item.qnty;
  }, 0);

  return (
    <div className="container mt-5" data-aos="fade-down">
      <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          No items in the cart.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-striped table-bordered shadow-lg rounded">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Specification</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.images}
                      alt={item.name}
                      width="80"
                      height="80"
                      style={{ objectFit: "contain", borderRadius: "8px" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.specification}</td>
                  <td className="text-success fw-bold">{item.price}</td>
                  <td>
                    <div className="qty-controls">
                      <FaMinusSquare
                        onClick={() => dispatch(qtyDecr({ id: item.id }))}
                        style={{ cursor: "pointer", marginRight: "8px" }}
                      />
                      <span>{item.qnty}</span>
                      <FaPlusSquare
                        onClick={() => dispatch(qtyIncr({ id: item.id }))}
                        style={{ cursor: "pointer", marginLeft: "8px" }}
                      />
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(proRemove({ id: item.id }))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="table-secondary">
                <td colSpan="3" className="text-end fw-bold">
                  Total:
                </td>
                <td className="text-success fw-bold">
                  ₹{totalPrice.toLocaleString()}
                </td>
                <td className="text-center fw-bold" colSpan="2">
                  {cartItems.length} items
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddToCard;
