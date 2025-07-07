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
                <p className="text-grey-800 mt-2 pb-5 text-center text-sm font-semibold transition-colors duration-5 group-hover:text-[#74AF28]">
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
