"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../lib/landingData";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative bg-[url('/assets/bg_white.jpeg')] bg-cover bg-center bg-scroll px-4 py-16 text-gray-800 md:bg-fixed"
    >
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gradient-to-b from-secondary to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md">
            Preguntas frecuentes
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Respuestas claras antes de comprar.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Si quieres revisar detalles sobre acceso, pago o soporte, aquí tienes
            la información principal de forma simple.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = activeIndex === i;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 sm:text-lg"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="px-5 py-4 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
