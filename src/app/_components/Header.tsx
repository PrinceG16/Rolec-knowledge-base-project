import Image from "next/image";
import { NavBar } from "@Rolec-Services/rolec-ui";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white px-5 shadow-sm">
      {/* Mobile header */}
      <header className="flex items-center justify-between py-4 sm:!hidden">
        <Image
          src="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6d2TWrrWiWMtAsCY80oaP5LUyg9EKFchdDfXT4"
          alt="Rolec Logo"
          width={150}
          height={130}
        />
        <button className="text-black focus:outline-none">
          <Image
            src="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6dfsTSjmzTDeENW23khj8OHQwLyoFaszPv67AU"
            alt="Rolec Logo"
            width={40}
            height={130}
          />
        </button>
      </header>

      {/* laptop/desktop/tablet header */}
      <header className="mx-auto hidden max-w-[1200px] justify-between sm:!flex">
        <div className="flex gap-11">
          <Image
            src="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6d2TWrrWiWMtAsCY80oaP5LUyg9EKFchdDfXT4"
            alt="Rolec Logo"
            width={120}
            height={50}
          />

          <NavBar
            currentHref="/"
            navItems={[
              { children: "Home", href: "https://www.rolecserv.com/" },
              { children: "Knowledge Base", href: "/", notifications: 0 },
            ]}
          />
        </div>

        {/* Clerk user button BOTH mobile and desktop */}

        <div className="flex items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton
              afterSignOutUrl="/signIn"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>
    </div>
  );
}
