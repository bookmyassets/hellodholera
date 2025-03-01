"use client";
import { useState } from "react";
import logo from "../assests/logo5.webp";
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Monitor,
  ShoppingBag,
  BarChart3,
  Paintbrush,
  Instagram,
  Video,
  Search,
} from "lucide-react";
import Link from "next/link"; // Added missing icons import
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handleClose = () => {
  setIsMenuOpen(false);
};

// Remove metadata from client component
// Create a separate metadata.js file or move it to a server component

export default function RootLayout({ children }) {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      link: "/pages/webdevelopment",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Shopify Development",
      description: "E-commerce solutions for your business",
      link: "/pages/shopify",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Meta Ads Management",
      description: "Optimize your social media advertising",
      link: "/pages/metaads",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Creative visual solutions for your brand",
      link: "/pages/graphic",
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: "Instagram Management",
      description: "Grow your social media presence",
      link: "/pages/instagram",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editing",
      description: "Professional video content creation",
      link: "/pages/videoedit",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Services",
      description: "Improve your search engine rankings",
      link: "/pages/seo",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Moved inside component

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <nav className="fixed w-full bg-[#530904] text-[#FDB913] backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src={logo} height={50} width={50} alt="logo" />
                </Link>
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/pages/Blogs"
                    className="text-[#FDB913] hover:text-orange-200 px-3 py-2"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/pages/properties"
                    className="text-[#FDB913] hover:text-orange-200 px-3 py-2"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/pages/contact"
                    className="text-[#FDB913] hover:text-orange-200 px-3 py-2"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/pages/about"
                    className="text-[#FDB913] hover:text-orange-200 px-3 py-2"
                  >
                    About
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-[#FDB913] hover:text-orange-200 px-3 py-2"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-[#FDB913]" />
                  ) : (
                    <Menu className="h-6 w-6 text-[#FDB913]" />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/10 transition-all delay-75 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/pages/Blogs"
                  className="text-[#FDB913] block px-3 py-2"
                  onClick={handleClose}
                >
                  Blogs
                </Link>
                <Link
                  href="/pages/properties"
                  className="text-[#FDB913] block px-3 py-2"
                  onClick={handleClose}
                >
                  Projects
                </Link>
                <Link
                  href="/pages/about"
                  className="text-[#FDB913] block px-3 py-2"
                  onClick={handleClose}
                >
                  About
                </Link>
                <Link
                  href="#testimonials"
                  className="text-[#FDB913] block px-3 py-2"
                  onClick={handleClose}
                >
                  Gallery
                </Link>
                <Link
                  href="/pages/contact"
                  className="text-[#FDB913] block px-3 py-2"
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </nav>
        {children}
      </body>
    </html>
  );
}