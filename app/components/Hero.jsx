"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HERO_BADGES,
  HOTMART_CHECKOUT_URL,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  PRODUCT_TYPE,
} from "../lib/landingData";

export default function Hero({
  title = `Emprende desde casa mientras acompañas a tu hijo dentro del espectro autista`,
  subtitle = `${PRODUCT_NAME} es un ebook digital para madres cuidadoras que quieren organizar sus ideas, recuperar confianza y empezar un emprendimiento realista sin abandonar el cuidado de su familia.`,
  price = PRODUCT_PRICE,
  ctaLabel = "Quiero acceder al ebook",
  ctaHref = HOTMART_CHECKOUT_URL,
  imageSrc = "/assets/booksp.png",
  imageAlt = `Portada de ${PRODUCT_NAME}`,
  badges = HERO_BADGES,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-[#fbeddf] to-white py-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(61,197,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,130,174,0.16),_transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="text-center lg:text-left">
          <span className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm sm:text-sm lg:justify-start">
            {PRODUCT_TYPE} • Acceso digital inmediato • Compra segura por Hotmart
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg lg:mx-0">
            {subtitle}
          </p>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
            Incluye el ebook digital + 6 bonos de apoyo
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Precio especial de lanzamiento: {price}
            </span>
            <span className="rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Descarga inmediata tras el pago
            </span>
          </div>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <motion.a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-secondary to-blue-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-600/20 transition sm:text-base"
            >
              {ctaLabel}
            </motion.a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white sm:text-base"
            >
              Resolver dudas
            </a>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {badges.map((badge) => (
              <div
                key={badge}
                className="rounded-2xl border border-white/70 bg-white/75 p-4 text-left shadow-sm backdrop-blur"
              >
                <p className="text-sm font-semibold text-slate-800">{badge}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-secondary/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/60 bg-white/75 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1000}
              height={1000}
              priority
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                Compra segura
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-100">
                Hotmart procesa el pago y la entrega digital.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-slate-800 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-terciary">
                Acceso inmediato
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Recibes instrucciones por correo después de confirmar tu compra.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
