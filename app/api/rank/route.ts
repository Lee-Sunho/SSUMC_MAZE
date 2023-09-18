import { connectDB } from "../../../util/database";
import { NextRequest, NextResponse } from "next/server";

interface IRank {
  userName: string;
  record: number;
}
export async function GET(req: Request) {
  const db = (await connectDB).db("rank");

  try {
    const result = await db.collection("rank").find().limit(10).toArray();
    console.log(result);
    const ranking = result.sort((a: IRank, b: IRank) => {
      return a.record - b.record;
    });
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
