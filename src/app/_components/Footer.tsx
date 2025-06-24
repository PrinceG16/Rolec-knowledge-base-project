import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#262626] py-16 text-center text-white">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-start">
          <Image
            src="/images/WhiteLogo.svg"
            alt="Rolec Logo"
            width={110}
            height={40}
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/company/rolec-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/footerImages/Linkedin.svg"
                alt="LinkedIn"
                width={15}
                height={20}
              />
            </a>
            <a
              href="https://twitter.com/RolecEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/footerImages/instagram.svg"
                alt="X (Twitter)"
                width={15}
                height={20}
              />
            </a>
            <a
              href="https://www.facebook.com/RolecServices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/footerImages/Facebook.svg"
                alt="Facebook"
                width={10}
                height={20}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCR7rnlFCLH1L1x1vcOOqfnA/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/footerImages/youtube.svg"
                alt="YouTube"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/rolecev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/footerImages/x.svg"
                alt="Instagram"
                width={16}
                height={20}
              />
            </a>
          </div>

          <p
            className="mt-20 mb-5 text-left text-sm"
            style={{ color: "#888888" }}
          >
            © Rolec 2024 | Ralphs Lane,<br></br> Boston, Lincolnshire PE20 1QU
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-20">
          <div className="flex flex-col gap-2 text-left">
            <div className="text-base font-semibold text-zinc-400">
              RolecConnect Services
            </div>
            <a
              href="https://www.rolecserv.com/support-sales"
              className="hover:underline"
            >
              LeadConnect
            </a>
            <a
              href="https://www.rolecserv.com/support-products"
              className="hover:underline"
            >
              SupportConnect
            </a>
            <a href="/home" className="hover:underline">
              Knowledge Base
            </a>
            <a
              href="https://www.rolecserv.com/become-an-approved-installers"
              className="hover:underline"
            >
              Training
            </a>
            <a
              href="https://www.rolecserv.com/blog"
              className="hover:underline"
            >
              Forum
            </a>
          </div>

          <div className="flex flex-col gap-2 text-left">
            <div className="text-base font-semibold text-zinc-400">
              Company & Compliance
            </div>
            <a
              href="https://www.rolecserv.com/about-us"
              className="hover:underline"
            >
              About us
            </a>
            <a
              href="https://www.rolecserv.com/contact"
              className="hover:underline"
            >
              Contact us
            </a>
            <a
              href="https://www.rolecserv.com/catalogue"
              className="hover:underline"
            >
              Catalogues
            </a>
            <a
              href="https://www.rolecserv.com/policies/terms-and-conditions"
              className="hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="https://www.rolecserv.com/other-policies"
              className="hover:underline"
            >
              Other Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
