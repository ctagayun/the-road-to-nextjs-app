import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
;


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
        <Header />
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
