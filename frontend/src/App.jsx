import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoreServices  from "./components/CoreServices";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CoreServices/>
      <WhyChoose/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
