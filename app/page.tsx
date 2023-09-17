"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { startGame } from "./redux/controlSlice";
import { resetStack } from "./redux/stackSlice";
import { StartWrapper } from "./components/StartWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  return (
    <StartWrapper>
      <div className="App">
        <div>
          <Link href="/play" replace={true} onContextMenu={onClick}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileFocus={{ scale: 1.1 }}
              onClick={() => {
                dispatch(resetStack());
                dispatch(startGame());
              }}
              className="btn_start"
            />
          </Link>
        </div>
      </div>
    </StartWrapper>
  );
}
