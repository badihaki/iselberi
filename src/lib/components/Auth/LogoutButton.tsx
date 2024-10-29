import { Button } from '@/components/ui/button'
import { userAtom } from '@/lib/jotai/userAtom'
import { useAtom } from 'jotai'
import { redirect } from 'next/navigation';
import React from 'react'

export default function LogoutButton() {
    const [, setUser] = useAtom(userAtom);

    function OnLogout(){
        setUser({
            username:"",
            password:"",
            email:""
        })
        redirect("/");
    }

    return (
    <Button onClick={OnLogout}
    bgColor={"purple.900"} padding={2} fontWeight={"bolder"}
    >
        Log Out
    </Button>
  )
}
