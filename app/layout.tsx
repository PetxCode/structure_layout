import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" min-h-[100vh] p-2 w-full flex justify-center bg-neutral-800 text-white">
          <div className="w-full  lg:w-[1200px] ">
            <div className="p-2 border rounded-md h-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
