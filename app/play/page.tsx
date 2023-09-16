"use client";
import ControlBox from "../components/ControlBox";
import "./style.css";
import { resetStack } from "../redux/stackSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { DESTINATION, STATUS } from "../constants";
import {
  IPlayerPosition,
  setStatusLose,
  setStatusWin,
  setPlyaerPosition,
  increaseTimer,
} from "../redux/controlSlice";

/*
L - 왼쪽 못감
U - 위쪽 못감
R - 오른쪽 못감
D - 아래쪽 못감
*/
const defaultMap: number[][] = [
  [-3, -2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, -1, -4],
];

const maze1: string[][] = [
  ["LUD", "UR", "LU", "U", "UD", "UR"],
  ["LUR", "LR", "LR", "LR", "LU", "RD"],
  ["LR", "LR", "LR", "LR", "L", "UR"],
  ["LD", "O", "RD", "LRD", "LR", "LR"],
  ["LU", "R", "LUD", "UD", "R", "LRD"],
  ["LRD", "LD", "UD", "UD", "O", "URD"],
];

export default function Play() {
  //const mazeType = Math.floor(Math.random() * 3) + 1;
  const mazeType = 1;
  const backgroundStyle = {
    backgroundImage: `url('assets/maze${mazeType}.svg')`,
  };

  const dispatch = useDispatch();

  const stack = useSelector<RootState, string[]>((state) => {
    return state.stack.stack;
  });

  const timer = useSelector<RootState, STATUS>((state) => {
    return state.control.timer;
  });

  const gameStatus = useSelector<RootState, STATUS>((state) => {
    return state.control.status;
  });

  const playerPosition = useSelector<RootState, IPlayerPosition>((state) => {
    return state.control.playerPostion;
  });

  const reset = () => {
    dispatch(resetStack());
  };

  const run = () => {
    if (gameStatus === STATUS.RUNNING) {
      let currentY = playerPosition.y;
      let currentX = playerPosition.x;

      const moveStack = [...stack];
      const moveInterval = setInterval(() => {
        if (moveStack.length === 0) {
          clearInterval(moveInterval);
          return;
        }

        const move = moveStack.shift();
        if (!move) return;

        // 이동 로직
        if (move === "L" && !maze1[currentY][currentX].includes("L")) {
          currentX--;
        } else if (move === "U" && !maze1[currentY][currentX].includes("U")) {
          currentY--;
        } else if (move === "R" && !maze1[currentY][currentX].includes("R")) {
          currentX++;
        } else if (move === "D" && !maze1[currentY][currentX].includes("D")) {
          currentY++;
        } else {
          // 벽에 부딪혔을 때 게임 실패
          dispatch(setStatusLose());
          clearInterval(moveInterval);
          return;
        }

        dispatch(setPlyaerPosition({ y: currentY, x: currentX }));
      }, 500);
    }
  };
  // 게임이 진행 중인 경우에만 타이머 동작
  useEffect(() => {
    let t: any;
    if (gameStatus === STATUS.RUNNING) {
      t = setInterval(() => {
        dispatch(increaseTimer());
      }, 1000);
    }
    return () => {
      clearInterval(t);
    };
  }, [gameStatus]);

  // 이동할때마다 게임 승리 여부 확인
  useEffect(() => {
    console.log(playerPosition, gameStatus);
    if (
      playerPosition.y === DESTINATION.y &&
      playerPosition.x === DESTINATION.x
    ) {
      dispatch(setStatusWin());
    }
  }, [playerPosition]);

  return (
    <div className="Play">
      <div className="timerContainer">
        <div className="timer">
          <img src="/assets/time.svg" />
          <span>{`${timer}초`}</span>
        </div>
      </div>
      <div style={backgroundStyle} className="mazeContainer">
        {defaultMap.map((row, r_index) => {
          return row.map((cell, c_index) => (
            <div key={`${r_index} ${c_index}`} className="cell">
              {(() => {
                const key = `${r_index} ${c_index}`;
                switch (key) {
                  case "5 5":
                    return (
                      <img
                        className="text_finish"
                        src="/assets/finish_text.svg"
                      />
                    );
                  case "0 0":
                    return (
                      <img
                        className="text_start"
                        src="/assets/start_text.svg"
                      />
                    );
                  case "0 1":
                    return (
                      <img
                        className="arrow_start"
                        src="/assets/arrow_down.svg"
                      />
                    );
                  case "5 4":
                    return (
                      <img
                        className="arrow_finish"
                        src="/assets/arrow_down.svg"
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          ));
        })}
      </div>
      <ControlBox />
      <div className="btn_container">
        <button onClick={run}>출발</button>
        <button onClick={reset}>리셋</button>
      </div>
    </div>
  );
}
