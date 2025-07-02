"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="flex w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/48bae8_59d5b67eb50648f599f92b1bd499f16c~mv2.png/v1/fill/w_1897,h_485,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/48bae8_59d5b67eb50648f599f92b1bd499f16c~mv2.png')",
      }}
    >
      <div className="max-w-md justify-center px-8 py-8">
        <SignIn />
      </div>
    </div>
  );
}
