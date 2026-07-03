import Link from "next/link";
import { SUPPORT_EMAIL } from "../lib/landingData";

export const metadata = {
  title: "Política de privacidad",
  description: "Información básica sobre el tratamiento de datos personales del sitio Autismo con Sentido.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fff8f4] px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-900/5 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terciary">
          Transparencia
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          En este sitio recopilamos únicamente la información necesaria para
          procesar compras, responder consultas y mejorar la experiencia de la
          página. Al navegar o comprar, Hotmart puede gestionar parte de los
          datos asociados al pago y la entrega digital.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          No vendemos tus datos personales. Si nos escribes por soporte, tu
          correo se utilizará solo para responderte y dar seguimiento a tu
          solicitud.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Para dudas sobre privacidad o tratamiento de datos, escríbenos a{" "}
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
            href="/terminos-y-condiciones"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Ver términos
          </Link>
        </div>
      </div>
    </main>
  );
}
