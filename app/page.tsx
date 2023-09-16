"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { startGame } from "./redux/controlSlice";

export default function Home() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <Link href="/play" onContextMenu={onClick}>
          <button
            onClick={() => {
              dispatch(startGame());
            }}
            className="btn_start"
          />
        </Link>
      </div>
    </div>
  );
}
