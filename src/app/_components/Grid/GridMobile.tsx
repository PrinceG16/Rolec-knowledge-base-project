"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "src/app/_lib/randomExtras";

export default function GridMobile({
  filteredProducts,
}: {
  filteredProducts: Product[];
}) {
  return (
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
                <p className="text-center text-sm font-semibold group-hover:text-[#74AF28]">
                  {img.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
