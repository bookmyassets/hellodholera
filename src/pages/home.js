import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/ServiceSection";
import ContactUsSection from "@/components/ContactUsSection";
import Projects from "./post/Project";
import BrowsePropertiesSection from "@/components/BrowsePropertiesSection";
import BrowseBlogsSection from "@/components/BrowseBlogsSection";
import ContactButtons from "@/components/Buttons";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {/* Hero Section with Scroll-triggered Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // This ensures the animation happens only once when the element comes into view
      >
        <HeroSection />
      </motion.div>

      {/* Service Section with Scroll-triggered Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ServiceSection />
      </motion.div>

      {/* Browse Properties Section with Scroll-triggered Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <BrowsePropertiesSection />
      </motion.div>

      {/* Browse Blogs Section with Scroll-triggered Animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <BrowseBlogsSection />
      </motion.div>

      {/* Contact Us Section with Scroll-triggered Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ContactUsSection />
      </motion.div>

      {/* Scroll to Top Button */}
      {showButton && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 bg-[#F4A900] text-white p-3 rounded-full shadow-lg hover:bg-[#b97700] transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ↑
        </motion.button>
      )}
      <ContactButtons/>
    </div>

  );
};

export default HomePage;
