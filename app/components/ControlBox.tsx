"use client";
import { ACTION } from "../constants";
import { useEffect, useState } from "react";

interface IProps {
  action: ACTION;
  onClick: (action: ACTION) => void;
}

const ActionCard = ({ action, onClick }: IProps) => {
  return (
    <div
      onClick={() => onClick(action)}
      className={`actionCard ${action}`}
    ></div>
  );
};

const ControlBox = () => {
  const [stack, setStack] = useState<ACTION[]>([]);

  const pushStack = (action: ACTION) => {
    setStack([...stack, action]);
  };

  useEffect(() => {
    console.log(stack);
  }, [stack]);

  return (
    <div className="controlArea">
      <div className="stack">
        {stack.map((action) => {
          return <ActionCard onClick={pushStack} action={action} />;
        })}
      </div>
      <div className="cardList">
        <div>
          <span>행동카드</span>
        </div>
        <ActionCard onClick={pushStack} action={ACTION.UP} />
        <ActionCard onClick={pushStack} action={ACTION.DOWN} />
        <ActionCard onClick={pushStack} action={ACTION.LEFT} />
        <ActionCard onClick={pushStack} action={ACTION.RIGHT} />
      </div>
    </div>
  );
};

export default ControlBox;
