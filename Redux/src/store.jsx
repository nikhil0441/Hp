import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./counterSlice"; // Import your reducer here

const store = configureStore({
  reducer: {
    mycounter: myReducer, // Add your reducer to the store
  },
});
export default store;
