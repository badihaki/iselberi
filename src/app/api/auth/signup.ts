import { NextRequest, NextResponse } from "next/server";

// api/auth/signup
export default async function handle(req:NextRequest, res:NextResponse) {
    console.log(req.body);
    res.json();
}