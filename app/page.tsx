"use client";
import ControlBox from "./components/ControlBox";

const defaultMap: number[][] = [
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
];

export default function Home() {
  const mazeType = Math.floor(Math.random() * 3) + 1;
  const backgroundStyle = {
    backgroundImage: `url('maze${mazeType}.png')`,
  };

  return (
    <div className="App">
      <div className="titleArea">
        <span className="title">슝슝이의 대모험</span>
        <span className="title">탕후루를 찾아라!</span>
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
