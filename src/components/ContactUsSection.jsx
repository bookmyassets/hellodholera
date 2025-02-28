import React from "react";

const ContactUsSection = () => {

  return (
    <section className="py-32 bg-amber-100 text-black">
      <div className="container">
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-1/2 px-2">
            <h1
              className="text-center font-semibold mb-5 text-4xl md:text-5xl lg:text-6
            xl capitalize"
            >
              Finding your perfect property is just a click away!
            </h1>
            <p className="text-xs md:text-sm mb-8 text-slate-500 text-center max-w-md mx-auto">
            Start browsing our property listings today and take the first step towards making your homeownership dreams a reality.
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-4 text-sm bg-white font-medium text-black rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
