import { ImageCard, Button } from "@rolec-services/rolec-ui";
import { Montserrat } from "next/font/google";
import { Banner } from "@rolec-services/rolec-ui";
import { Input } from "@rolec-services/rolec-ui";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export function BottomBannerAgain() {
  return (
    <>
      {/* Mobile */}
      <div className="justify-center gap-10 space-y-5 gap-y-6 px-4 py-5 sm:!flex sm:!hidden">
        <Banner
          body={{
            children: "Morbi rutrum velit sed mollis ornare.",
          }}
          className="min-h-[120px] w-full max-w-[1028px] px-6 py-6"
          heading={{
            children: <>Rolectrified Newsletter</>,
          }}
          image="images/frame567.png"
        >
          <Input
            className="border-grey-100 placeholder:text-muted-foreground hover:border-ev-200 focus:border-ev-500 active:border-ev-500 disabled:border-grey-300 disabled:text-grey-300 flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed"
            placeholder="Text placeholder"
            type="text"
          />

          <Button className="lg:w-fit" variant="ev-green-primary">
            Sign me up!
          </Button>
        </Banner>

        <Banner
          body={{
            children: "Morbi rutrum velit sed mollis ornare.",
          }}
          className="min-h-[120px] w-full max-w-[1028px] px-6 py-6"
          heading={{
            children: <>Rolectrified Podcast</>,
          }}
          image="images/frame887.png"
        >
          <Button className="lg:w-fit" variant="ev-green-primary">
            Listen Now Please
          </Button>
        </Banner>
      </div>

      {/* Desktop */}
      <div className="hidden justify-center gap-8 gap-y-6 px-4 py-5 sm:!flex">
        <Banner
          body={{
            children: "Morbi rutrum velit sed mollis ornare.",
          }}
          className="h-auto w-full sm:max-w-[500px]"
          heading={{
            children: <>Rolectrified Newsletter</>,
          }}
          image="images/frame567.png"
        >
          <Input
            className="border-grey-100 placeholder:text-muted-foreground hover:border-ev-200 focus:border-ev-500 active:border-ev-500 disabled:border-grey-300 disabled:text-grey-300 flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed"
            placeholder="Text placeholder"
            type="text"
          />

          <Button className="lg:w-fit" variant="ev-green-primary">
            Sign me up!
          </Button>
        </Banner>

        <Banner
          body={{
            children: "Morbi rutrum velit sed mollis ornare.",
          }}
          className="h-auto w-full md:max-w-[493px]"
          heading={{
            children: <>Rolectrified Podcast</>,
          }}
          image="images/frame887.png"
        >
          <Button className="lg:w-fit" variant="ev-green-primary">
            Listen Now Please
          </Button>
        </Banner>
      </div>
    </>
  );
}
