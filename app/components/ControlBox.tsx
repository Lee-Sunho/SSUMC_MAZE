"use client";
import { ACTION } from "../constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushStack } from "../redux/stackSlice";
import { RootState } from "../redux/store";

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
  const stack = useSelector<RootState, string[]>((state) => {
    return state.stack;
  });

  const dispatch = useDispatch();

  const push = (action: ACTION) => {
    dispatch(pushStack(action));
  };

  useEffect(() => {
    console.log(stack);
  }, [stack]);

  return (
    <div className="controlArea">
      <div className="stack"></div>
      <div className="cardList">
        <div>
          <span>행동카드</span>
        </div>
        <ActionCard onClick={push} action={ACTION.UP} />
        <ActionCard onClick={push} action={ACTION.DOWN} />
        <ActionCard onClick={push} action={ACTION.LEFT} />
        <ActionCard onClick={push} action={ACTION.RIGHT} />
      </div>
    </div>
  );
};

export default ControlBox;
