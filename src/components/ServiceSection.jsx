  import React, { useState } from "react";
  import Accordion from "@/components/ui/Accordion";
  import { FaBriefcase, FaHandHoldingUsd, FaUserCog } from "react-icons/fa";

  const ServiceSection = () => {
    const [accordionOpen, setAccordionOpen] = useState(0);

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
      <div className="py-12 md:py-24 md:px-36">
        <div className="container">
          <div className="w-full px-2 mb-10">
            <h1 className="font-medium text-4xl mb-4">Heading</h1>
            <p className="text-xs md:text-sm max-w-md text-slate-500">Description</p>
          </div>
          <div className="w-full flex flex-wrap items-center ">
            <div className="w-full md:w-1/2 flex flex-wrap mb-10 md:mb-0">
              <div className="w-1/2 p-1">
                <div className="bg-[#FFF5D1] h-full p-4">
                  <h3 className="font-semibold text-sm md:text-lg mb-2 text-slate-500">Trusted By</h3>
                  <h1 className="font-bold text-4xl xl:text-6xl">1000+</h1>
                </div>
              </div>
              <div className="w-1/2 p-1">
                {services.map((service, index) => (
                  <div key={index} className="w-full bg-[#E6F3FF] flex items-center gap-4 px-4 py-5 rounded-md mb-2">
                    <div className="me-2">{service.icon}</div>
                    <h1 className="font-semibold text-sm md:text-base">{service.title}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ServiceSection;
