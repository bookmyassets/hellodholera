import React from 'react';
import img1 from "../assests/img1.svg";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-20 md:pt-28 flex flex-col md:flex-row items-center justify-between px-6 md:px-36 py-12 space-y-10 md:space-y-0">
      
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm font-semibold text-gray-700 tracking-wide">
          Start Your Journey Here!
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-snug md:leading-tight">
          Find your dream property effortlessly <br />
          with <span className="font-serif text-maroon text-[#ffb400]">Hello Dholera</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Hello Dholera simplifies your property search with fast and reliable service.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-maroon text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:bg-opacity-90 hover:scale-105">
            Explore Now
          </button>
          <div className="flex items-center">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <p className="text-gray-600 ml-2 text-base">
              Trusted by <a href="#" className="text-blue-600 underline">1,000+</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center md:w-1/2">
        <Image
          src={img1}
          width={550}
          height={550}
          alt="Modern House"
          className="rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default HeroSection;