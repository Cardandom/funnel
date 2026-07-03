"use client";

import { motion } from "motion/react";
import { TESTIMONIALS } from "../lib/landingData";

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[url('/assets/bg_white.jpeg')] bg-cover bg-center bg-scroll px-4 py-16 md:bg-fixed">
      <div className="absolute inset-0 bg-white/15" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gradient-to-b from-secondary to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md">
            Lo que más valoran las lectoras
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Comentarios honestos, humanos y centrados en la claridad del material.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-base leading-7 text-slate-700">
                “{testimonial.feedback}”
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
