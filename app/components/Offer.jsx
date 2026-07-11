"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HOTMART_CHECKOUT_URL,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  TRUST_POINTS,
} from "../lib/landingData";

const Offer = () => {
  return (
    <section
      id="oferta"
      className="relative bg-[url('/assets/bg_hero.webp')] bg-cover bg-center bg-scroll py-16 text-white md:bg-fixed"
    >
      <div className="absolute inset-0 bg-slate-800/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-secondary">
            Oferta y confianza
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            {PRODUCT_NAME} está pensado para ayudarte a empezar con claridad,
            recursos prácticos y sin exageraciones.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
            La compra es digital, se procesa en Hotmart y el acceso llega por
            correo. Aquí tienes el resumen para que sepas exactamente qué
            incluye el Pack y qué podrás agregar solo si lo decides durante el
            checkout.
          </p>

          <div className="mt-7 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  Precio especial de lanzamiento
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                  {PRODUCT_PRICE}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/50 px-4 py-3 text-right text-sm text-slate-100">
                <p className="font-semibold text-white">Incluye</p>
                <p>4 recursos digitales</p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-100 sm:text-base">
              <li>Ebook principal Emprendiendo con un Hijo Autista.</li>
              <li>Lista para Emprender desde Casa.</li>
              <li>Planificador Semanal de Rutinas.</li>
              <li>Pictogramas para Casa y Emociones.</li>
              <li>Acceso digital inmediato después del pago.</li>
              <li>Compra segura procesada por Hotmart.</li>
              <li>Productos adicionales opcionales disponibles durante el checkout.</li>
              <li>Soporte visible por correo para dudas de acceso.</li>
              <li>Si Hotmart muestra una garantía para esta oferta, será la que aplique.</li>
            </ul>
          </div>

          <motion.a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-secondary to-blue-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-900/20 sm:text-base"
          >
            Acceder al Pack Digital
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl shadow-slate-950/10">
            <Image
              src="/assets/booksp.png"
              alt={`Ebook principal incluido en ${PRODUCT_NAME}`}
              width={1100}
              height={1100}
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {TRUST_POINTS.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-100 backdrop-blur"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
