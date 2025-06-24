import { Breadcrumbs } from "@Rolec-Services/rolec-ui";
import Link from "next/link";

interface Product {
  title: string;
  imageUrl: string;
  description: string;
  downloads?: {
    label: string;
    icon: string;
  }[];
  specifications?: {
    icon: string;
    label: string;
    value: string;
  }[];
}

export function TopHeader({ product }: { product: Product }) {
  return (
    <div className="flex justify-center bg-zinc-100 py-4">
      <div className="flex w-[1200px] items-center justify-between text-gray-400">
        <ol className="hidden items-center space-x-2 text-sm text-[#B0B0B0] sm:!flex">
          <li className="font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <img
              src="/images/chevron-right.svg"
              alt="Chevron Right"
              className="h-4 w-4"
            />
          </li>
          <li className="font-medium">
            <Link href="/" className="hover:underline">
              Knowledge Base
            </Link>
          </li>
          {product.title ? (
            <li>
              <img
                src="/images/chevron-right.svg"
                alt="Chevron Right"
                className="h-4 w-4"
              />
            </li>
          ) : null}
          <li className="font-semibold text-[#B0B0B0]">{product.title}</li>
        </ol>

        {/* For desktop.... */}
        <h5 className="hidden items-center gap-2 text-xs sm:!flex">
          <span className="font-semibold text-[#888888]">Next Training:</span>
          <img
            src="/images/calendar.svg"
            alt="Calendar Icon"
            className="h-4 w-4"
          />
          <span className="font-medium text-[#74AF28]">
            15 April 2024 <span className="mx-1"> </span> Rolec R&D, Nottingham
          </span>
        </h5>

        {/* For mobile..... */}
        <h5 className="flex flex-col text-sm sm:!hidden">
          <span className="font-semibold text-[#888888]">Next Training:</span>
          <span className="mt-1 flex items-center justify-end gap-1 font-medium text-[#74AF28]">
            <img
              src="/images/calendar.svg"
              alt="Calendar Icon"
              className="h-4 w-4"
            />
            <br></br>
            <span>
              15 April 2024 <span className="mx-1" /> Rolec R&D, Nottingham
            </span>
          </span>
        </h5>
      </div>
    </div>
  );
}
