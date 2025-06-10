import React from "react";

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
            plan: "BONO 1",
            price: "$19.90",
            desc: "Acceso a plantillas exclusivas",
          },
          {
            plan: "BONO 2",
            price: "$24.00",
            desc: "Estrategias de marketing avanzadas",
          },
          {
            plan: "BONO 3",
            price: "$15.00",
            desc: "Checklist para lanzamientos",
          },
          { plan: "BONO 4", price: "$23.00", desc: "Acceso a grupo privado" },
        ].map(({ plan, price, desc }, idx) => (
          <div key={idx} className="border-b last:border-none pb-4 mb-4">
            <div className="flex justify-between items-center text-left">
              <span className="font-bold text-gray-700">{plan}</span>
              <span className="text-red-600 font-semibold">{price}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </div>
        ))}

        <div className="flex justify-between font-bold text-lg mt-6">
          <span>Total en valor:</span>
          <span className="text-red-600">$81.90</span>
        </div>
      </div>

      {/* Texto de oferta especial */}
      <p className="max-w-xl text-base md:text-lg text-gray-700 mb-6">
        El valor real del EBOOK MÁS LOS BONOS supera los $80, pero puedes
        obtener hoy sin costo adicional el Ebook + LOS BONOS como parte de esta
        oferta especial DE HOY.
      </p>

      {/* Precio final */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl font-semibold text-gray-700 line-through">
          Antes $81.90
        </p>
        <p className="text-3xl md:text-4xl font-bold text-green-600">
          HOY $10.90
        </p>
      </div>

      {/* Botón final */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
        Toca aquí y accede al método ya mismo
      </button>
    </section>
  );
};

export default Offer;
