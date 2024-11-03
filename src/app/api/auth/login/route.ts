import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
        const body = await req.json();
        const {email, password} = body;

        const user = await prisma.user.findFirst({where:{email}});
        if(!user){
            throw new Error("Email not found");
        }
        if(password !== user.password){
            throw new Error("Wrong password");
        }

        const response = NextResponse.json({user, success:true},{status:200});
        return response;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err:any){
        console.log(err);
        const response = NextResponse.json({error:err.message},{status:400})
        return response;
    }
}