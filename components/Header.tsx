"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { getInitials } from "@/lib/utils";

const Header = ({session}:{session:Session}) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8 text-white">
        <li>
          <Link href={"/library"}>library</Link>
        </li>
        <li>
          <Link href={"/my-profile"}>
            <Avatar>
              <AvatarFallback className="bg-sky-500">
                {getInitials((session?.user?.name || "BO"))}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
