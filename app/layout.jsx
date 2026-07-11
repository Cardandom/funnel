import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import TrackingScripts from "./components/TrackingScripts";
import { GTM_ID } from "./lib/tracking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Pack Digital Emprendiendo con un Hijo Autista | Recursos para autismo",
    template: "%s | Pack Digital Emprendiendo con un Hijo Autista",
  },
  description:
    "Pack digital para madres cuidadoras y familias con autismo: ebook principal, planificador de rutinas, pictogramas y recursos para emprender desde casa.",
  openGraph: {
    title:
      "Pack Digital Emprendiendo con un Hijo Autista | Recursos para autismo",
    description:
      "Recibe el ebook principal, Lista para Emprender desde Casa, Planificador Semanal y Pictogramas para Casa y Emociones en un solo Pack Digital.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pack Digital Emprendiendo con un Hijo Autista | Recursos para autismo",
    description:
      "Guía para padres y madres cuidadoras con recursos para autismo, rutinas, pictogramas y emprendimiento desde casa.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <TrackingScripts />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff8f4] text-slate-900`}
      >
        <noscript>
          <iframe
            title="Google Tag Manager"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
