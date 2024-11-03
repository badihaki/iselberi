import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// api/auth/signup
export async function POST(req:NextRequest) {
    try{
        const body = await req.json();
        const {username, email, password, confirmPass} = body;
        
        if(password !== confirmPass){
            throw new Error("Passwords don't match.");
        }
        const emailCheck = await prisma.user.findFirst({where:{email}});
        if(emailCheck){
            throw new Error("Email already exists.")
        }

        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password
            }
        })

        const response = NextResponse.json({
            message:"got a response",
            success:true,
            user: newUser
        },{status:200});
        return response;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err:any){
        console.log(err.message);
        const response = NextResponse.json({message:err.message},{status:409});
        return response;
    }
}