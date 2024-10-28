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

function NavRail() {
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
          <div
            id="area-user"
            className="m-4 bg-stone-500 bg-opacity-10 text-center my-auto py-4 px-2"
          >
            <Image
              src={userIcon}
              alt="User Icon"
              width={50}
              height={50}
              className="bg-slate-100 bg-opacity-40 rounded-full pb-2"
            />
            <div id="user-text" className="font-extrabold">
              User
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter />
      </DrawerContent>
    </DrawerRoot>
  );
}

export default NavRail;
