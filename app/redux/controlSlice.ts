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
  playerPostion: IPlayerPosition;
  timer: number;
}

const initialState: IControlState = {
  status: STATUS.READY,
  playerPostion: { y: 0, x: 1 },
  timer: 0,
};

const controlSlice = createSlice({
  name: "stackSlice",
  initialState,
  reducers: {
    startGame: (state) => {
      state.status = STATUS.RUNNING;
      (state.playerPostion = { y: 0, x: 1 }), (state.timer = 0);
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
  },
});

export const { startGame, setStatusWin, setStatusLose, setPlyaerPosition } =
  controlSlice.actions;
export default controlSlice.reducer;