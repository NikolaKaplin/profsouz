import type React from "react";
import { getMe } from "~/server/payload";
import { redirect } from "next/navigation";

export const AdminAccessProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
  if (user && user.role !== "admin") redirect("/");
  return <>{children}</>;
};
