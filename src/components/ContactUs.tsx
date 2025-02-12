import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#0067B1] p-6 md:p-12  max-w-full mx-auto mt-10 mb-12">
      {/* Left Side - Contact Info */}
      <div className="md:w-1/2 bg-[#0067B1] p-6 rounded-lg ">
        <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
        <p className="mt-2 text-white">For general enquiries</p>
        <div className="mt-4 text-white">
          <p className="font-semibold"> Address:</p>
          <p>110, 16th Road, Chembur, Mumbai - 400071</p>
        </div>
        <div className="mt-3 text-white">
          <p className="font-semibold"> Phone:</p>
          <p>+91 22 25208822</p>
        </div>
        <div className="mt-3 text-white">
          <p className="font-semibold"> Email:</p>
          <p>info@supremegroup.co.in</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2 bg-[#0067B1] p-6 rounded-lg  mt-6 md:mt-0 md:ml-6">
        {["fullName", "email", "company"].map((field) => (
          <div key={field} className="mb-4">
            <label htmlFor={field} className="block text-white font-semibold mb-2 capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              id={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field as keyof FormData]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 "
              placeholder={`Enter your ${field}`}
              required
            />
          </div>
        ))}
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            placeholder="Enter your message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-1/4 bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
