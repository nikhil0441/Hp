import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    delTask: (state, action) => {
      state.task = state.task.filter((key) => key.id !== action.payload.id);
    },
  },
});

export default todoSlice.reducer;
export const { addTask, delTask } = todoSlice.actions;
