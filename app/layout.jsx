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
    default: "Emprendiendo con un hijo Autista | Ebook para madres cuidadoras",
    template: "%s | Emprendiendo con un hijo Autista",
  },
  description:
    "Guía digital para madres cuidadoras que desean emprender desde casa, organizar su tiempo y empezar paso a paso con herramientas prácticas.",
  openGraph: {
    title: "Emprendiendo con un hijo Autista | Ebook para madres cuidadoras",
    description:
      "Guía digital para madres cuidadoras que desean emprender desde casa, organizar su tiempo y empezar paso a paso con herramientas prácticas.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emprendiendo con un hijo Autista | Ebook para madres cuidadoras",
    description:
      "Guía digital para madres cuidadoras que desean emprender desde casa, organizar su tiempo y empezar paso a paso con herramientas prácticas.",
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
