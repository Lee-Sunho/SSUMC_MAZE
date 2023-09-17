"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { startGame } from "./redux/controlSlice";
import { resetStack } from "./redux/stackSlice";
import { PageWrapper } from "./components/PageWrapper";

export default function Home() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  return (
    <PageWrapper>
      <div className="App">
        <div>
          <Link href="/play" replace={true} onContextMenu={onClick}>
            <button
              onClick={() => {
                dispatch(resetStack());
                dispatch(startGame());
              }}
              className="btn_start"
            />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
