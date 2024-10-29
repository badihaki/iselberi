"use client"

import Feed from "@/lib/components/Feed/Feed";
import { userAtom } from "@/lib/jotai/userAtom";
import { useAtom } from "jotai";

export default function Home() {
  const [user] = useAtom(userAtom);
  return (
    <div className="grid grid-rows-[20px_0.2fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>Hello{user.username != ""? `, ${user.username}, Welcome back!!`:"! Please log in or sign up!"}</main>
      <div>
        <Feed />
      </div>
    </div>
  );
}
