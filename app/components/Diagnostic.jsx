"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { DIAGNOSTIC_POINTS } from "../lib/landingData";

const Diagnostic = () => {
  return (
    <section className="relative bg-[url('/assets/bg_white.jpeg')] bg-cover bg-center bg-scroll py-16 text-slate-800 md:bg-fixed">
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="inline-flex rounded-full bg-gradient-to-b from-secondary to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md">
            Si hoy te pasa esto, no estás sola
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Muchas madres quieren emprender, pero su realidad también les pide
            sostener mucho al mismo tiempo.
          </h2>

          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700 sm:text-lg">
            {DIAGNOSTIC_POINTS.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-terciary/20 blur-3xl" />
          <Image
            src="/assets/frustation.webp"
            alt="Madre cuidadora organizando sus ideas para emprender desde casa"
            width={1000}
            height={1100}
            className="relative mx-auto h-auto w-full max-w-md rounded-[2rem] shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Diagnostic;
