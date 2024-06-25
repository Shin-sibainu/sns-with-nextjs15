"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="">
        <Link href={"/"} className="font-bold text-xl text-orange-600">
          ShinCode
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex text-gray-600 text-sm">
        {/* LINKS */}
        <div className="flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Stories</Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="">
        <div className="hidden md:flex">
          <ClerkLoading>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            ></div>
          </ClerkLoading>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="text-sm">
              <Link href={"/sign-in"}>ログイン/新規登録</Link>
            </div>
          </SignedOut>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
