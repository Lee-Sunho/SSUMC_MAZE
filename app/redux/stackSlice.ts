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
    push: (state, action) => {
      state.stack.push(action.payload);
    },
    reset: (state) => {
      state.stack.length = 0;
    },
  },
});

export const { push, reset } = stackSlice.actions;
export default stackSlice.reducer;
