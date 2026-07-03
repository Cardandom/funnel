import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Diagnostic from "./components/Diagnostic";
import Solution from "./components/Solution";
import Bonos from "./components/Bonos";
import Offer from "./components/Offer";
import Questions from "./components/Questions";
import {
  HOTMART_CHECKOUT_URL,
  PRODUCT_NAME,
  PRODUCT_PRICE,
} from "./lib/landingData";

export default function Page() {
  return (
    <>
      <Hero
        title="Emprende desde casa a tu ritmo mientras acompañas a tu hijo dentro del espectro autista"
        subtitle={`${PRODUCT_NAME} es un ebook digital para madres cuidadoras que quieren organizar sus ideas, recuperar confianza y empezar un emprendimiento realista sin abandonar el cuidado de su familia.`}
        price={PRODUCT_PRICE}
        ctaLabel="Quiero acceder al ebook"
        ctaHref={HOTMART_CHECKOUT_URL}
      />
      <About />
      <Diagnostic />
      <Solution />
      <Benefits />
      <Bonos />
      <Testimonials />
      <Offer />
      <Questions />
      <CallToAction />
      <Footer />
    </>
  );
}
