"use client"


import { motion } from "framer-motion";

const Offer = () => {
  return (
    <section className="w-full px-4 py-12 bg-gray-100 flex flex-col items-center text-center">
      {/* Imagen centrada */}
      <img
        src="/assets/booksp.png"
        alt="Oferta Especial"
        className="w-64 h-auto mb-6"
      />

      {/* Títulos */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
        Transforma tu aprendizaje ahora
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-6">
        Descubre el poder del conocimiento
      </h2>

      {/* Botón principal */}
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg mb-10">
        Esto es lo que obtendrás hoy
      </button>

      {/* Cuadro de bonos */}
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 mb-8">
        {[
          {
            plan: "LIBRO DIGITAL",
            price: "$27.90",
            desc: "Emprendiendo con un hijo autista",
          },
          {
            plan: "Bono 1",
            price: "$19.90",
            desc: "Pictograma para casa y emociones",
          },
          {
            plan: "Bono 2",
            price: "$16.90",
            desc: "Lista para emprender desde casa",
          },
          {
            plan: "Bono 3",
            price: "$15.90",
            desc: "Audios y escritos de bienestar y meditación en tiempos dificiles",
          },
          {
            plan: "Bono 4",
            price: "$14.90",
            desc: "Aprende WhatsApp Business para vender sin complicaciones",
          },
        ].map(({ plan, price, desc }, idx) => (
          <div key={idx} className="border-b last:border-none pb-4 mb-4">
            <div className="flex justify-between items-center text-left">
              <span className="font-bold text-black uppercase">{plan}</span>
              <span className="relative text-red-600 font-semibold">
                {price}
                <span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-600 transform -translate-y-1/2"></span>
              </span>
            </div>
            <p className="text-gray-700 font-semibold mt-1">{desc}</p>
          </div>
        ))}

        <div className="flex justify-between font-bold text-lg mt-6">
          <span>Total en valor:</span>
          <span className="text-red-600">$95.50</span>
        </div>
      </div>

      {/* Texto de oferta especial */}
      <p className="max-w-2/3 text-xl md:text-3xl text-gray-700 my-10 font-semibold">
        El valor real del{" "}
        <span className="text-green-600 font-bold">EBOOK MÁS LOS BONOS</span>{" "}
        supera los <span className="text-green-600 font-bold">$80 USD</span>,
        pero puedes obtener hoy{" "}
        <span className="text-red-600 font-bold">SIN COSTO ADICIONAL</span> el
        Ebook + LOS BONOS como parte de esta oferta especial{" "}
        <span className="text-green-600 font-bold">DE HOY</span>
      </p>

      {/* Precio final */}
      <div className="text-center mb-8">
        <p className="text-2xl md:text-3xl font-bold text-green-600 line-through">
          Antes $95.50
        </p>
        <p className="text-4xl md:text-5xl font-extrabold text-red-600">
          HOY $10.90
        </p>
      </div>

      {/* Botón final */}
      <motion.button
        className="bg-green-500 uppercase hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg md:text-xl cursor-pointer"
        initial={{ y: 0 }}
        whileInView={{ y: [0, -40, 0, -20, 0, -10, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          times: [0, 0.2, 0.4, 0.6, 0.75, 0.9, 1],
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        Toca aquí y accede al método ya mismo
      </motion.button>
    </section>
  );
};

export default Offer;
