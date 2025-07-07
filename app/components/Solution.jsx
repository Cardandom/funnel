"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="py-20 px-4 bg-[url('/assets/bg_hero.webp')] bg-bottom bg-fixed bg-cover min-h-screen relative text-white">
      <div className="absolute top-0 left-0 bg-slate-800/60 w-full h-full" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10 relative">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center bg-gradient-to-b from-secondary to-blue-700 text-white md:text-xl xl:text-3xl px-6 py-3 rounded-full my-5 uppercase">
            ¡La Solución Está Aquí!
          </h2>
          <p className="my-5 text-base font-semibold sm:text-lg">
            Este no es otro Ebook que te llenará de teoría imposible de aplicar.
          </p>
          <p className="my-5 text-base font-semibold sm:text-lg">
            <span className="text-secondary text-bold uppercase">
              “Emprendiendo con un hijo autista”
            </span>{" "}
            es un ebook creado desde la experiencia real, con herramientas
            emocionales y estrategias prácticas para que puedas:
          </p>
          <ul className="space-y-4 text-base font-semibold sm:text-lg">
            <li>💡 Crear un emprendimiento que se adapte a tu ritmo.</li>
            <li>❤️ Sanar tus emociones sin culpas,</li>
            <li>
              🚀 Avanzar, paso a paso, sin dejar de ser la madre presente que tu
              hijo necesita.
            </li>
          </ul>
          <p className="my-5 text-base font-semibold sm:text-lg">
            No es teoría. Es vida real. Es para ti.
          </p>
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
            className="inline-block bg-gradient-to-b from-red-700 to-red-500 text-white text-center font-semibold md:text-md xl:text-xl px-6 py-3 rounded-full my-5 uppercase"
          >
            Quiero emprender exitosamente sin dejar de ser mamá
          </motion.a>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/assets/booksp.png"
            alt="Mamá criando a hijo con autismo"
            width={500}
            height={300}
            className="rounded-xl mx-auto w-72 sm:w-80 md:w-[300px] lg:w-[450px]  lg:h-[400px] inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
