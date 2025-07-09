"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const bonuses = [
  {
    icon: "🧠",
    title: "Bonus 1 – Pictograma para casa y emociones.",
    image: "/assets/bono4.png",
  },
  {
    icon: "💼",
    title: "Bonus 2 – Lista para emprender desde casa",
    image: "/assets/bono2.png",
  },
  {
    icon: "📲",
    title: "Bonus 3 – Audios y escritos de bienestar y meditación en tiempos dificiles",
    image: "/assets/bono6.png",
  },
  {
    icon: "📱",
    title: "Bonus 4 – Aprende WhatsApp Business para vender sin complicaciones",
    image: "/assets/bono5.png",
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
          <span className="text-terciary">GRATIS</span> estos 4 bonos
          exclusivos:
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="w-full h-96 relative">
                <Image
                  src={bonus.image}
                  alt={bonus.title}
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="p-5 text-center text-white">
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
          href="https://pay.hotmart.com/A100587077F?checkoutMode=10&bid=1751909085221"
          whileInView={{ y: [0, -40, 0, -20, 0, -10, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.2, 0.4, 0.6, 0.75, 0.9, 1],
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-b from-red-700 to-red-500 text-white text-center font-semibold md:text-lg xl:text-2xl px-6 py-3 rounded-full my-5 uppercase"
        >
          Quiero los libros + Bonos ahora.
        </motion.a>
      </div>
    </section>
  );
}
