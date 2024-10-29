"use client"

import { Button } from "@/components/ui/button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import Image from "next/image";
import React from 'react'
// image links
import userIcon from "@/lib/graphics/icons/user-round.svg";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/jotai/userAtom";

function UserDrawer() {
    const [user] = useAtom(userAtom);
  return (
    <div>
        <DrawerRoot size={"xs"} placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          variant={"outline"}
          size={"md"}
          backgroundColor={"slateblue"}
          margin={4}
          padding={2}
          fontSize={22}
        >
          <Image
          src={userIcon}
          alt="User Icon"
          width={50}
          height={50}
          className="bg-slate-100 bg-opacity-40 rounded-full p-1"       
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent offset={4} rounded="md">
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle />
        </DrawerHeader>
        <DrawerBody>
{
            user.username != "" ?
          <Link href={"/profile"}>
          User Profile
          </Link>
          :
          <Link href={"/auth"}>
          Log In Sign Up
          </Link>
}
        </DrawerBody>
        <DrawerFooter />
      </DrawerContent>
    </DrawerRoot>
    </div>
  )
}

export default UserDrawer
