import type { Product } from "../../_lib/randomExtras";
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
