import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./colorSlice";
import todoReducer from "./ToDoSlice";
const store=configureStore({
    reducer:{
     myTask:todoReducer
    }
})
export default store;