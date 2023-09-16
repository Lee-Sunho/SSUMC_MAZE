import { IPlayerPosition } from "./redux/controlSlice";

export enum ACTION {
  UP = "U",
  DOWN = "D",
  LEFT = "L",
  RIGHT = "R",
}

export enum STATUS {
  READY,
  RUNNING,
  WIN,
  LOSE,
}

export const DESTINATION: IPlayerPosition = {
  y: 6,
  x: 4,
};
