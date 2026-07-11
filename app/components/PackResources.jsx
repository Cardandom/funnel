"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  CHECKOUT_ADDONS,
  HOTMART_CHECKOUT_URL,
  PACK_RESOURCES,
} from "../lib/landingData";

export default function PackResources() {
  return (
    <section
      id="recursos"
      className="relative bg-[url('/assets/bg_hero.webp')] bg-cover bg-center bg-scroll py-16 md:bg-fixed"
    >
      <div className="absolute inset-0 bg-slate-800/65" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-secondary">
            Contenido del Pack
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            El Pack Digital incluye 4 recursos para acompañarte desde la guía
            principal hasta las rutinas de casa.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
            Recibirás inmediatamente material práctico para comprender mejor el
            autismo, organizar tu semana, emprender desde casa y apoyar la
            comunicación visual con pictogramas.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PACK_RESOURCES.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-2xl shadow-slate-950/10"
            >
              <div className="relative h-72 w-full bg-gradient-to-b from-white to-primary/40 p-4">
                <Image
                  src={resource.image}
                  alt={resource.alt}
                  fill
                  className="object-contain object-center p-4"
                />
              </div>

              <div className="space-y-4 p-5 text-slate-800">
                <div className="inline-flex rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                  {resource.value}
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {resource.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {resource.description}
                </p>
                <p className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-slate-900">Sirve para:</span>{" "}
                  {resource.servesFor}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-secondary">
            Opcionales durante la compra
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            También podrás agregar recursos exclusivos durante tu compra.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
            Estos productos adicionales no hacen parte del Pack principal. Si
            los quieres, podrás sumarlos de forma opcional en el checkout de
            Hotmart.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CHECKOUT_ADDONS.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-2xl shadow-slate-950/10"
            >
              <div className="relative h-72 w-full bg-gradient-to-b from-white to-primary/40 p-4">
                <Image
                  src={resource.image}
                  alt={resource.alt}
                  fill
                  className="object-contain object-center p-4"
                />
              </div>

              <div className="space-y-4 p-5 text-slate-800">
                <div className="inline-flex rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                  {resource.value}
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {resource.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {resource.description}
                </p>
                <p className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-slate-900">Sirve para:</span>{" "}
                  {resource.servesFor}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="max-w-3xl text-sm leading-6 text-slate-100 sm:text-base">
            El Pack Digital se entrega en una compra segura por Hotmart, con
            acceso inmediato después del pago. Los productos adicionales se
            agregan únicamente si los seleccionas durante el checkout.
          </p>
          <motion.a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-red-700 to-red-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-900/20 sm:text-base"
          >
            Quiero el Pack Digital
          </motion.a>
        </div>
      </div>
    </section>
  );
}
