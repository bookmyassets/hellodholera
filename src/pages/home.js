
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/ServiceSection";
import ContactUsSection from "@/components/ContactUsSection";
import Projects from "./post/Project";
import BrowsePropertiesSection from "@/components/BrowsePropertiesSection";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div>
        <HeroSection/>
        <ServiceSection/>
        <BrowsePropertiesSection/>
        <ContactUsSection/>
      </div>
  );
};

export default HomePage;
