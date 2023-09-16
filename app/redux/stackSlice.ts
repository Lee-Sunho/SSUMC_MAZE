"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface IStackState {
  stack: string[];
}

const initialState: IStackState = {
  stack: [],
};

const stackSlice = createSlice({
  name: "stackSlice",
  initialState,
  reducers: {
    pushStack: (state, action) => {
      state.stack.push(action.payload);
    },
    resetStack: (state) => {
      state.stack.length = 0;
    },
  },
});

export const { pushStack, resetStack } = stackSlice.actions;
export default stackSlice.reducer;
