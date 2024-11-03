"use client"

import LogIn from '@/lib/components/Auth/LogIn'
import SignUp from '@/lib/components/Auth/SignUp'
import { IUser } from '@/lib/interfaces/IUser'
import { userAtom } from '@/lib/jotai/userAtom'
import { useAtom } from 'jotai'
import { redirect } from 'next/navigation'
import React from 'react'

function Auth() {
    const [user, setUser] = useAtom(userAtom);

    function SetAuth(newUser:IUser){
        // console.log("from SetAuth():");
        // console.log(userInput);
        setUser(newUser);
        console.log(`logged in ${user.username}`)
        redirect("/");
    }
  return (
    <div className='ml-24 mr-6 bg-stone-300 bg-opacity-10 items-center justify-items-center grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div>
        Log in or sign up below
      </div>
      <div>
        <SignUp SetAuth={SetAuth}  />
        <br />
        <LogIn SetAuth={SetAuth} />
      </div>
    </div>
  )
}

export default Auth
