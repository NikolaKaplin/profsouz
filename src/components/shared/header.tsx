import Link from "next/link";
import Image from "next/image";
import { Settings, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { headItems } from "~/app/constants";
import { HeadItems } from "~/app/types";

export default function Navbar() {
  const pages: HeadItems[] = headItems;
  return (
    <nav className="border-b bg-[#F2F8FD]">
      <div className="container flex h-16 items-center justify-around text-[14px] text-[#003f81]">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="logo.svg"
              alt="Профсоюз КСТ Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-primary text-lg font-semibold text-[#003f81]">
              Профсоюз КСТ
            </span>
          </Link>
          {pages.map((item) => {
            return (
              <div className="hidden items-center gap-6 md:flex">
                <Link
                  href={item.path}
                  className="hover:text-primary text-sm font-medium"
                >
                  <span className="no-underline hover:underline">
                    {item.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <LogIn className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
