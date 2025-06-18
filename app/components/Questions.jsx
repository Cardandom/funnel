"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿El libro es físico o digital?",
    answer:
      "El ebook Vence al Estrés Domina tu Mente y Recupera el Control es digital y viene en formato PDF. Este puede ser descargado desde cualquier dispositivo, celular, computadora o tablet. No se encuentra en ninguna tienda física.",
  },
  {
    question: "¿Cómo descargo el libro y los bonos después de haber comprado?",
    answer:
      "El primer paso es abrir el correo que llegó a tu bandeja de entrada proveniente de Hotmart (la plataforma que utilizamos para hacer entrega del material). En este correo se detalla paso a paso cómo descargar el libro. Son 3 simples pasos, de fácil entendimiento y ejecución.",
  },
  {
    question: "¿Qué métodos de pago hay disponibles?",
    answer: "Puedes pagar con Tarjeta de Débito, Crédito, PayPal.",
  },
  {
    question: "¿Cómo es el proceso de compra?",
    answer:
      "Una vez realices el pago a través de la plataforma recibes un correo electrónico con los datos de acceso para descargar inmediatamente en tus dispositivos el Ebook «Emprendiendo con un hijo autista».",
  },
  {
    question: "Si tengo algún inconveniente, ¿Dónde puedo escribir?",
    answer:
      "Puedes escribirnos al correo electrónico eduvirtualatam.com y allí resolveremos tus dudas o preguntas que tengas con la compra del ebook a la mayor brevedad posible.",
  },
  {
    question: "¿Es seguro pagar en línea?",
    answer:
      "Sí, utilizamos una plataforma de pago 100% segura llamada Hotmart. La cual es reconocida como una plataforma de educación y de pago a nivel mundial. Incluso puedes investigarla por tu cuenta. No almacenamos ninguna información de tu tarjeta de crédito y tu información personal está protegida.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 px-4 bg-[url('/assets/bg_white.jpeg')] bg-bottom bg-fixed bg-cover text-gray-800">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Preguntas frecuentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border-b pb-4">
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold"
            >
              {item.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 text-base text-gray-600"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
