import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./ToDoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer, // Fixed the key name to match App's state usage
  },
});

export default store;
