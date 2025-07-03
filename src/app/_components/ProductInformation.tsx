"use client";
import Image from "next/image";
import type { Product } from "../_lib/randomExtras";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductInformation({ product }: { product: Product }) {
  const imageRefDesktop = useRef(null);
  const specsRefDesktop = useRef(null);
  const downloadsRefDesktop = useRef(null);
  const imageRefMobile = useRef(null);
  const specsRefMobile = useRef(null);
  const downloadsRefMobile = useRef(null);
  const imageInViewDesktop = useInView(imageRefDesktop, {
    amount: 0.2,
    once: true,
  });
  const specsInViewDesktop = useInView(specsRefDesktop, {
    amount: 0.2,
    once: true,
  });
  const downloadsInViewDesktop = useInView(downloadsRefDesktop, {
    amount: 0.2,
    once: true,
  });
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
    <>
      {/* DESKTOP */}
      <section className="bg-clear mx-auto hidden max-w-[1100px] px-6 py-10 text-gray-900 sm:!block">
        <div className="flex justify-between gap-10 px-6">
          <motion.div
            ref={imageRefDesktop}
            initial={{ opacity: 0, y: 40 }}
            animate={imageInViewDesktop ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex-col gap-8 md:w-1/2"
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

            {product.downloads && (
              <motion.div
                ref={downloadsRefDesktop}
                initial={{ opacity: 0, y: 40 }}
                animate={downloadsInViewDesktop ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="mb-4 text-2xl font-semibold">Downloads</h2>
                <ul className="space-y-2 text-gray-700">
                  {product.downloads.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <img
                        src={item.icon}
                        alt={`${item.label} icon`}
                        className="h-5 w-5"
                      />
                      <span className="text-black">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            ref={specsRefDesktop}
            initial={{ opacity: 0, y: 40 }}
            animate={specsInViewDesktop ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 md:w-1/2"
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
                        className="h-5 w-5"
                      />
                      <h3 className="font-semibold">{spec.label}</h3>
                    </div>
                    <p className="ml-[1.78rem] whitespace-pre-line">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* MOBILE */}
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
                  <p className="ml-[1.78rem] whitespace-pre-line">
                    {spec.value}
                  </p>
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
    </>
  );
}
