import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Diagnostic from "./components/Diagnostic";
import Solution from "./components/Solution";
import PackResources from "./components/PackResources";
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
        title={PRODUCT_NAME}
        subtitle="Una guía práctica acompañada de recursos incluidos para ayudarte a comprender mejor el autismo, organizar las rutinas de tu hijo y comenzar un emprendimiento desde casa."
        price={PRODUCT_PRICE}
        ctaLabel="Quiero acceder al Pack Digital"
        ctaHref={HOTMART_CHECKOUT_URL}
      />
      <About />
      <Diagnostic />
      <Solution />
      <Benefits />
      <PackResources />
      <Testimonials />
      <Offer />
      <Questions />
      <CallToAction />
      <Footer />
    </>
  );
}
