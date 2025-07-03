export default function Banner() {
  return (
    <div className="flex justify-center">
      <div className="relative h-[240px] w-[1200px] overflow-hidden rounded-b-xl">
        <img
          src="https://5coxtwhehm.ufs.sh/f/Y2LSVExOSM6dRD9Q24UMoB49D3Ttnm21vqIAuZUrhywCl7Kp"
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
