import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { BottomBanner } from "./_components/BottomBanner";
import { TopHeader } from "./_components/TopHeader";
import { Banner } from "./_components/Banner";

import { BottomBannerAgain } from "./_components/BottomBannerAgain";
import { getProductData } from "./lib/products";
import { ProductGridWithFilter } from "./_components/GridFilter";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const productData = await getProductData("");

  return (
    // <HydrateClient>
    <main className="relative z-0 mx-auto w-full max-w-[2000px] overflow-visible bg-[#F6F6F6]">
      <div className="bg-white shadow-sm">
        <div className="px-5">
          {" "}
          <Header />
        </div>
      </div>

      <div className="px-5 py-1">
        <TopHeader product={productData} />
        <Banner />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl">
          <ProductGridWithFilter />
        </div>
      </div>

      <BottomBanner />
      <BottomBannerAgain />

      <div className="flex justify-center bg-[#262626]">
        <div className="w-full max-w-screen-xl">
          <Footer />
        </div>
      </div>
    </main>
    // </HydrateClient>
  );
}
