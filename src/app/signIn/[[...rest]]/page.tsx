"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="flex w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn-images.fleetnews.co.uk/thumbs/960x960/web-clean/1/root/rolec-ev-factory.png')",
      }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm">
        <SignIn />
      </div>
    </div>
  );
}
