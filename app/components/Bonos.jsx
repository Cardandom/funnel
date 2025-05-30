"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const bonuses = [
  {
    icon: "🧠",
    title: "Bonus 1 – Guía emocional para mamás cuidadoras",
    image: "/assets/libros_muestra.png",
  },
  {
    icon: "💼",
    title: "Bonus 2 – Ideas de negocios flexibles y desde casa",
    image: "/assets/libros_muestra.png",
  },
  {
    icon: "🧘‍♀️",
    title: "Bonus 3 – Mini curso de autocuidado realista",
    image: "/assets/libros_muestra.png",
  },
  {
    icon: "📲",
    title: "Bonus 4 – Taller exprés de organización y rutinas",
    image: "/assets/libros_muestra.png",
  },
  {
    icon: "📱",
    title: "Bonus 5 – Aprende WhatsApp Business para vender sin complicaciones",
    image: "/assets/libros_muestra.png",
  },
  {
    icon: "🍽️",
    title:
      "Bonus 6 – Recetario sensorial para mejorar la hora de la comida con tu hijo",
    image: "/assets/libros_muestra.png",
  },
];

export default function Bonos() {
  return (
    <section className="py-10 bg-[url('/assets/bg_hero.webp')] bg-bottom bg-fixed bg-cover min-h-screen relative">
      <div className="absolute top-0 bg-slate-800/60 w-full h-full" />
      <div className="max-w-6xl mx-auto px-4 z-10 relative text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12"
        >
          Además del ebook, recibirás{" "}
          <span className="text-terciary">GRATIS</span> estos 6 bonos
          exclusivos:
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-900">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={bonus.image}
                  alt={bonus.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-base sm:text-lg font-medium">
                  {bonus.icon} {bonus.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center z-10 relative mt-14">
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-b from-secondary to-blue-700 text-white font-semibold md:text-xl xl:text-3xl px-6 py-3 rounded-full uppercase"
        >
          Toca aquí y accede al método ya mismo
        </motion.a>
      </div>
    </section>
  );
}
