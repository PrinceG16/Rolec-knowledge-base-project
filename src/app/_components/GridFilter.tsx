"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterButtonsRRRR from "./FilterButtonsRRRR";

import { api } from "~/trpc/react";

export default function ProductGridWithFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isFading, setIsFading] = useState(false);

  const { data: products = [], isLoading } = api.products.getAll.useQuery();

  useEffect(() => {
    setIsFading(true);

    const timeout = setTimeout(() => {
      const result =
        selectedCategory === null
          ? products
          : products.filter((product) =>
              product.category.includes(selectedCategory),
            );

      setFilteredProducts(result);
      setIsFading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [selectedCategory, products]);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  const fadeClass = `transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"}`;

  return (
    <>
      <FilterButtonsRRRR onFilterChange={setSelectedCategory} />

      {/* MOBILE GRID */}
      <div className={`mt-2 md:!hidden ${fadeClass}`}>
        <div
          className={`flex flex-wrap justify-center gap-3 px-1 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {" "}
          {filteredProducts.map((img, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(img.slug)}`}
              className="w-[165px] rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-101 hover:shadow-lg"
            >
              <Image
                src={`${img.imageUrl}`}
                alt={img.title}
                width={220}
                height={220}
                className=""
              />
              <p className="text-center text-sm font-semibold">{img.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className={`mt-2 hidden justify-center px-5 md:!flex ${fadeClass}`}>
        <div
          className={`flex max-w-6xl flex-wrap justify-center gap-7 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {" "}
          {filteredProducts.map((img, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(img.slug)}`}
              className="group flex w-[235px] flex-col rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-102 hover:shadow-lg"
            >
              <Image
                src={`${img.imageUrl}`}
                alt={img.title}
                width={200}
                height={200}
                className="w-full transition-transform duration-100 hover:scale-115"
              />
              <p className="mt-2 pb-5 text-center text-sm font-semibold text-[#262626] transition-colors duration-5 group-hover:text-[#74AF28]">
                {img.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
