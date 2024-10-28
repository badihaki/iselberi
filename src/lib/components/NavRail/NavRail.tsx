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
import userIcon from "@/lib/graphics/icons/user-round.svg";
import Link from "next/link";

function NavRail() {
  function HomeArea(){
    return(
      <div
            id="area-home"
            className="relative m-4 bg-stone-500 bg-opacity-10 text-center pt-4 px-4 rounded-3xl"
          >
            <Image id="home-icon"
              src={userIcon}
              alt="Home Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full pb-1"
            />
            <div id="user-text" className="relative font-extrabold bottom-10">
              Home
            </div>
          </div>
    )
  }

  function UserArea(){
    return (
      <div
            id="area-user"
            className="relative m-4 bg-stone-500 bg-opacity-10 text-center pt-4 px-4 rounded-3xl"
          >
            <Image id="user-icon"
              src={userIcon}
              alt="User Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full pb-1"
            />
            <div id="user-text" className="relative font-extrabold bottom-10">
              User
            </div>
          </div>
    )
  }

  function WorldArea(){
    return (
      <div
            id="area-world"
            className="relative mx-4 my-6 bg-stone-500 bg-opacity-10 text-center pt-4 px-4 rounded-3xl"
          >
            <Image id="world-icon"
              src={userIcon}
              alt="World Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full pb-1"
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
            id="area-feed"
            className="relative mx-4 my-6 bg-stone-500 bg-opacity-10 text-center pt-4 px-4 rounded-3xl"
          >
            <Image
              src={userIcon}
              alt="Feed Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full pb-1"
            />
            <div id="user-text" className="relative font-extrabold bottom-10">
              Feed
            </div>
          </div>
    )
  }

  return (
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
            <HomeArea />
          </Link>
          <UserArea />
          <WorldArea />
          <FeedArea />

        </DrawerBody>
        <DrawerFooter />
      </DrawerContent>
    </DrawerRoot>
  );
}

export default NavRail;
