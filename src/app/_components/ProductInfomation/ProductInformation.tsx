"use client";
import Image from "next/image";
import type { Product } from "../../_lib/randomExtras";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductInformationMobile from "./ProductInformationMobile";
import ProductInformationDesktop from "./ProductInformationDesktop";

export default function ProductInformation({ product }: { product: Product }) {
  return (
    <>
      {/* DESKTOP */}
      <ProductInformationDesktop product={product} />

      {/* MOBILE */}

      <ProductInformationMobile product={product} />
    </>
  );
}
