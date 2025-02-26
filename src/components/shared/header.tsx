import { LogIn } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import { Button } from "../ui/button";
import Logo from "./logo";
export type HeadItem = {
  path: string;
  title: string;
  icon?: JSX.Element;
};

export default function Navbar({ items }: { items: HeadItem[] }) {
  return (
    <nav className="border-b bg-[#F2F8FD]">
      <div className="container flex h-16 items-center justify-around text-[14px] text-[#003f81]">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo width={40} height={40} />
            <span className="text-lg font-semibold text-[#003f81] text-primary">
              Профсоюз КСТ
            </span>
          </Link>
          {items.map((item, i) => {
            return (
              <div className="hidden items-center gap-6 md:flex" key={i}>
                <Link
                  href={item.path}
                  className="text-sm font-medium hover:text-primary"
                >
                  <span className="no-underline hover:underline">
                    {item.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <Button className="group relative w-20 rounded-2xl bg-[#003f81]">
          <b className="group-hover:hidden">Войти</b>
          <LogIn className="hidden group-hover:block group-hover:animate-pulse" />
        </Button>{" "}
      </div>
    </nav>
  );
}
