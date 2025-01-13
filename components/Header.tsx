import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { getInitials } from "@/lib/utils";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="flex gap-2">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        <h1 className="text-white font-bold text-2xl mt-5">BookOps</h1>
      </Link>

      <ul className="flex flex-row align-middle justify-center gap-4">
        <li className="mb-1">
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-sky-500">
                {getInitials(session?.user?.name || "BO")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
            className="mb-10"
          >
            <Button className="bg-red-600 hover:bg-red-800 text-white">
              Logout
            </Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
