"use client";
import ControlBox from "../components/ControlBox";
import "./style.css";

const defaultMap: number[][] = [
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
];

export default function Play() {
  const mazeType = Math.floor(Math.random() * 3) + 1;
  const backgroundStyle = {
    backgroundImage: `url('assets/maze${mazeType}.svg')`,
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
        {defaultMap.map((row) => {
          return row.map((cell, index) => (
            <div key={index} className="cell"></div>
          ));
        })}
      </div>
      <ControlBox />
    </div>
  );
}
