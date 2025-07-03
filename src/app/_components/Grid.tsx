"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import FilterButtonsRRRR from "./FilterButtons";
import { api } from "~/trpc/react";

export default function Grid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const {
    data: products = [],
    isLoading,
    isError,
  } = api.products.getAll.useQuery();

  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((product) =>
          product.category.includes(selectedCategory),
        );

  return (
    <>
      <FilterButtonsRRRR onFilterChange={setSelectedCategory} />

      {isLoading && (
        <div className="text-center text-sm text-gray-500">Loading...</div>
      )}

      {isError && (
        <div className="text-center text-sm text-red-500">
          Failed to load products. Please try again later.
        </div>
      )}

      {/* MOBILE GRID */}

      <div className="mt-2 md:hidden">
        <div className="flex flex-wrap justify-center gap-3 px-1 transition-opacity duration-500">
          <AnimatePresence>
            {filteredProducts.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/${encodeURIComponent(img.slug)}`}
                  className="group block h-[195px] w-[165px] rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-102 hover:shadow-lg"
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.title}
                    width={220}
                    height={220}
                  />
                  <p className="group-hover:text-ev-500 text-center text-sm font-semibold">
                    {img.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* DESKTOP GRID */}

      <div className="mt-2 hidden justify-center px-5 md:!flex">
        <div className="flex max-w-6xl flex-wrap justify-center gap-7">
          <AnimatePresence>
            {filteredProducts.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/${encodeURIComponent(img.slug)}`}
                  className="group flex w-[235px] flex-col rounded-b-lg bg-white p-4 transition-transform duration-300 hover:scale-102 hover:shadow-lg"
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.title}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                  <p className="text-grey-800 group-hover:text-ev-500 mt-2 pb-5 text-center text-sm font-semibold transition-colors duration-5">
                    {img.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
