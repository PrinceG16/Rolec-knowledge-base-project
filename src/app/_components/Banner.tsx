import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export function Banner() {
  return (
    <div className="flex justify-center">
      <div className="relative h-[240px] w-[1200px] overflow-hidden rounded-b-xl">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="h-full w-full object-cover object-[center_38%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <p className="absolute inset-0 z-10 flex items-center justify-center text-3xl font-bold text-white">
          Knowledge base
        </p>
      </div>
    </div>
  );
}
