import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Diagnostic from "./components/Diagnostic";
import Solution from "./components/Solution";

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
        title1={""}
        title2={
          "Imagina poder ganar dinero desde casa y llevar a tu hijo a sus actividades y terapias, tener tiempo para el y para ti, que el trabajo no sea un impedimento"
        }
      />
      <Diagnostic />
      <Hero
        title1={""}
        title2={
          "Imagina poder ganar dinero desde casa y llevar a tu hijo a sus actividades y terapias, tener tiempo para el y para ti, que el trabajo no sea un impedimento"
        }
      />
      <Solution />
            <Hero
        title1={""}
        title2={
          "No desaproveches tiempo, atrévete a emprender desde casa y seguir cuidando de tus hijos."
        }
      />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
