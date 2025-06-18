"use client";
import { motion } from "framer-motion";

const Hero = ({title1, title2}) => {
  return (
    <section className="bg-gradient-to-b from-primary to-terciary text-black py-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 text-center"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          {title1}
        </h1>
        <p className="font-medium sm:text-2xl md:text-3xl mb-6">
          {title2}
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;