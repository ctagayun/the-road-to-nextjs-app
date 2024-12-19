import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
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
  children: React.ReactNode; //*Where ReactElement only represents JSX, 
                             //* ReactNode represents everything that can be rendered.
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        {/* //*Wrap the Header and Main inside the our custom ThemeProvider component */}
        <ThemeProvider>
            <Header />
            <main   className="
                  min-h-screen flex-1
                  overflow-y-auto overflow-x-hidden
                  py-24 px-8
                  bg-secondary/20
                  flex flex-col
                ">{children} 
              </main>
              </ThemeProvider> 
      </body>
    </html>
  );
}
