"use client";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../public";
// import SignIn from "./SignIn";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session }: any = useSession();
  return (
    <div>
      <div className="flex flex-row justify-evenly mt-4 z-10 bg-transparent fixed top-0 left-0 w-full text-amber-800">
        <Link href="/" className=" text-lg hover:text-amber-800 font-semibold">
          Home
        </Link>
        <Link
          href="/rent"
          className=" text-lg hover:text-amber-800 font-semibold"
        >
          Take-Rent
        </Link>
        <Image
          src={logo}
          alt="logo"
          height={44}
          width={44}
          className="border-2 rounded-md cursor-pointer"
        />
        <Link
          href="/about"
          className=" text-lg hover:text-amber-800 font-semibold"
        >
          About
        </Link>
        {!session ? (
          <Link
            href="/signin"
            className=" text-lg hover:text-amber-800 font-semibold"
          >
            SignIn
          </Link>
        ) : (
          <div>
            <button
              onClick={() => signOut()}
              className=" text-lg hover:text-amber-800 font-semibold"
            >
              LogOut
            </button>
          </div>
        )}
        {/* <Link
          href="/signin"
          className=" text-lg hover:text-amber-800 font-semibold"
        >
          SignIn
        </Link> */}
        {/* <div className="bg-transparent mt-1">
          <SignIn />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
