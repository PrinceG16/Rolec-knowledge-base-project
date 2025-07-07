"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import FilterButtonsRRRR from "../FilterButtons";
import { api } from "~/trpc/react";
import GridMobile from "./GridMobile";
import GridDesktop from "./GridDesktop";

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

      <GridMobile filteredProducts={filteredProducts} />

      {/* DESKTOP GRID */}

      <GridDesktop filteredProducts={filteredProducts} />
    </>
  );
}
