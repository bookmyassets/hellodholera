import Image from "next/image";
import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "your-recaptcha-site-key";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]*$/, "Invalid phone number")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
  recaptcha: yup.string().required("reCAPTCHA is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const [submitting, setSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setValue("recaptcha", value);
  };

  return (
    <div className="pt-28">

    <div id="contact" className="max-w-2xl mx-auto p-8 bg-white text-[#4C0B0B] rounded-lg shadow-lg">
      <h2 className="text-center text-4xl font-bold text-[#F4A900] mb-6 uppercase tracking-wide">Get in Touch</h2>
      <p className="text-center text-lg mb-6 opacity-80">We'd love to hear from you! Feel free to reach out with any inquiries.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* First & Last Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-[#F4A900]" />
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full pl-12 p-4 rounded-lg border border-[#F4A900] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#F4A900] transition duration-300 shadow-md"
              />
          </div>
          {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}

          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-[#F4A900]" />
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full pl-12 p-4 rounded-lg border border-[#F4A900] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#F4A900] transition duration-300 shadow-md"
              />
          </div>
          {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
        </div>

        {/* Email & Phone Number Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-[#F4A900]" />
            <input
              {...register("email")}
              placeholder="Email Address"
              className="w-full pl-12 p-4 rounded-lg border border-[#F4A900] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#F4A900] transition duration-300 shadow-md"
              />
          </div>
          {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}

          <div className="relative">
            <FaPhone className="absolute left-4 top-3 text-[#F4A900]" />
            <input
              {...register("phoneNumber")}
              placeholder="Phone Number"
              className="w-full pl-12 p-4 rounded-lg border border-[#F4A900] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#F4A900] transition duration-300 shadow-md"
              />
          </div>
          {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
        </div>

        {/* Message Field */}
        <div className="relative">
          <FaCommentDots className="absolute left-4 top-3 text-[#F4A900]" />
          <textarea
            {...register("message")}
            placeholder="Your Message"
            className="w-full pl-12 p-4 rounded-lg border border-[#F4A900] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#F4A900] transition duration-300 h-40 shadow-md"
            ></textarea>
        </div>
        {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}

        {/* reCAPTCHA */}
        {showRecaptcha && (
            <div className="mt-4">
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
          </div>
        )}
        {errors.recaptcha && <span className="text-red-500 text-xs mt-1">{errors.recaptcha.message}</span>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F4A900] text-[#4C0B0B] font-bold py-3 rounded-lg hover:bg-[#b97700] disabled:bg-gray-400 transition duration-300"
          disabled={submitting}
          >
          {submitting ? "Submitting..." : "Send Request"}
        </button>
      </form>

      <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} pauseOnHover theme="dark" />
    </div>
            </div>
  );
};

export default Contact;
