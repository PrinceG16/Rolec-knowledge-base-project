import Header from "./_components/Header";
import Footer from "./_components/Footer";
import BottomBanner from "./_components/BottomBanner";
import TopHeader from "./_components/TopHeader";
import Banner from "./_components/Banner";
import BottomBannerAgain from "./_components/BottomBannerAgain";
import Grid from "./_components/Grid";
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
    <main className="bg-grey-50 w-full">
      <Header />

      <div className="px-5 py-1">
        <TopHeader product={nullProductData} />
        <Banner />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Grid />
        </div>
      </div>

      <BottomBanner />
      <BottomBannerAgain />

      <div className="bg-grey-800 flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Footer />
        </div>
      </div>
    </main>
  );
}
