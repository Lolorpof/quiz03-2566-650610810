import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Sirawit Sirabanchongkran",
    studentId: "650610810",
  });
};
