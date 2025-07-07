import { Button } from "@Rolec-Services/rolec-ui";
import { Banner } from "@Rolec-Services/rolec-ui";
import { Input } from "@Rolec-Services/rolec-ui";

export default function BottomBannerAgain() {
  return (
    <>
      {/* Mobile */}
      <div className="z-[2] space-y-5 px-4 py-5 sm:!hidden">
        <Banner
          body={{
            children: "Morbi rutrum velit sed mollis ornare.",
          }}
          className="px-6 py-6"
          heading={{
            children: <>Rolectrified Newsletter</>,
          }}
          image="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6d6iJ8H3uRTqEw6y1b04QDBcpeUkY9VrnLHKoh"
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
          className="px-6 py-6"
          heading={{
            children: <>Rolectrified Podcast</>,
          }}
          image="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6dsbHnT42bpR8Yq7fjGAyZrUwW13OBuoVMvn2h"
        >
          <Button className="lg:w-fit" variant="ev-green-primary">
            Listen Now Please
          </Button>
        </Banner>
      </div>
    </>
  );
}
