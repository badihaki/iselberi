import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    console.log(req);

    const response = NextResponse.json({message:"not implemented yet"},{status:400})
    return response;
}