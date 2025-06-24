import Image from "next/image";
import { NavBar } from "@rolec-services/rolec-ui";

export function Header() {
  return (
    <div>
      {/* Mobile header */}
      <header className="flex justify-center sm:!hidden">
        <div className="flex w-full max-w-[1200px] flex-row items-center justify-between py-4">
          <div>
            <Image
              src="/images/Logo.svg"
              alt="Rolec Logo"
              width={150}
              height={130}
              priority
            />
          </div>
          <button className="text-black focus:outline-none">
            <Image
              src="/images/HamburgerIcon.svg"
              alt="Rolec Logo"
              width={40}
              height={130}
              priority
            />
          </button>
        </div>
      </header>

      {/* laptop/desktop/tablet header */}
      <header className="mx-auto hidden w-full max-w-[1200px] sm:!flex">
        <div className="flex w-full flex-col items-center justify-between py-0 sm:flex-row sm:gap-11 md:py-0">
          <div className="py-3">
            <Image
              src="/images/Logo.svg"
              alt="Rolec Logo"
              width={100}
              height={130}
              priority
              // className="w-full"
            />
          </div>

          <NavBar
            currentHref="/"
            navItems={[
              { children: "Home", href: "https://www.rolecserv.com/" },
              { children: "Knowledge Base", href: "/", notifications: 0 },
            ]}
          />
        </div>
      </header>
    </div>
  );
}
