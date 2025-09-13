import Image from "next/image";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Header name="Anuoluwapo  Oyedele" />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
