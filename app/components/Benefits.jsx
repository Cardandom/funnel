"use client";
import { motion } from "framer-motion";

const benefits = [
  "✅ Aprenderás cómo organizar tu tiempo sin sentirte abrumada.",
  "✅ Descubrirás qué tipo de emprendimiento va con tu realidad como mamá cuidadora.",
  "✅ Sanarás tus pensamientos de culpa, comparación y frustración.",
  "✅ Te sentirás acompañada y validada, como si hablaras con una amiga que ya vivió lo mismo.",
  "✅ Tendrás una guía clara para dar tus primeros pasos con un negocio desde casa."
];

export default function BenefitsSection() {
  return (
    <section className="bg-gray-100 py-14 px-4">
      <motion.h2
        className="text-xl sm:text-2xl w-fit lg:text-3xl font-bold mx-auto mb-6 text-center bg-gradient-to-b from-secondary to-blue-700 text-white px-6 py-3 rounded-full my-5 uppercase"
        transition={{duration: 0.5}}
        >
        ¿Qué vas a lograr con la adquisición de este libro?
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-neutral-500 shadow-lg mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-center font-semibold text-lg">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
