"use client";
import { getPosts } from "@/sanity/lib/api";
import Image from "next/image";
import dholera1 from "@/assests/renew.webp";
import dholera2 from "@/assests/solar.webp";
import dholera3 from "@/assests/expressway.webp";
import logoF from "@/assests/logo5.webp";
import ServiceSection from "./components/servicesection";
import BrowseBlogsSection from "./components/BrowseBlogs";
import BrowsePropertiesSection from "./components/BrowseProperties";
import Footer from "./components/Footer";
import FloatingButtons from "./components/whatsapp";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Grid from "./components/Grid";
import InvestmentForm from "./components/Form";
import DholeraWebsite from "./components/HomeContent";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = [dholera1, dholera2, dholera3];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  const openFormPopup = () => {
    setShowFormPopup(true);
  };

  const closeFormPopup = () => {
    setShowFormPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form data
    if (!formData.fullName || !formData.phone) {
      alert("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      // API Request
      const response = await fetch(
        "https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`, // Use environment variable
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,
              phone: formData.phone,
            },
            source: "Dholera Times Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        }
      );

      // Store response text before parsing
      const responseText = await response.text();

      // Check response status and handle accordingly
      if (response.ok) {
        if (
          responseText === "OK" ||
          responseText.toLowerCase().includes("success")
        ) {
          setFormData({ fullName: "", phone: "" }); // Reset form
          setShowFormPopup(false); // Close form popup
          setIsSubmitted(true); // Show success popup
        } else {
          // Handle unexpected response
          console.log("Response Text:", responseText);
        }
      } else {
        console.error("Server Error:", responseText);
        throw new Error(responseText || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="relative w-full h-screen  overflow-hidden">
        {/* Image Carousel */}
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[index]}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full sm:object-cover md:object-contain pt-16 md:pt-20"
              alt="Dholera"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay for Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 md:from-black/60 md:to-transparent"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-36 py-8 md:py-12 h-full">
          {/* Centered Text */}
          <div className="w-full text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              DHOLERA <br />
              <span className="text-[#ffb400]">A NEW ERA</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-300">
              GREENFIELD INDUSTRIAL SMART CITY
            </p>
          </div>

          {/* Book Plot Today Button - In the green area */}
          <div className="absolute bottom-12 md:bottom-24 w-full flex justify-center">
            <button
              onClick={openFormPopup}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              BOOK PLOT TODAY
            </button>
          </div>
        </div>
      </section>

      {/* Form Popup */}
      {showFormPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4"
          onClick={closeFormPopup}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={logoF}
                    alt="logo"
                    width={40}
                    height={40}
                    className="mr-3 bg-white rounded-full p-1"
                  />
                  <h3 className="text-xl font-bold text-white">
                    Let's Connect
                  </h3>
                </div>
                <button
                  onClick={closeFormPopup}
                  className="text-white hover:text-gray-200 bg-white/20 rounded-full p-2 flex items-center justify-center transition-all hover:bg-white/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Form body with offset design */}
            <div className="p-6 pt-8 relative">
              {/* Decorative elements */}
              <div className="absolute -top-3 left-0 right-0 h-6 bg-white rounded-t-3xl shadow-inner"></div>
              <div className="absolute top-0 left-12 w-20 h-1 bg-gray-300 rounded-full"></div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10 transition-all bg-gray-50 hover:bg-white"
                  />
                  <svg
                    className="absolute left-3 top-3.5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                <div className="relative">
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10 transition-all bg-gray-50 hover:bg-white"
                  />
                  <svg
                    className="absolute left-3 top-3.5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg flex justify-center items-center font-semibold text-white shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(to right, #000000, #434343)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "Get a call back"
                  )}
                </motion.button>

                <div className="text-center text-xs text-gray-500 mt-4">
                  By submitting, you agree to our{" "}
                  <span className="text-blue-600">Terms</span> and{" "}
                  <span className="text-blue-600">Privacy Policy</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✅ Submitted Successfully!
            </h2>
            <p className="text-gray-600">We'll get back to you soon.</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-[#ffb400] text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section>
      <motion.div
      className="min-h-screen bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={scrollY > 100 ? "show" : "hidden"} // Jab scroll hoga tabhi chalega
    >
      {[DholeraWebsite , ServiceSection, BrowsePropertiesSection, Grid, BrowseBlogsSection, InvestmentForm].map(
        (Component, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Component />
          </motion.div>
        )
      )}
      
    </motion.div>
        <FloatingButtons />
        <Footer />
      </section>
      
    </>
  );
}
