import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroPage/HeroSection";
import ImgSlider from "../components/ImgPage/ImgSlider";
import { SliderData } from "../components/ImgPage/SliderData";
import InfoSection from "../components/InfoPage/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <ImgSlider slides={SliderData} />
      <Contact />
      <Footer />
    </Router>
  );
};

export default Home;
