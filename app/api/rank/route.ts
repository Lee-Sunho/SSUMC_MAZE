import { connectDB } from "../../../util/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  const db = (await connectDB).db("rank");

  try {
    const rankings = await db.collection("rank").find().toArray();
    console.log(rankings);
    return NextResponse.json(rankings);
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
