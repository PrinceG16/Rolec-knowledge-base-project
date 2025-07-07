"use client";
import Image from "next/image";
import type { Product } from "../../_lib/randomExtras";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductInformationMobile({
  product,
}: {
  product: Product;
}) {
  const imageRefMobile = useRef(null);
  const specsRefMobile = useRef(null);
  const downloadsRefMobile = useRef(null);

  const imageInViewMobile = useInView(imageRefMobile, {
    amount: 0.2,
    once: true,
  });
  const specsInViewMobile = useInView(specsRefMobile, {
    amount: 0.1,
    once: true,
  });
  const downloadsInViewMobile = useInView(downloadsRefMobile, {
    amount: 0.2,
    once: true,
  });

  return (
    <section className="bg-clear flex flex-col items-center gap-6 text-gray-900 sm:!hidden">
      <motion.div
        ref={imageRefMobile}
        initial={{ opacity: 0, y: 40 }}
        animate={imageInViewMobile ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={
            product.imageUrl.startsWith("/")
              ? product.imageUrl
              : `${product.imageUrl}`
          }
          alt="EV Charger"
          width={300}
          height={0}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        ref={specsRefMobile}
        initial={{ opacity: 0, y: 40 }}
        animate={specsInViewMobile ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-4 px-4"
      >
        {product.specifications && (
          <>
            <h2 className="text-2xl font-semibold">Specification</h2>
            {product.specifications.map((spec, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <img
                    src={spec.icon}
                    alt={`${spec.label} icon`}
                    className="h-5 w-5 object-contain"
                  />
                  <h3 className="font-semibold">{spec.label}</h3>
                </div>
                <p className="ml-[1.78rem] whitespace-pre-line">{spec.value}</p>
              </div>
            ))}
          </>
        )}
      </motion.div>

      <motion.div
        ref={downloadsRefMobile}
        initial={{ opacity: 0, y: 40 }}
        animate={downloadsInViewMobile ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="flex w-full flex-col gap-4 px-4"
      >
        {product.downloads && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Downloads</h2>
            <ul className="space-y-2 text-gray-700">
              {product.downloads.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-black">{item.label}</span>
                </div>
              ))}
            </ul>
          </div>
        )}
        <br />
      </motion.div>
    </section>
  );
}
