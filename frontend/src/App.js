import React from "react";
import "./App.css";
import SpaceBackground from "./components/SpaceBackground";
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
