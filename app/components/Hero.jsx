"use client";
import { motion } from "framer-motion";

const Hero = ({title1, title2}) => {
  return (
    <section className="bg-gradient-to-b from-primary to-terciary text-slate-800 py-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {title1}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          {title2}
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;