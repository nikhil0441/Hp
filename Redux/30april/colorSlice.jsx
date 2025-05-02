import { createSlice } from "@reduxjs/toolkit"
import { changeName } from "../29april/nameSlice";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state,actions)=>{
            state.color=actions.payload;
        }
    }
})
export default colorSlice.reducer;
export  const{changeColor}=colorSlice.actions;