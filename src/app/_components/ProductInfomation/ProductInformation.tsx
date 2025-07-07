"use client";
import Image from "next/image";
import type { Product } from "../../_lib/randomExtras";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductInformationMobile from "./ProductInformationMobile";

export default function ProductInformation({ product }: { product: Product }) {
  return (
    <>
      {/* DESKTOP */}
      <ProductInformationMobile product={product} />

      {/* MOBILE */}

      <ProductInformationMobile product={product} />
    </>
  );
}
