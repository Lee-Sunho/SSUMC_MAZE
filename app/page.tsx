"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { startGame, toggleBgm } from "./redux/controlSlice";
import { resetStack } from "./redux/stackSlice";
import { StartWrapper } from "./components/StartWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RootState } from "./redux/store";

export default function Home() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlaying = useSelector<RootState, boolean>((state) => {
    return state.control.isBgmPlaying;
  });

  useEffect(() => {
    if (!isPlaying) {
      playMusic();
      dispatch(toggleBgm());
    }
  }, []); // isPlaying 상태가 변경될 때만 실행

  const playMusic = () => {
    const audio = new Audio("/audio/bgm.mp3");
    audio.play();
    audioRef.current = audio; // ref에 audio 요소 저장
    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    audio.play();
  };

  const clickSound = () => {
    const sound = new Audio("/audio/click.wav");
    sound.play();
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
                clickSound();
              }}
              className="btn_start"
            />
          </Link>
        </div>
      </div>
    </StartWrapper>
  );
}
