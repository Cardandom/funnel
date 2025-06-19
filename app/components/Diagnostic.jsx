"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Diagnostic = () => {
  return (
    <section className="py-20 px-4 bg-[url('/assets/bg_white.jpeg')] bg-bottom bg-fixed bg-cover text-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center bg-gradient-to-b from-secondary to-blue-700 text-white md:text-xl xl:text-3xl px-6 py-3 rounded-full my-5 uppercase">
            ¿Te identificas con esto?
          </h2>
          <ul className="space-y-4 font-semibold text-base sm:text-lg md:text-xl">
            <li>✔️ Te sientes culpable por no generar ingresos mientras crías a tu hijo con autismo.</li>
            <li>✔️ Estás agotada física y emocionalmente, y piensas que no tienes tiempo para hacer otra cosa.</li>
            <li>✔️ Has intentado emprender, pero siempre hay una crisis, una terapia, una regresión…</li>
            <li>✔️ Te frustra ver otras mamás crecer profesionalmente mientras tú apenas sobrevives.</li>
            <li>✔️ Sientes que nadie entiende lo que es tener sueños y una crianza tan demandante.</li>
          </ul>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/assets/frustation.webp" // Cambia esto según tu imagen real
            alt="Mamá criando a hijo con autismo"
            width={500}
            height={300}
            className="rounded-xl mx-auto md:mx-0 w-72 sm:w-80 md:w-[400px] lg:w-[500px]  lg:h-[550px] "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Diagnostic
