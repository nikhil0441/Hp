import { configureStore } from "@reduxjs/toolkit";
import myded from "./todoSlice";
const store=configureStore({
    reducer:{
       todo:myded
    }
})
    

export default store;