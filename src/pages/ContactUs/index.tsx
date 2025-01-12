import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../../../public/AppLogo/background_image.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const ContactSection: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleBack = () => {
    router.push("/"); // Navigates to the home page
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Email sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const data = await response.json();
        setStatus({ success: false, message: data.error || "Failed to send email." });
      }
    }  catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        console.error(errorMessage); // Log the error message
        setStatus({ success: false, message: errorMessage });
      }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="max-w-7xl text-white bg-opacity-80 bg-white/20 rounded-lg shadow-lg">
          <div className="py-3 px-3">
            <button
              onClick={handleBack}
              className="flex items-center px-4 py-2 text-white rounded-md transition"
            >
              <FaArrowLeft className="mr-2 text-white" />
              Home
            </button>
          </div>
          <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2 text-white rounded-lg shadow-lg">
            <div className="p-6 md:px-8">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex flex-col justify-start">
                <span className="">Address:</span>
                  <span>2/172,west st, Chithar chathiram, Paruthikulam 
                  Gangaikondan Tirunelveli 627352</span>
                </p>
                <p className="flex justify-start flex-col ">
                    <span>Phone:</span>
                  <span> +91 8925722979</span>
                </p>
                <p className="flex  flex-col justify-start ">
                <span>Email:</span>
                  <span>travelspappu2025@gmail.com</span>
                </p>
              </div>
            </div>
            <form
              noValidate
              className="flex flex-col justify-center p-6 space-y-6 md:px-8"
              onSubmit={handleSubmit}
            >
              <label className="block">
                <span className="mb-1 text-sm font-medium">Full name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Leroy Jenkins"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 px-4 py-2"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 text-sm font-medium">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="leroy@jenkins.com"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 px-4 py-2"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="block w-full rounded-md text-black shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 px-4 py-2 resize-none"
                  required
                ></textarea>
              </label>
              <button
                type="submit"
                className="self-center px-8 py-1 text-lg rounded bg-[#5D8736] text-gray-50 hover:bg-[#809D3C]"
              >
                Submit
              </button>
              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
