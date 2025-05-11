import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        toast.warn("This product is already in the cart!"); // Non-blocking feedback
      } else {
        state.items.push({ ...action.payload, qnty: 1 });
        toast.success("Product added to cart!");
      }
    },
    qtyIncr: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qnty += 1;
        // toast.info(`Increased quantity: ${item.qnty}`);
      }
    },
    qtyDecr: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.qnty > 1) {
          item.qnty -= 1;
          // toast.info(`Decreased quantity: ${item.qnty}`);
        } else {
          toast.error("Quantity cannot be less than 1!");
        }
      }
    },
    proRemove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      toast.success("Product removed from cart!");
    },
  },
});

export const { addToCart, qtyIncr, qtyDecr, proRemove } = cartSlice.actions;
export default cartSlice.reducer;
