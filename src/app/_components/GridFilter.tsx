"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FilterButtonsRRRR } from "./FilterButtonsRRRR";

import { api } from "~/trpc/react";

export function ProductGridWithFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: products = [], isLoading } = api.products.getAll.useQuery();

  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((product) =>
          product.category.includes(selectedCategory),
        );

  return (
    <>
      <FilterButtonsRRRR onFilterChange={setSelectedCategory} />

      {/* MOBILE GRID */}
      <div className="mt-2 md:!hidden">
        <div className="flex flex-wrap justify-center gap-3 px-1">
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
      <div className="mt-2 hidden justify-center px-5 md:!flex">
        <div className="flex max-w-6xl flex-wrap justify-center gap-7">
          {filteredProducts.map((img, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(img.slug)}`}
              className="rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-101 hover:shadow-lg"
            >
              <Image
                src={`${img.imageUrl}`}
                alt={img.title}
                width={200}
                height={200}
                className="w-full"
              />
              <p className="mt-2 pb-5 text-center text-sm font-semibold">
                {img.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
