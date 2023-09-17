"use client";
import { ACTION } from "../constants";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushStack } from "../redux/stackSlice";
import { RootState } from "../redux/store";
import { motion } from "framer-motion";

interface IProps {
  action: ACTION;
  onClick: (action: ACTION) => void;
}

const ActionCard = ({ action, onClick }: IProps) => {
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => onClick(action)}
      className={`actionCard ${action}`}
    ></motion.div>
  );
};

const ControlBox = () => {
  const stack = useSelector<RootState, string[]>((state) => {
    return state.stack.stack;
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
        <div className="textArea">
          <img src="/assets/sticker.svg" />
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

// timer 변경될 때마다 ControlBox 리렌더링 안되도록
export default React.memo(ControlBox);
