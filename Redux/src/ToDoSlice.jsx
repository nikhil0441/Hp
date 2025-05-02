import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions);
            state.task.push(actions.payload);
        },
        delTask:(state,actions)=>{
            console.log(actions.payload.id);
            state.task=state.task.filter((key)=>
                key.id!==actions.payload.id);
            }
            
        }
        
    
});
export default todoSlice.reducer;
export const {addTask,delTask}=todoSlice.actions;
