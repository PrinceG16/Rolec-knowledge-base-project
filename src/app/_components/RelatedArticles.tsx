"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RelatedArticles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className="bg-clear mx-auto max-w-[1100px] px-6 py-7 text-gray-900">
      <h2 className="text-2xl font-semibold">Related Articles</h2>
      <br />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <a href="\">
          <div className="flex min-h-[135px] items-center rounded-b-3xl bg-white duration-300 hover:scale-101 hover:shadow-lg">
            <div className="w-full p-4">
              <h2
                className="text-xs font-semibold"
                style={{ color: "#47701B" }}
              >
                EVCC Board
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                How to Identify & Replace a Faulty EVCC Board?
              </p>
            </div>
          </div>
        </a>

        <a href="\">
          <div className="flex min-h-[135px] items-center rounded-b-3xl bg-white duration-300 hover:scale-101 hover:shadow-lg">
            <div className="w-full p-4">
              <h2
                className="text-xs font-semibold"
                style={{ color: "#47701B" }}
              >
                EVCC Board
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                Resolving Charging Issues: Cable Detection, RFID & Authorisation
                Settings
              </p>
            </div>
          </div>
        </a>

        <a href="\">
          <div className="flex min-h-[135px] items-center rounded-b-3xl bg-white duration-300 hover:scale-101 hover:shadow-lg">
            <div className="w-full p-4">
              <h2
                className="text-xs font-semibold"
                style={{ color: "#47701B" }}
              >
                EVCC Board
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                Why Does My Chargepoint Keep Dropping Offline?
              </p>
            </div>
          </div>
        </a>

        <a href="\">
          <div className="flex min-h-[135px] items-center rounded-b-3xl bg-white duration-300 hover:scale-101 hover:shadow-lg">
            <div className="w-full p-4">
              <h2
                className="text-xs font-semibold"
                style={{ color: "#47701B" }}
              >
                EVCC Board
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                Power On but Not Charging? How to Diagnose & Fix the Issue
              </p>
            </div>
          </div>
        </a>

        <a href="\">
          <div className="flex min-h-[135px] items-center rounded-b-3xl bg-white duration-300 hover:scale-101 hover:shadow-lg">
            <div className="w-full p-4">
              <h2
                className="text-xs font-semibold"
                style={{ color: "#47701B" }}
              >
                EVCC Board
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                Why does my charger not connect the OCPP platform?
              </p>
            </div>
          </div>
        </a>

        <a href="\">
          <div className="flex min-h-[135px] items-center rounded-b-3xl bg-white duration-300 hover:scale-101 hover:shadow-lg">
            <div className="w-full p-4">
              <h2
                className="text-xs font-semibold"
                style={{ color: "#47701B" }}
              >
                EVCC Board
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                How do I get a refund for a defective charger?
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
