import "~/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Rolec Services Ltd | Knowledge Base",
  description: "Knowledge Base",
  icons: [{ rel: "icon", url: "/images/favicon.png" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="flex h-screen w-full justify-center bg-zinc-100">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
