
import React from "react";
import Navbar from "./components/components/Navbar";
import Hero from "./components/components/Hero";
import Menu from "./components/components/Menu";
import About from "./components/components/About";
import Contact from "./components/components/Contact";
import Footer from "./components/components/Footer";
import FloatingWhatsAppButton from "./components/components/FloatingWhatsAppButton";

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-dark font-sans">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
