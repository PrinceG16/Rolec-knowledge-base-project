import Header from "../_components/Header";
import Footer from "../_components/Footer";
import React from "react";
import TopHeader from "../_components/TopHeader";
import FAQ from "../_components/FAQ";
import Video from "../_components/Video";
import ProductInformation from "../_components/ProductInformation";
import { ImageCard, NavBar } from "@Rolec-Services/rolec-ui";
import { getProductData } from "../lib/products";
import RelatedArticles from "../_components/RelatedArticles";
import { notFound } from "next/navigation";

import { db } from "~/server/db/index";
import { products } from "~/server/db/schema";

// export async function generateStaticParams() {
//   const rows = await db.select({ slug: products.slug }).from(products);

//   return rows.map((product) => ({ slug: product.slug }));
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const productData = await getProductData(slug);
  if (!productData) return notFound();

  const safeProductData = {
    ...productData,
    imageUrl: productData.imageUrl ?? "/images/evo.png",
    description: productData.description ?? "",
  };

  return (
    <main className="w-full bg-[#F6F6F6]">
      <Header />
      <div className="px-5 py-1">
        <TopHeader product={safeProductData} />
      </div>
      <ImageCard
        className="relative mx-auto h-[310px] w-full max-w-[1200px] sm:h-[500px]"
        image="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6dQDmZcdEBRE67v8iZpmdsOq0VbLWTXy1hrz4Y"
      >
        <div className="absolute top-7/11 left-1/12 text-3xl font-semibold text-white sm:!text-6xl md:!text-7xl">
          {productData.title}
        </div>
      </ImageCard>
      {/* Mobile */}
      <div className="mx-auto w-fit sm:!hidden">
        <NavBar
          currentHref="#technical-documentation"
          navItems={[
            {
              children: "Summary",
              href: "#technical-documentation",
            },
            { children: "FAQ", href: "#faq", notifications: 0 },
            { children: "Videos", href: "#videos", disabled: false },
            { children: "Articles", href: "#articles" },
          ]}
        />
      </div>
      {/* desktop */}
      <div className="mx-auto hidden w-fit sm:!block">
        <NavBar
          currentHref="#technical-documentation"
          navItems={[
            {
              children: "Technical Documentation",
              href: "#technical-documentation",
            },
            { children: "FAQ", href: "#faq", notifications: 0 },
            { children: "Videos", href: "#videos", disabled: false },
            { children: "Articles", href: "#articles" },
          ]}
        />
      </div>
      <section id="technical-documentation">
        <ProductInformation product={safeProductData} />
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
      <div className="flex justify-center bg-[#262626]">
        <div className="w-full max-w-screen-xl">
          <Footer />
        </div>
      </div>{" "}
    </main>
  );
}
