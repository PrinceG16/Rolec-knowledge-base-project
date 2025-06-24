import { ImageCard, Button } from "@Rolec-Services/rolec-ui";
import { Montserrat } from "next/font/google";
import { Banner } from "@Rolec-Services/rolec-ui";

export function BottomBanner() {
  return (
    <>
      {/* MOBILE BANNER */}
      <div className="flex justify-center px-4 pt-5 sm:!hidden">
        <Banner
          body={{
            children:
              "Morbi rutrum velit sed mollis ornare. Donec viverra eleifend mi, vel laoreet lorem ut nisi faucibus.",
          }}
          className="min-h-[220px] w-full max-w-[1028px] px-6 py-6"
          heading={{
            children: (
              <>
                Arrange training <br /> at Your Premises
              </>
            ),
          }}
          image="/images/bottombanner.png"
        >
          <Button className="sm:w-fit" variant="ev-green-primary">
            Let us have a chat
          </Button>
        </Banner>
      </div>

      {/* DESKTOP BANNER */}
      <div className="hidden justify-center px-4 pt-7 pb-2 sm:!flex">
        <Banner
          body={{
            children:
              "Morbi rutrum velit sed mollis ornare. Donec viverra eleifend mi, vel laoreet lorem ut nisi faucibus.",
          }}
          className="h-auto min-h-[335px] w-full max-w-[1028px]"
          heading={{
            children: (
              <>
                Arrange Training <br /> at Your Premises
              </>
            ),
          }}
          image="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6dsjvsUB2bpR8Yq7fjGAyZrUwW13OBuoVMvn2h"
        >
          <Button className="sm:w-fit" variant="ev-green-primary">
            Let us have a chat
          </Button>
        </Banner>
      </div>
    </>
  );
}
