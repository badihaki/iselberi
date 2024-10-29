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
import Image from "next/image";
import React from "react";
import Link from "next/link";
// state imports
import { useAtom } from "jotai";
import { userAtom } from "@/lib/jotai/userAtom";

// image links
import worldIcon from "@/lib/graphics/icons/globe.svg";
import homeIcon from "@/lib/graphics/icons/house.svg";
import feedIcon from "@/lib/graphics/icons/newspaper.svg";
import friendIcon from "@/lib/graphics/icons/handshake.svg"

function NavRail() {
  const [user] = useAtom(userAtom);

  function CharacterArea(){
    return(
      <div
            id="character-area"
            className="transition-all ease-in-out duration-500 relative m-4 bg-stone-500 bg-opacity-10 hover:bg-opacity-65 text-center pt-4 px-4 rounded-3xl"
          >
            <Image id="character-icon"
              src={homeIcon}
              alt="Character Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full p-1"
            />
            <div id="character-text" className="relative font-extrabold bottom-10">
              Character
            </div>
          </div>
    )
  }

  function WorldArea(){
    return (
      <div
            id="world-area"
            className="transition-all ease-in-out duration-500 relative m-4 bg-stone-500 bg-opacity-10 hover:bg-opacity-65 text-center pt-4 px-4 rounded-3xl"
          >
            <Image id="world-icon"
              src={worldIcon}
              alt="World Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full p-1"
            />
            <div id="world-text" className="relative font-extrabold bottom-10">
              World
            </div>
          </div>
    )
  }

  function FeedArea(){
    return (
      <div
            id="feed-area"
            className="transition-all ease-in-out duration-500 relative m-4 bg-stone-500 bg-opacity-10 hover:bg-opacity-65 text-center pt-4 px-4 rounded-3xl"
          >
            <Image
              src={feedIcon}
              alt="Feed Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full p-1"
            />
            <div id="user-text" className="relative font-extrabold bottom-10">
              Feed
            </div>
          </div>
    )
  }

  function AlliesArea(){
    return(
      <div
      id="allies-area"
      className="transition-all ease-in-out duration-500 relative m-4 bg-stone-500 bg-opacity-10 hover:bg-opacity-65 text-center pt-4 px-4 rounded-3xl"
    >
      <Image
        src={friendIcon}
        alt="Feed Icon"
        width={50}
        height={50}
        className="bg-slate-100 bg-opacity-40 rounded-full p-1"
      />
      <div id="user-text" className="relative font-extrabold bottom-10">
        Allies
      </div>
    </div>
    )
  }

  return (
    <div className="absolute left-0 top-0">
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
            Navigation
          </Button>
        </DrawerTrigger>
        <DrawerContent offset={4} rounded="md">
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerTitle />
          </DrawerHeader>
          <DrawerBody>
            
            <Link href={"/"}>
              <FeedArea />
            </Link>
            
            <Link href={"/world"}>
              <WorldArea />
            </Link>
            
            {user.username != "" ?
            <Link href={"/allies"}>
              <AlliesArea />
            </Link>
            :
            ""
            }
            <br />
            
{
              user.username != "" ?
            <Link href={"/character"}>
              <CharacterArea />
            </Link>
            :
            ""
}

          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
}

export default NavRail;
