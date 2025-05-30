"use client";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="bg-blue-600 text-white py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          ¿Listo para Transformar tu Vida?
        </h2>
        <motion.a
          href="/checkout"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full"
        >
          Comienza Ahora
        </motion.a>
      </motion.div>
    </section>
  );
}
