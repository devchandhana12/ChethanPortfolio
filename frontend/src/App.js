import React from "react";
import "./App.css";
import SpaceBackground from "./components/SpaceBackground";
import ShootingStar from "./components/ShootingStar";
import AstronautRocket from "./components/AstronautRocket";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated space background */}
      <SpaceBackground />
      
      {/* Shooting stars */}
      <ShootingStar />
      
      {/* Flying astronaut rockets - 5 rockets crossing the screen */}
      <AstronautRocket startPosition="left-top" delay={0} duration={25} />
      <AstronautRocket startPosition="left-middle" delay={5} duration={30} />
      <AstronautRocket startPosition="left-bottom" delay={10} duration={28} />
      <AstronautRocket startPosition="right-top" delay={15} duration={26} />
      <AstronautRocket startPosition="right-bottom" delay={20} duration={32} />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

export default App;
