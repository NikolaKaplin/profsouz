"use client";

import { LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type JSX } from "react";
import { Button } from "../../components/ui/button";
import Logo from "./logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Avatar as AvatarType, User } from "payload-types";
import { getMe } from "~/server/payload";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutButton } from "./logout-button";

export type HeadItem = {
  path: string;
  title: string;
  icon?: JSX.Element;
};

export default function Navbar({ items }: { items: HeadItem[] }) {
  const [user, setUser] = useState<User>();
  const [avatar, setAvatar] = useState<AvatarType | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const getUser = await getMe();

      if (getUser) {
        setUser(getUser!);
        if (typeof getUser.avatar !== "number") {
          setAvatar(getUser.avatar!);
        } else {
          setAvatar(undefined);
        }
      }
    })();
  }, []);

  return (
    <nav className="border-b bg-[#F2F8FD]">
      <div className="container flex h-16 items-center justify-between px-4 text-[14px] text-[#003f81] lg:justify-stretch">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo width={40} height={40} />
            <span className="text-lg font-semibold text-[#003f81] text-primary">
              Профсоюз КСТ
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center justify-center gap-6 text-center md:flex">
          {user?.role == "admin" ? (
            <Link
              key={null}
              href={"admin"}
              className="text-sm font-medium hover:text-primary"
            >
              <span className="no-underline hover:underline">Админ панель</span>
            </Link>
          ) : null}
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="text-sm font-medium hover:text-primary"
            >
              <span className="no-underline hover:underline">{item.title}</span>
            </Link>
          ))}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer rounded-full ring-2 ring-indigo-400 transition-all duration-300 hover:ring-indigo-300">
                  <AvatarImage
                    className="rounded-full"
                    src={avatar?.url ? avatar?.url : undefined}
                    alt={"User avatar"}
                  />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white" align="end">
                <DropdownMenuItem className="hover:cursor-pointer" asChild>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/admin/login">
              <Button className="items-center">Войти</Button>
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] rounded-r-xl sm:w-[400px]"
          >
            <SheetHeader>
              {user ? (
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 rounded-full ring-2 ring-indigo-400 transition-all duration-300 group-hover:ring-indigo-300">
                    <AvatarImage
                      className="rounded-full"
                      src={avatar?.url ? avatar?.url : undefined}
                      alt={"User avatar"}
                    />
                  </Avatar>
                  <h3>{user.email}</h3>
                </div>
              ) : (
                <Link href="/admin/login">
                  <Button className="group relative w-20 rounded-2xl bg-[#003f81]">
                    Войти
                  </Button>
                </Link>
              )}
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {user?.role == "admin" ? (
                <Link
                  key={null}
                  href={"admin"}
                  className="text-lg font-medium text-[#003f81] hover:text-primary"
                >
                  <span className="no-underline hover:underline">
                    Админ панель
                  </span>
                </Link>
              ) : null}
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
              {user && (
                <Link
                  href="/admin/logout"
                  className="flex items-center gap-2 text-lg font-medium text-[#003f81] hover:text-primary"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="no-underline hover:underline">Выйти</span>
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
