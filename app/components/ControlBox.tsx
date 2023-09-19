"use client";
import { ACTION } from "../constants";
import React, { useEffect } from "react";
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
    return state.stack.stack;
  });

  const dispatch = useDispatch();

  const clickSound = () => {
    const sound = new Audio("/audio/click.wav");
    sound.play();
  };

  const push = (action: ACTION) => {
    clickSound();
    dispatch(pushStack(action));
  };

  useEffect(() => {
    console.log(stack);
  }, [stack]);

  return (
    <div className="controlArea">
      <div className="stack_wrapper">
        <div className="stack">
          {stack
            .slice()
            .reverse()
            .map((item, index) => {
              return item === "U" ? (
                <img
                  className="img_fruit mandarin"
                  src="/assets/img_mandarin.svg"
                />
              ) : item === "D" ? (
                <img className="img_fruit" src="/assets/img_purplegrape.svg" />
              ) : item === "L" ? (
                <img className="img_fruit" src="/assets/img_greengrape.svg" />
              ) : item === "R" ? (
                <img className="img_fruit" src="/assets/img_strawberry.svg" />
              ) : null;
            })}
        </div>
      </div>
      <div className="cardList_background">
        <div className="cardList">
          <ActionCard onClick={push} action={ACTION.UP} />
          <ActionCard onClick={push} action={ACTION.DOWN} />
          <ActionCard onClick={push} action={ACTION.LEFT} />
          <ActionCard onClick={push} action={ACTION.RIGHT} />
        </div>
      </div>
    </div>
  );
};

// timer 변경될 때마다 ControlBox 리렌더링 안되도록
export default React.memo(ControlBox);
