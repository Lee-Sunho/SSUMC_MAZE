"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stackSlice from "./stackSlice";
import controlSlice from "./controlSlice";

const reducers = combineReducers({
  stack: stackSlice,
  control: controlSlice,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
