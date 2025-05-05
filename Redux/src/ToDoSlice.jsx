import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push({ ...action.payload, completed: false });
    },
    delTask: (state, action) => {
      state.task = state.task.filter((task) => task.id !== action.payload.id);
    },
    compTask: (state, action) => {
      state.task = state.task.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
    },
    IncompTask: (state, action) => {
      state.task = state.task.map((task) =>
        task.id === action.payload.id ? { ...task, completed: false } : task
      );
    },
    EditTask: (state, action) => {
      state.task = state.task.map((task) =>
        task.id === action.payload.id
          ? { ...task, task: action.payload.newTask }
          : task
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTask, delTask, compTask, IncompTask, EditTask } =
  todoSlice.actions;
