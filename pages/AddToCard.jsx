import { useSelector } from "react-redux";
import "../css/Style.css";

const AddToCard = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          No items in the cart.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-striped table-bordered shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Specification</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="align-middle text-center">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      width="80"
                      height="80"
                      style={{ objectFit: "contain", borderRadius: "8px" }}
                    />
                  </td>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle">{item.specification}</td>
                  <td className="align-middle text-success fw-bold">
                    {item.price}
                  </td>
                  <td className="align-middle text-center">1</td>{" "}
                  
                </tr>
              ))}
              <tr className="table-secondary">
                <td colSpan="3" className="text-end fw-bold">
                  Total:
                </td>
                <td className="text-success fw-bold">
                  {/* {totalPrice.toFixed(2)} */}
                  {}
                </td>
                <td className="text-center fw-bold">{cartItems.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddToCard;
