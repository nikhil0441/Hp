import { createSlice } from "@reduxjs/toolkit"
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        user:"NIKHIL"
    },
    reducers:{
        changeName:(state)=>{
            state.user="HARSHAL";
        }
    }
})
export default nameSlice.reducer;
export const {changeName}=nameSlice.actions;