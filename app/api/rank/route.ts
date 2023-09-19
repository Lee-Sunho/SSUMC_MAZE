import { connectDB } from "../../../util/database";
import { NextRequest, NextResponse } from "next/server";

interface IRank {
  userName: string;
  record: number;
}
export async function GET(req: Request) {
  const db = (await connectDB).db("rank");

  try {
    const all = await db.collection("rank").find().toArray();
    const sorted = all.sort((a: IRank, b: IRank) => {
      return a.record - b.record;
    });
    const ranking = sorted.slice(0, 10);
    return NextResponse.json(ranking);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: Request) {
  const db = (await connectDB).db("rank");
  const data = await req.json();
  console.log(data);

  try {
    const result = await db.collection("rank").insertOne(data);
    const rankings = await db.collection("rank").find().toArray();
    return NextResponse.json(rankings);
  } catch (error) {
    console.log(error);
  }
}
