import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        complete: false,
      };
    },

    toggleCompleteness: (state, { payload }) => {
      const { id } = payload;

      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },

    removeTodo : (state, action) => {
      const id = action.payload;
      state.allIds = state.allIds.filter((todoId) => todoId !== id);
    },
    
  },
});


export const { addTodo, toggleCompleteness, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
