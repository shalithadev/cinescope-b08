import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from the API route! This is a test.", success: true, createdAt: new Date().toISOString() });
}