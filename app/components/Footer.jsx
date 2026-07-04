import Link from "next/link";
import { SUPPORT_EMAIL } from "../lib/landingData";

export default function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-4 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 text-sm text-slate-300">
          <p className="font-semibold text-white">Autismo con Sentido</p>
          <p>
            Ebook digital para madres cuidadoras que desean emprender desde
            casa con una guía práctica y empática.
          </p>
          <p>Soporte: <a className="text-secondary underline-offset-4 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
        </div>

        <nav aria-label="Enlaces legales" className="flex flex-wrap gap-4 text-sm font-medium">
          <Link className="text-slate-300 transition hover:text-white" href="/politica-de-privacidad">
            Política de privacidad
          </Link>
          <Link className="text-slate-300 transition hover:text-white" href="/terminos-y-condiciones">
            Términos y condiciones
          </Link>
          <Link className="text-slate-300 transition hover:text-white" href="/contacto">
            Contacto
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-5 text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Autismo con Sentido. Todos los derechos reservados.
      </div>
    </footer>
  );
}
