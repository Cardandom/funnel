"use client";

import { motion } from "motion/react";
import { HOTMART_CHECKOUT_URL } from "../lib/landingData";

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-b from-blue-700 to-slate-900 px-4 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-secondary">
          Último paso
        </span>
        <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
          Si este ebook encaja con tu momento, puedes empezar cuando decidas.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
          Accede a una guía digital en español, con compra segura por Hotmart y
          acceso inmediato después del pago.
        </p>

        <motion.a
          href={HOTMART_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-blue-700 shadow-lg shadow-black/10 sm:text-base"
        >
          Quiero acceder al ebook
        </motion.a>
      </motion.div>
    </section>
  );
}
