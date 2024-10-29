"use client"

import LogIn from '@/lib/components/Auth/LogIn'
import SignUp from '@/lib/components/Auth/SignUp'
import { userAtom } from '@/lib/jotai/userAtom'
import { useAtom } from 'jotai'
import { redirect } from 'next/navigation'
import React from 'react'

function Auth() {
    const [user, setUser] = useAtom(userAtom);

    function SetAuth(userInput:{email:string, password:string}){
        // console.log("from SetAuth():");
        // console.log(userInput);
        if(userInput.email === "admin@iselberi.gg" && userInput.password === "pass"){
            setUser({...userInput, username:"Admin"});
            console.log(`logged in ${user.username}`)
            redirect("/");
        }
        else{
            console.log(`wrong email or password. Email is 'admin@iselberi.gg' and password is 'pass'`)
        }
    }
  return (
    <div className='ml-24 mr-6 bg-stone-300 bg-opacity-10 items-center justify-items-center grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div>
        Log in or sign up below
      </div>
      <div>
        <SignUp />
        <br />
        <LogIn SetAuth={SetAuth} />
      </div>
    </div>
  )
}

export default Auth
