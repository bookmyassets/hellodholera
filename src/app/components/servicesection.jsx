"use client";

import React, { useState } from "react";
import Accordion from "./ui/Accordion";
import { FaBriefcase, FaHandHoldingUsd, FaUserCog } from "react-icons/fa";

const ServiceSection = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const accordionItems = [
    { title: "Best Price", content: "We offer the most competitive prices in the market." },
    { title: "Expert Advice", content: "Our experts provide tailored solutions for your needs." },
    { title: "Personalized Service", content: "We ensure a customized experience for every client." },
    { title: "24/7 Support", content: "Our support team is available around the clock." },
  ];

  const services = [
    { title: "Best Price", icon: <FaHandHoldingUsd className="w-7 h-7" /> },
    { title: "Expert Advice", icon: <FaUserCog className="w-7 h-7" /> },
    { title: "Personalized Service", icon: <FaBriefcase className="w-7 h-7" /> },
  ];

  const handleButton = (i) => {
    if (accordionOpen === i) return;
    setAccordionOpen(i);
  };

  return (
    <div className="bg-amber-200  py-12 md:py-24 px-6 md:px-36">
      <div className="container">
        <div className="w-full px-2 mb-10">
          <h1 className="font-medium  text-4xl mb-4">Our Services</h1>
          <p className="text-xs md:text-sm max-w-md text-slate-500">
            We provide top-notch services tailored to meet your needs.
          </p>
        </div>
        <div className="w-full  flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 flex flex-wrap mb-10 md:mb-0">
            <div className="w-1/2 p-1">
              <div className="bg-[#FFF5D1] border-black border-2 rounded-sm h-full p-4">
                <h3 className="font-semibold text-sm md:text-lg mb-2 text-slate-500 ">
                  Trusted By
                </h3>
                <h1 className="font-bold text-4xl xl:text-6xl">300+ Buyers</h1>
              </div>
            </div>
            <div className="w-1/2 p-1">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="w-full bg-[#E6F3FF] border-black border-2  flex items-center gap-4 px-4 py-5 rounded-md mb-2"
                >
                  <div className="me-2 ">{service.icon}</div>
                  <h1 className="font-semibold text-sm  md:text-base">
                    {service.title}
                  </h1>
                </div>
              ))}
            </div>
            <div className="w-full  border-black border-2 rounded-md ">
              <div className="bg-[#FFE6E6] h-64 w-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl md:text-6xl lg:text-8xl mb-3">500+</h1>
                <h3>Properties Sold</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 flex flex-col gap-4">
            {accordionItems.map((data, index) => (
              <Accordion
                data={{ title: data.title, value: data.content }}
                isOpen={accordionOpen === index}
                setIsOpen={handleButton}
                index={index}
                key={data.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;