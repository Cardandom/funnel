"use client";
import { motion } from "framer-motion";
import { useBreakpoint } from "../hooks/useBreakPoint";
import Image from "next/image";

export default function AboutSection() {
  const breakpoint = useBreakpoint();

  const yOffset = {
    mobile: -10,
    tablet: -10,
    desktop: -5,
  }[breakpoint];

  return (
    <section
      id="about"
      className="py-10 bg-[url('/assets/bg_hero.webp')] bg-bottom bg-fixed bg-cover min-h-screen relative"
    >
      <div className="absolute top-0 bg-slate-800/60 w-full h-full" />
      <motion.div
        className="max-w-5xl mx-auto px-4 text-center z-20 relative text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: yOffset }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/booksp.png"
          alt="Imagen principal del héroe"
          width={500}
          height={300}
          className="w-80 sm:w-96 md:w-[500px] h-auto rounded-xl mx-auto mb-4"
        />
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Soy mamá de una niña con autismo. Y sí, un día lo perdí todo… menos
          las ganas de salir adelante por ella y por mí.
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          Este libro no es solo sobre negocios, es sobre cómo reconstruirte
          mientras cuidas, sanas y creces junto a tu hijo.
        </p>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-b from-secondary to-blue-700 text-white font-semibold md:text-xl xl:text-3xl px-6 py-3 rounded-full my-5 uppercase"
        >
          Toca aquí y accede al método ya mismo
        </motion.a>
      </motion.div>
    </section>
  );
}
