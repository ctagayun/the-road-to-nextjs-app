import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { homePath, ticketPath, ticketsPath } from "@/paths";

const inter = Inter ({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "The road to Next",
  description: "My road to Next application",
};

//*The RootLayout is good for rendering headings and navigation
//*for the whole application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

   {
  return (
    <html lang="en">
      <body className={inter.className}> 
         <nav  className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          ">
          <div>
              <Link href={homePath()} className="txt-lg font-bold">Home</Link>
          </div>
          <div>
              <Link href={ticketsPath()} className="txt-sm underline">Home</Link>
          </div>
         </nav>
         <main   className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col
          ">{children} </main>
      </body>
    </html>
  );
}
