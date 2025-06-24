"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dataSet } from "../lib/products";
import { FilterButtonsRRRR } from "./FilterButtonsRRRR";

export function ProductGridWithFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === null
      ? dataSet
      : dataSet.filter((product) =>
          product.category.includes(selectedCategory),
        );

  return (
    <>
      <FilterButtonsRRRR onFilterChange={setSelectedCategory} />

      {/* MOBILE GRID */}
      <div className="mt-2 flex justify-center md:!hidden">
        <div className="flex max-w-6xl flex-wrap justify-center gap-4">
          {filteredImages.map((img, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(img.slug)}`}
              className="flex w-[150px] transform flex-col items-center rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-101 hover:shadow-lg"
            >
              <Image
                src={`/${img.imageUrl}`}
                alt={img.title}
                width={200}
                height={200}
                className="h-auto w-full object-cover"
              />
              <p className="mt-0 pb-0 text-center text-sm font-semibold">
                {img.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* LAPTOP/TABLET/DESKTOP GRID */}
      <div className="mt-2 flex hidden justify-center px-5 md:!flex">
        <div className="flex max-w-6xl flex-wrap justify-center gap-7">
          {filteredImages.map((img, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(img.slug)}`}
              className="flex w-[235px] transform flex-col items-center rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-101 hover:shadow-lg"
            >
              <Image
                src={`/${img.imageUrl}`}
                alt={img.title}
                width={200}
                height={200}
                className="h-auto w-full object-cover"
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
