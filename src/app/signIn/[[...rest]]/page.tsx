"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="flex w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/15aa32_4586d80e2e2247419666f6867f4397f6~mv2.webp/v1/fill/w_980,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15aa32_4586d80e2e2247419666f6867f4397f6~mv2.webp')",
      }}
    >
      <div className="max-w-md justify-center px-8 py-8">
        <SignIn />
      </div>
    </div>
  );
}
