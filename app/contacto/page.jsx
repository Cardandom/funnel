import Link from "next/link";
import { SUPPORT_EMAIL } from "../lib/landingData";

export const metadata = {
  title: "Contacto",
  description: "Página de contacto y soporte para la guía digital Emprendiendo con un hijo Autista.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff8f4] px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-900/5 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terciary">
          Soporte
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tienes dudas sobre tu compra, acceso al ebook o los bonos,
          escríbenos y te ayudaremos a revisar tu solicitud.
        </p>
        <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Correo de soporte
          </p>
          <a
            className="mt-3 block text-xl font-bold text-blue-700 underline"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Revisa también tu carpeta de spam o promociones si no encuentras el
            correo de acceso de Hotmart.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Volver al inicio
          </Link>
          <Link
            href="/politica-de-privacidad"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </main>
  );
}
