"use client";
import ControlBox from "../components/ControlBox";
import "./style.css";

const defaultMap: number[][] = [
  [-1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, -2],
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
            <div key={index} className="cell">
              {(() => {
                switch (cell) {
                  case -2:
                    return (
                      <img
                        className="text_finish"
                        src="/assets/finish_text.svg"
                      />
                    );
                  case -1:
                    return (
                      <img
                        className="text_start"
                        src="/assets/start_text.svg"
                      />
                    );
                  case 1:
                    return (
                      <img
                        className="arrow_start"
                        src="/assets/arrow_down.svg"
                      />
                    );
                  case 2:
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
    </div>
  );
}
