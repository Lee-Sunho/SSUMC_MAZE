"use client";

import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants";

// 시작 위치 0, 1
// 도착 위치 5, 4

export interface IPlayerPosition {
  y: number;
  x: number;
}

export interface IControlState {
  status: STATUS;
  mazeType: number;
  playerPostion: IPlayerPosition;
  timer: number;
}

const initialState: IControlState = {
  status: STATUS.READY,
  mazeType: 0,
  playerPostion: { y: 0, x: 1 },
  timer: 0,
};

const controlSlice = createSlice({
  name: "stackSlice",
  initialState,
  reducers: {
    startGame: (state) => {
      state.status = STATUS.RUNNING;
      state.mazeType = Math.floor(Math.random() * 3) + 1;
      state.playerPostion = { y: 0, x: 1 };
      state.timer = 0;
      console.log("game start");
    },
    setStatusWin: (state) => {
      state.status = STATUS.WIN;
      console.log("win");
    },
    setStatusLose: (state) => {
      state.status = STATUS.LOSE;
      console.log("lose");
    },
    setPlyaerPosition: (state, action) => {
      state.playerPostion = action.payload;
    },
    increaseTimer: (state) => {
      state.timer++;
    },
  },
});

export const {
  startGame,
  setStatusWin,
  setStatusLose,
  setPlyaerPosition,
  increaseTimer,
} = controlSlice.actions;
export default controlSlice.reducer;
