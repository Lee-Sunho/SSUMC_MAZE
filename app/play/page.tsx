"use client";
import ControlBox from "../components/ControlBox";
import "./style.css";
import { resetStack } from "../redux/stackSlice";
import { useDispatch } from "react-redux";

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
  ["LUD", "UD", "U", "U", "UD", "UR"],
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

  const reset = () => {
    dispatch(resetStack());
  };

  return (
    <div className="Play">
      <div className="timerContainer">
        <div className="timer">
          <img src="/assets/time.svg" />
          <span>00 : 00</span>
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
        <button>출발</button>
        <button onClick={reset}>리셋</button>
      </div>
    </div>
  );
}
