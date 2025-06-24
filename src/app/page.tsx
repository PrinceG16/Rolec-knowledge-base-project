import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    // <HydrateClient>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        HELLO <span className="text-[hsl(280,100%,70%)]">T3</span> App
      </h1>
    </main>
    // </HydrateClient>
  );
}
