import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { BottomBanner } from "./_components/BottomBanner";
import { TopHeader } from "./_components/TopHeader";
import { Banner } from "./_components/Banner";
import { BottomBannerAgain } from "./_components/BottomBannerAgain";
import { getProductData } from "./lib/products";
import { ProductGridWithFilter } from "./_components/GridFilter";

export default async function Home() {
  const nullProductData = {
    title: "",
    imageUrl: "",
    description: "",
    downloads: [],
    specifications: [],
  };

  return (
    <main className="relative z-0 w-full max-w-[2000px] bg-[#F6F6F6]">
      <div className="bg-white shadow-sm">
        <div className="px-5">
          {" "}
          <Header />
        </div>
      </div>

      <div className="px-5 py-1">
        <TopHeader product={nullProductData} />
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
  );
}
