"use client";

import { motion } from "motion/react";
import { BENEFITS } from "../lib/landingData";

export default function BenefitsSection() {
  return (
    <section className="relative bg-[url('/assets/bg_white.jpeg')] bg-cover bg-center bg-scroll py-16 px-4 md:bg-fixed">
      <div className="absolute inset-0 bg-white/15" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-gradient-to-b from-secondary to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md">
            Qué vas a lograr con esta guía
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Beneficios reales, sin promesas exageradas.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            El objetivo no es que hagas todo perfecto. Es ayudarte a avanzar con
            una ruta clara, práctica y más amable con tu realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="inline-flex rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                {benefit.title}
              </div>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {benefit.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
