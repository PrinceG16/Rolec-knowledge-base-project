import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <ClerkProvider>
      <html lang="en" className={`${montserrat.variable}`}>
        <body className="bg-grey-50 flex h-screen w-full justify-center">
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
