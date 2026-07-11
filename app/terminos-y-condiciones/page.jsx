import Link from "next/link";
import { SUPPORT_EMAIL } from "../lib/landingData";

export const metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones básicas de uso y compra del Pack Digital Emprendiendo con un Hijo Autista.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fff8f4] px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-900/5 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terciary">
          Información legal
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Términos y condiciones
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          La compra principal corresponde al Pack Digital Emprendiendo con un
          Hijo Autista y los recursos incluidos descritos en la landing. El
          acceso y la entrega se realizan de manera digital a través de Hotmart.
          Durante el checkout podrías agregar productos adicionales opcionales
          si decides complementar tu compra.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          El contenido se ofrece con fines informativos y de organización
          personal. No garantiza resultados específicos y no sustituye atención
          terapéutica, médica, psicológica ni profesional.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas ayuda con tu compra o acceso, escríbenos a{" "}
          <a className="text-blue-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Ir a contacto
          </Link>
        </div>
      </div>
    </main>
  );
}
