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
  maze: string[][];
  playerPostion: IPlayerPosition;
  timer: number;
}

const initialState: IControlState = {
  status: STATUS.READY,
  mazeType: 0,
  maze: [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ],
  playerPostion: { y: 0, x: 1 },
  timer: 0,
};

const maze1: string[][] = [
  ["LUD", "UR", "LU", "U", "UD", "UR"],
  ["LUR", "LR", "LR", "LR", "LU", "RD"],
  ["LR", "LR", "LR", "LR", "L", "UR"],
  ["LD", "O", "RD", "LRD", "LR", "LR"],
  ["LU", "RD", "LUD", "UD", "R", "LRD"],
  ["LRD", "LUD", "UD", "UD", "O", "URD"],
];

const maze2: string[][] = [
  ["LUD", "UD", "U", "UD", "U", "URD"],
  ["LU", "UD", "RD", "LU", "D", "UR"],
  ["LD", "URD", "LUD", "R", "LUD", "RD"],
  ["LU", "UD", "UD", "D", "UD", "UR"],
  ["LRD", "LU", "UD", "UD", "U", "RD"],
  ["LUD", "D", "UD", "URD", "LD", "URD"],
];

const maze3: string[][] = [
  ["LU", "URD", "LU", "UD", "U", "UR"],
  ["LR", "LU", "RD", "LU", "D", "RD"],
  ["L", "RD", "LU", "RD", "LU", "UR"],
  ["LRD", "LU", "RD", "LU", "R", "LR"],
  ["LU", "RD", "LU", "RD", "LR", "LR"],
  ["LD", "UD", "RD", "LUD", "O", "RD"],
];

const controlSlice = createSlice({
  name: "stackSlice",
  initialState,
  reducers: {
    startGame: (state) => {
      state.status = STATUS.WIN;
      state.mazeType = Math.floor(Math.random() * 3) + 1;
      state.playerPostion = { y: 0, x: 1 };
      state.timer = 0;
      console.log("game start");
    },
    setMaze: (state, action) => {
      switch (action.payload) {
        case 1: {
          for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
              state.maze[i][j] = maze1[i][j];
            }
          }
          break;
        }
        case 2: {
          for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
              state.maze[i][j] = maze2[i][j];
            }
          }
          break;
        }
        case 3: {
          for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
              state.maze[i][j] = maze3[i][j];
            }
          }
          break;
        }
        default: {
          console.log("mazeType error!!");
        }
      }
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
  setMaze,
  setStatusWin,
  setStatusLose,
  setPlyaerPosition,
  increaseTimer,
} = controlSlice.actions;
export default controlSlice.reducer;
