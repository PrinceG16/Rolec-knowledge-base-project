import Link from "next/link";
import type { Product } from "../_lib/randomExtras";

export default function TopHeader({ product }: { product: Product }) {
  return (
    // Breadcrumbs for both desktop and mobile
    <div className="flex justify-center bg-zinc-100 py-4">
      <div className="flex w-[1200px] items-center justify-between text-gray-400">
        <ol className="text-grey-300 hidden items-center space-x-2 text-sm sm:!flex">
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
          <li className="text-grey-300 font-semibold">{product.title}</li>
        </ol>

        {/* the your next training message */}

        {/* For desktop.... */}
        <h5 className="hidden gap-2 text-xs sm:!flex">
          <span className="text-grey-350 font-semibold">Next Training:</span>
          <img
            src="/images/calendar.svg"
            alt="Calendar Icon"
            className="h-4 w-4"
          />
          <span className="text-ev-500 font-medium">
            15 April 2024 <span className="mx-1"> </span> Rolec R&D, Nottingham
          </span>
        </h5>

        {/* For mobile..... */}
        <h5 className="flex-col text-sm sm:!hidden">
          <span className="text-grey-350 font-semibold">Next Training:</span>
          <span className="text-ev-500 mt-1 flex items-center gap-1 font-medium">
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
