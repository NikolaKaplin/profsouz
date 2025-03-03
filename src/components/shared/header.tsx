"use client";

import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import type { JSX } from "react";
import { Button } from "../../components/ui/button";
import Logo from "./logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

export type HeadItem = {
  path: string;
  title: string;
  icon?: JSX.Element;
};

export default function Navbar({ items }: { items: HeadItem[] }) {
  return (
    <nav className="border-b bg-[#F2F8FD]">
      <div className="container flex h-16 items-center justify-between px-4 text-[14px] text-[#003f81]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo width={40} height={40} />
            <span className="text-lg font-semibold text-[#003f81] text-primary">
              Профсоюз КСТ
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="text-sm font-medium hover:text-primary"
            >
              <span className="no-underline hover:underline">{item.title}</span>
            </Link>
          ))}
          <Button className="group relative w-20 rounded-2xl bg-[#003f81]">
            <b className="group-hover:hidden">Войти</b>
            <LogIn className="hidden group-hover:block group-hover:animate-pulse" />
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-semibold text-[#003f81]">
                Меню
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {items.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="text-lg font-medium text-[#003f81] hover:text-primary"
                >
                  <span className="no-underline hover:underline">
                    {item.title}
                  </span>
                </Link>
              ))}
              <Button className="group relative mt-4 w-full rounded-2xl bg-[#003f81]">
                <b className="group-hover:hidden">Войти</b>
                <LogIn className="hidden group-hover:block group-hover:animate-pulse" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
