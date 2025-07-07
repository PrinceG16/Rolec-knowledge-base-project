import { Button } from "@Rolec-Services/rolec-ui";
import { Banner } from "@Rolec-Services/rolec-ui";
import { Input } from "@Rolec-Services/rolec-ui";
import SquareBannerMobile from "./SquareBannerMobile";
import SquareBannerDesktop from "./SquareBannerDesktop";

export default function BottomBannerAgain() {
  return (
    <>
      {/* Mobile */}

      <SquareBannerMobile />

      {/* Desktop */}

      <SquareBannerDesktop />
    </>
  );
}
