import Header from "../_components/Header";
import Footer from "../_components/Footer";
import React from "react";
import TopHeader from "../_components/TopHeader";
import FAQ from "../_components/FAQ";
import Video from "../_components/Video";
import ProductInformation from "../_components/ProductInfomation/ProductInformation";
import { ImageCard } from "@Rolec-Services/rolec-ui";
import getProductData from "../_lib/products";
import RelatedArticles from "../_components/RelatedArticles";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navigation from "../_components/Navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signIn");
  }

  const { slug } = await params;
  const productData = await getProductData(slug);
  if (!productData) return notFound();

  return (
    <main className="bg-grey-50 w-full">
      <Header />
      <div className="px-5 py-1">
        <TopHeader product={productData} />
      </div>
      <ImageCard
        className="relative mx-auto h-[310px] w-full max-w-[1200px] sm:h-[500px]"
        image="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6dQDmZcdEBRE67v8iZpmdsOq0VbLWTXy1hrz4Y"
      >
        <div className="absolute top-7/11 left-1/12 text-3xl font-semibold text-white sm:!text-6xl md:!text-7xl">
          {productData.title}
        </div>
      </ImageCard>
      <Navigation />
      <section id="technical-documentation">
        <ProductInformation product={productData} />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="videos">
        <Video />
      </section>
      <section id="articles">
        <RelatedArticles />
      </section>
      <div className="bg-grey-800 flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Footer />
        </div>
      </div>
    </main>
  );
}
