"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Video() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true,
  });

  return (
    <section className="bg-clear mx-auto max-w-[1100px] px-6 py-10 text-gray-900">
      <h2 className="mb-6 text-2xl font-semibold">Watch and Learn</h2>
      <br />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="mx-auto aspect-video w-full max-w-[1100px] overflow-hidden rounded-lg"
      >
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/Gzw7bo3_QoY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </section>
  );
}
