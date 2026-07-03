"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WHO_IS_IT_FOR } from "../lib/landingData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[url('/assets/bg_hero.webp')] bg-cover bg-center bg-scroll py-12 text-white md:bg-fixed"
    >
      <div className="absolute inset-0 bg-slate-800/65" />

      <motion.div
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-white/10 p-4 shadow-2xl backdrop-blur">
            <Image
              src="/assets/booksp.png"
              alt="Portada del ebook Emprendiendo con un hijo Autista"
              width={900}
              height={900}
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            ¿Para quién es esta guía?
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Pensada para madres que quieren emprender sin dejar de acompañar a su
            familia.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
            Esta guía nació para acompañar a mujeres que necesitan una ruta
            simple, humana y realista para empezar desde casa. No busca presionarte
            a hacerlo todo, sino ayudarte a dar un primer paso posible.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {WHO_IS_IT_FOR.map((item) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur"
                whileHover={{ y: -3 }}
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-100">{item.text}</p>
              </motion.article>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
            Si estás buscando una forma de empezar con pasos simples, sin sentir
            que debes tenerlo todo resuelto desde el principio, este ebook fue
            creado para acompañarte.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
