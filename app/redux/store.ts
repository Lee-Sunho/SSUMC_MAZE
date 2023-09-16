"use client";

import { configureStore } from "@reduxjs/toolkit";
import stackSlice from "./stackSlice";

export const store = configureStore({
  reducer: stackSlice,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
