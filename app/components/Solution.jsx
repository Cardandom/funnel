"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HOTMART_CHECKOUT_URL,
  PRODUCT_NAME,
  SOLUTION_POINTS,
} from "../lib/landingData";

const Solution = () => {
  return (
    <section className="relative bg-[url('/assets/bg_hero.webp')] bg-cover bg-center bg-scroll py-16 text-white md:bg-fixed">
      <div className="absolute inset-0 bg-slate-800/65" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-secondary">
            Qué encontrarás dentro del Pack
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            {PRODUCT_NAME} te ayuda a pasar de la idea suelta a una ruta inicial
            más clara.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
            No es material para guardar en una carpeta. Es una guía principal
            acompañada de recursos para autismo, rutinas y emprendimiento que sí
            puedas usar desde casa.
          </p>

          <ul className="mt-7 space-y-4 text-base leading-7 text-slate-100 sm:text-lg">
            {SOLUTION_POINTS.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur"
              >
                {point}
              </li>
            ))}
          </ul>

          <motion.a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-red-700 to-red-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-900/20 sm:text-base"
          >
            Empezar con el Pack
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-secondary/20 blur-3xl" />
          <Image
            src="/assets/booksp.png"
            alt={`Ebook principal incluido en ${PRODUCT_NAME}`}
            width={1200}
            height={1600}
            className="relative mx-auto h-auto w-full max-w-xl rounded-[2rem] shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
