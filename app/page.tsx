"use client";
import { useEffect, useState } from "react";
import { ACTION } from "./constants";

const defaultMap: number[][] = [
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
];

interface IProps {
  action: ACTION;
  onClick: (action: ACTION) => void;
}

const ActionCard = ({ action, onClick }: IProps) => {
  return (
    <div onClick={() => onClick(action)} className="actionCard">
      {action}
    </div>
  );
};

export default function Home() {
  const mazeType = Math.floor(Math.random() * 3) + 1;
  const backgroundStyle = {
    backgroundImage: `url('maze${mazeType}.png')`,
  };

  const [stack, setStack] = useState<ACTION[]>([]);

  const pushStack = (action: ACTION) => {
    setStack([...stack, action]);
  };

  useEffect(() => {
    console.log(stack);
  }, [stack]);
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
      <div className="controlArea">
        <div className="stack"></div>
        <div className="cardList">
          <ActionCard onClick={pushStack} action={ACTION.GO} />
          <ActionCard onClick={pushStack} action={ACTION.TURNLEFT} />
          <ActionCard onClick={pushStack} action={ACTION.TURNRIGHT} />
        </div>
      </div>
    </div>
  );
}
