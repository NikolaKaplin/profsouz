import "~/styles/globals.css";

import { Comfortaa } from "next/font/google";
import Header from "~/components/shared/header";
import { Providers } from "~/components/shared/providers";
import { headItems } from "./constants";
import { Footer } from "~/components/shared/footer";
import { Toaster } from "sonner";

export { metadata } from "../metadata";

const comfortaa = Comfortaa({ subsets: ["cyrillic", "latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${comfortaa.className}`}>
      <body className="pb-8">
        <Providers>
          <Header items={headItems} />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
