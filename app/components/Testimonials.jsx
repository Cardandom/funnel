"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ana Gómez",
    feedback:
      "Esta solución cambió mi vida. Ahora manejo el estrés mucho mejor.",
  },
  {
    name: "Carlos Pérez",
    feedback: "Recomiendo este programa a todos mis amigos. Es excelente.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white px-4">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Testimonios
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="italic mb-4 text-sm sm:text-base">
              "{testimonial.feedback}"
            </p>
            <p className="font-semibold text-right text-sm">
              - {testimonial.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
