import Link from "next/link";

export default function Home() {
  return (
    <div className="App">
      <div className="btn_wrapper">
        <Link href="/play">
          <button className="btn_start" />
        </Link>
      </div>
    </div>
  );
}
