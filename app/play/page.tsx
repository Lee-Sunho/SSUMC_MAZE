"use client";
import ControlBox from "../components/ControlBox";
import { useRouter } from "next/navigation";
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
import Maze from "../components/Maze";
import { PageWrapper } from "../components/PageWrapper";
import Success from "../components/Success";
import Fail from "../components/Fail";

export default function Play() {
  const router = useRouter();

  // 뒤로 가기 했다가 다시 게임화면으로 돌아오는 경우 홈 화면으로 전환
  useEffect(() => {
    const temp = sessionStorage.getItem("hasVisited");
    const hasVisited = temp === "true";

    if (hasVisited) {
      router.replace("/");
      sessionStorage.setItem("hasVisited", "false");
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, [router]);

  const dispatch = useDispatch();

  const stack = useSelector<RootState, string[]>((state) => {
    return state.stack.stack;
  });

  const maze = useSelector<RootState, string[][]>((state) => {
    return state.control.maze;
  });

  const timer = useSelector<RootState, number>((state) => {
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
        if (move === "L" && !maze[currentY][currentX].includes("L")) {
          currentX--;
        } else if (move === "U" && !maze[currentY][currentX].includes("U")) {
          currentY--;
        } else if (move === "R" && !maze[currentY][currentX].includes("R")) {
          currentX++;
        } else if (move === "D" && !maze[currentY][currentX].includes("D")) {
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
    <PageWrapper>
      <div className="Play">
        <div className="timerContainer">
          <div className="timer">
            <img src="/assets/time.svg" />
            <span>{`${timer}초`}</span>
          </div>
        </div>
        <Maze />
        <div className="btn_container">
          <button className="btn_reset" onClick={reset} />
          <button className="btn_run" onClick={run} />
        </div>
        <ControlBox />
        {gameStatus === STATUS.WIN ? (
          <Success record={timer} />
        ) : gameStatus === STATUS.LOSE ? (
          <Fail record={timer} />
        ) : null}
      </div>
    </PageWrapper>
  );
}
