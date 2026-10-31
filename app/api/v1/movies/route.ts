import { NextResponse } from "next/server";
// import { MOVIES_DATA } from "@/lib/data";
import { db } from "@/db";

export async function GET() {
  try {
    const movies = await db.collection("movies").find().limit(50).toArray().catch((error) => {
      console.log("Datebase query failed: ", error);
      throw new Error("Failed to retrieve movies from the database.");
    });

    return NextResponse.json({ message: "Movies retrieved successfully.", success: true, movies });
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrieve movies.", success: false }, { status: 500 });
  }
}