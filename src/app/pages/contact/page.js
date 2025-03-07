'use client';
import Footer from '@/app/components/Footer';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);  // Added isSubmitting
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    type: ''  // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      setIsSubmitting(false);
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
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.name,
              phone: formData.phone,
              subject: formData.subject,
              message: formData.message,
            },
            source: "Dholera Times Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        if (responseText === "OK" || responseText.toLowerCase().includes("success")) {
          setFormData({ name: "", phone: "", subject: "", message: "" });
          setSubmitStatus({ message: "Thank you! We'll contact you soon.", type: "success" });
        } else {
          setSubmitStatus({ message: "There was an issue, please try again.", type: "error" });
        }
      } else {
        throw new Error(responseText || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ message: `Error: ${error.message}`, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl mt-20 font-bold text-gray-800 mb-6">Contact Us</h2>

        {submitStatus.message && (
          <div 
            className={`p-4 rounded-lg mb-6 ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-700' 
                : 'bg-red-50 text-red-700'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 9876543201"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white font-medium rounded-lg 
              ${isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors duration-200`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
