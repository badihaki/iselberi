import { NextRequest, NextResponse } from "next/server";


// api/auth/signup
export async function POST(req:NextRequest) {
    console.log(req.body);
    const response = NextResponse.json({
        message:"got a response",
        success:true
    },{status:200});

    return response;
}