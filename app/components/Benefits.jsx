"use client";
import { motion } from "framer-motion";

const benefits = [
  "Técnicas comprobadas de relajación",
  "Acceso a expertos en bienestar",
  "Contenido disponible 24/7",
];

export default function BenefitsSection() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Beneficios de Nuestra Solución
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-center">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
