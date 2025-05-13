"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'License type is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    alert("Form submitted!");

    // Reset all fields properly
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  }
};


  return (
<section id="contact" className="bg-muted py-16 px-4">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow overflow-hidden flex flex-col md:flex-row">
    
    {/* Left: Contact Form */}
    <div className="w-full md:w-1/2 p-8 shadow rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Company Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-md"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>

        {/* License Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">License Type</label>
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none shadow-md"
          >
            <option value="">Select License Type</option>
            <option>Microsoft</option>
            <option>Adobe</option>
            <option>Autodesk</option>
            <option>Other</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none shadow-md"
            rows={4}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-shadow shadow-md"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Right: Full Image */}
    <div className="hidden md:block w-full md:w-1/2 h-96 md:h-auto relative">
      <Image
        src="/Getintouch.svg" // Replace with your actual image path in /public
        alt="Contact"
        fill
        className="object-cover"
        priority // Optional: prioritize loading
      />
    </div>
  </div>
</section>


  );
}
