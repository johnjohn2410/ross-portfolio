import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'react-hot-toast';
import Confetti from 'react-confetti';
import resume from './assets/John Ross-SWE Resume_2024.1.pdf';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    detectSize(); // Initial detection
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "";
    }
    return () => {
      document.body.style.overflowX = "";
    };
  }, [showConfetti]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️", {
        duration: 3000,
        position: 'bottom-right',
      });
      return;
    }
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "John Ross", // Replace with your name if dynamic
          from_email: form.email,
          to_email: "jross3511@yahoo.com", // Your receiving email
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", subject: "", message: "" });
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: 'bottom-right',
          });
          setShowConfetti(true);
          setTimeout(() => {
            setSuccess(false);
            setShowConfetti(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          toast.error("Something went wrong. Please try again.", {
            duration: 3000,
            position: 'bottom-right',
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 overflow-hidden no-select w-full max-w-5xl mx-auto">
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
        />
      )}
      
      <div className="w-full text-center">
        <p className="text-[#f8fafc] text-lg mb-8">Let's connect! Feel free to reach out through any of the channels below or drop me a message.</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-12 w-full">
        {/* Left Column - Contact Info and Location */}
        <div className="md:w-1/3 w-full flex flex-col gap-8">
          <div>
            <h4 className="text-2xl font-bold text-[#56ccf2] mb-4">Contact Information</h4>
            <div className="flex items-center text-[#f8fafc] mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-[#915eff]" />
              <span>jross3511@yahoo.com</span>
            </div>
            <div className="flex items-center text-[#f8fafc] mb-3">
              <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-[#915eff]" />
              <a href="https://www.linkedin.com/in/johnross125307237/" target="_blank" rel="noopener noreferrer" className="text-[#56ccf2] hover:text-[#915eff] transition-colors duration-300 break-all">
                linkedin.com/in/johnross125307237/
              </a>
            </div>
            <div className="flex items-center text-[#f8fafc] mb-3">
              <FontAwesomeIcon icon={faGithub} className="mr-3 text-[#915eff]" />
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-[#56ccf2] hover:text-[#915eff] transition-colors duration-300 break-all">
                github.com/your-profile
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#56ccf2] mb-4">Location</h4>
            <div className="flex items-center text-[#f8fafc] mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-[#915eff]" />
              <span>Harlingen, Texas</span>
            </div>
            <div className="flex items-center text-[#f8fafc]">
              <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[#915eff]" />
              <span>Available for remote work worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:w-2/3 w-full"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[#f8fafc] font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-gray-400 text-[#f8fafc] rounded-lg outline-none border border-[#4a5568] focus:border-[#915eff] focus:ring focus:ring-[#915eff] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#f8fafc] font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-gray-400 text-[#f8fafc] rounded-lg outline-none border border-[#4a5568] focus:border-[#915eff] focus:ring focus:ring-[#915eff] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>

            {/* Subject - full width on medium screens due to md:col-span-2 */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#f8fafc] font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-gray-400 text-[#f8fafc] rounded-lg outline-none border border-[#4a5568] focus:border-[#915eff] focus:ring focus:ring-[#915eff] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>

            {/* Message - full width on medium screens due to md:col-span-2 */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#f8fafc] font-medium mb-2">Message</label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-gray-400 text-[#f8fafc] rounded-lg outline-none border border-[#4a5568] focus:border-[#915eff] focus:ring focus:ring-[#915eff] focus:ring-opacity-50 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Button - full width on medium screens due to md:col-span-2 */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#915eff] to-[#56ccf2] hover:from-[#56ccf2] hover:to-[#915eff] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center md:justify-start w-full md:w-fit"
                disabled={loading}
              >
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                ) : success ? (
                  <span className="flex items-center">
                    Sent Successfully
                    <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      {/* Resume Link at the bottom */}
      <div className="mt-12 flex justify-center">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 transition text-xl flex items-center"
        >
          <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> Resume
        </a>
      </div>
    </div>
  );
};

export default Contact; 