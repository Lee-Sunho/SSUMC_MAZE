"use client";

import Link from "next/link";

export default function Home() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div>
        <Link href="/play" onContextMenu={onClick}>
          <button className="btn_start" />
        </Link>
      </div>
    </div>
  );
}
