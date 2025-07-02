import Header from "./_components/Header";
import Footer from "./_components/Footer";
import BottomBanner from "./_components/BottomBanner";
import TopHeader from "./_components/TopHeader";
import Banner from "./_components/Banner";
import BottomBannerAgain from "./_components/BottomBannerAgain";
import ProductGridWithFilter from "./_components/GridFilter";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signIn");
  }

  const nullProductData = {
    id: 0,
    slug: "",
    category: [] as string[],
    title: "",
    imageUrl: "",
    description: "",
    downloads: [] as { label: string; icon: string }[],
    specifications: [] as { icon: string; label: string; value: string }[],
  };

  return (
    <main className="w-full bg-[#F6F6F6]">
      <Header />

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
