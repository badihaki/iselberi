"use client"

import LogIn from '@/lib/components/Auth/LogIn'
import SignUp from '@/lib/components/Auth/SignUp'
import { userAtom } from '@/lib/jotai/userAtom'
import { useAtom } from 'jotai'
import React from 'react'

function Auth() {
    const [user, setUser] = useAtom(userAtom);

    function SetAuth(userInput:{email:string, password:string}){
        // console.log("from SetAuth():");
        // console.log(userInput);
        if(userInput.email === "admin@iselberi.gg" && userInput.password === "pass"){
            setUser({...userInput, username:"Admin"});
            console.log(`logged in ${user.username}`)
        }
        else{
            console.log(`wrong email or password. Email is 'admin@iselberi.gg' and password is 'pass'`)
        }
    }
  return (
    <div className='ml-24 mr-6 p-2 bg-stone-300 bg-opacity-10'>
      Auth
      <SignUp />
      <LogIn SetAuth={SetAuth} />
    </div>
  )
}

export default Auth
