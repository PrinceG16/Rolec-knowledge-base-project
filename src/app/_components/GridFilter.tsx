"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import FilterButtonsRRRR from "./FilterButtonsRRRR";
import { api } from "~/trpc/react";
import type { Product } from "../_lib/randomExtras";

export default function ProductGridWithFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: products = [] } = api.products.getAll.useQuery();

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
      <div className="mt-2 md:hidden">
        <div className="flex flex-wrap justify-center gap-3 px-1">
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
                  className="block w-[165px] rounded-b-lg bg-white p-4 hover:shadow-lg"
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.title}
                    width={220}
                    height={220}
                  />
                  <p className="text-center text-sm font-semibold">
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
            {filteredProducts.map((img, index) => (
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
                  className="flex w-[235px] flex-col rounded-b-lg bg-white p-4 hover:shadow-lg"
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.title}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                  <p className="mt-2 pb-5 text-center text-sm font-semibold text-[#262626] hover:text-[#74AF28]">
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
