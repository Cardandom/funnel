"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carla, mamá de Joaquín (5 años, autismo)",
    feedback:
      "Este libro me hizo llorar, porque sentí que alguien por fin entendía lo que vivo. Y me dio fuerzas para volver a intentarlo con mi negocio.",
  },
  {
    name: "Maribel, mamá emprendedora",
    feedback:
      "Emprender se volvió menos imposible. Aprendí a organizarme, a respetar mis tiempos y a no compararme más.",
  },
  {
    name: "Paola, mamá de Lucas",
    feedback:
      "El recetario sensorial del bonus 6 cambió mis días. ¡Mi hijo ahora prueba nuevas comidas sin llorar!",
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
