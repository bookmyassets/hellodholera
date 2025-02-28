import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Icons for WhatsApp and Call

const ContactButtons = () => {
  return (
    <div>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919958993549" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+91 9958993549" // Replace with your phone number
        className="fixed bottom-16 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaPhoneAlt size={30} />
      </a>
    </div>
  );
};

export default ContactButtons;
