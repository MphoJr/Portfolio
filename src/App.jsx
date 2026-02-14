import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="snap-y vertical-scrollbar-thin" style={{ height: "100vh" }}>
      <Header />
      <Hero id="hero" />
      <About id="about" />
      <Education id="education" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </div>
  );
}
