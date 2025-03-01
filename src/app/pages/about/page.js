import Footer from "@/app/components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[50vh] bg-gradient-to-b from-[#650000] to-[#320000] text-white">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl opacity-30 font-black uppercase tracking-wider mb-2 text-[#FDB913]">
            About Us
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold relative -mt-8 md:-mt-16">
            Discover Our Story
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
            Learn more about our company, our values, and why we believe in the future of Dholera.
          </p>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Company</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="text-[#530904] font-semibold">DholeraInsider</span>, we are dedicated to providing insights and opportunities in one of India's most ambitious smart cities—Dholera. 
            Our mission is to connect investors, businesses, and residents with the immense potential of this futuristic urban hub.
          </p>
        </div>
      </section>

      {/* About Dholera */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Dholera</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="text-[#FDB913] font-semibold">Dholera Smart City</span> is India's first and largest planned smart city, a part of the Delhi-Mumbai Industrial Corridor (DMIC). 
            Designed to be a hub for business, innovation, and sustainable living, Dholera promises world-class infrastructure, smart governance, and limitless growth potential.
          </p>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision & Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We envision Dholera as a global model for smart city development, attracting industries, residents, and investors who are eager to be part of India’s next growth story.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to empower stakeholders with the right information, resources, and investment opportunities to make the most of this once-in-a-lifetime development.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
