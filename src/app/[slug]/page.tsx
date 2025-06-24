import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import React from "react";
import { TopHeader } from "../_components/TopHeader";
import { FAQ } from "../_components/FAQ";
import { Video } from "../_components/Video";
import { ProductInformation } from "../_components/ProductInformation";
import { ImageCard, NavBar } from "@Rolec-Services/rolec-ui";
import { getProductData } from "../lib/products";
import { RelatedArticles } from "../_components/RelatedArticles";

import { dataSet } from "../lib/products";

// export function generateStaticParams() {
//   return dataSet.map((product) => ({
//     slug: product.slug,
//   }));
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const productData = await getProductData(slug);
  return (
    <main className="relative z-0 mx-auto w-full max-w-[2000px] overflow-visible px-0">
      <div className="bg-white shadow-sm">
        <div className="px-5">
          {" "}
          <Header />
        </div>
      </div>
      <div className="px-5 py-1">
        <TopHeader product={productData} />
      </div>
      <ImageCard
        className="relative mx-auto h-[310px] w-full max-w-[1200px] sm:h-[500px]"
        image="images/ZuraB.png"
      >
        <div className="absolute top-7/11 left-1/12 text-center text-3xl font-semibold text-white sm:!text-6xl md:!text-7xl">
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
      <Footer />
    </main>
  );
}
