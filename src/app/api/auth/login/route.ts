import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
        const request = await req.json();
        console.log(request.body);
        
        const response = NextResponse.json({message:"ok"},{status:400});
        return response;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err:any){
        console.log(err);
        const response = NextResponse.json({error:err.message},{status:400})
        return response;
    }
}