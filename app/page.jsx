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

export default function Page() {
  return (
    <>
      <Hero
        title1={"Emprendiendo con un hijo autista"}
        title2={
          "¿Cómo emprender cuando tu hijo necesita más atención que un trabajo a tiempo completo?"
        }
      />
      <About />
      <Hero
        title1={"Imagina poder ganar dinero desde casa y llevar a tu hijo a sus actividades y terapias, tener tiempo para el y para ti, que el trabajo no sea un impedimento"}
        title2={""}
      />
      <Diagnostic />
      <Hero
        title1={"Imagina poder ganar dinero desde casa y llevar a tu hijo a sus actividades y terapias, tener tiempo para el y para ti, que el trabajo no sea un impedimento"}
        title2={""}
      />
      <Solution />
      <Benefits />
      <Hero
        title1={"No desaproveches tiempo, atrévete a emprender desde casa y seguir cuidando de tus hijos."}
        title2={""}
      />
      <Bonos/>
      <Testimonials />
      <CallToAction />
      <Offer/>
      <Questions/>
      <Footer />
    </>
  );
}
