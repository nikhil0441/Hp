import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice=createSlice({
    name:"ToDo",
    initialState:{
     task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
        state.task.push(actions.payload);
        }
    }
})
export default ToDoSlice.reducer;
export const {addTask}=ToDoSlice.actions;