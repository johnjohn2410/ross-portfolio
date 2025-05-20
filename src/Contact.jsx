import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'react-hot-toast';
import Confetti from 'react-confetti';
import ReCAPTCHA from "react-google-recaptcha";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const captchaRef = useRef();
  const [captchaToken, setCaptchaToken] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
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
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️", {
        duration: 3000,
        position: 'bottom-right',
      });
      return;
    }
    if (!captchaToken) {
      toast("Hold up! Gotta make sure you're not a spam bot, checkmark the CAPTCHA! 🧠🤖", {
        icon: '🛡️',
        duration: 3500,
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
          to_name: "John Ross",
          from_email: form.email,
          to_email: "jross3511@yahoo.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: 'bottom-right',
          });
          setShowConfetti(true);
          setCaptchaToken(null);
          captchaRef.current.reset();
          setTimeout(() => {
            setSuccess(false);
            setShowConfetti(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong. Please try again.", {
            duration: 3000,
            position: 'bottom-right',
          });
        }
      );
  };

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 overflow-hidden no-select w-full max-w-2xl mx-auto xl:mt-12">
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full bg-black-100 p-8 rounded-2xl shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-purple-400 text-lg font-semibold uppercase tracking-wider">Get in touch</p>
          <a
            href="tel:+12105891297"
            className="text-purple-500 hover:text-purple-400 transition-colors duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (210) 589-1297
          </a>
        </div>
        <h3 className="text-3xl font-bold text-white mb-8">Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-purple-500 mr-2"
                  />
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-purple-500 mr-2"
                  />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                />
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <FontAwesomeIcon
                icon={faComment}
                className="text-purple-500 mr-2"
              />
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey John, love the website! I'd like to chat about some opportunities you might like! 🎉"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500"
            />
          </label>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              theme="dark"
              ref={captchaRef}
            />
          </div>
          <span className="text-xs text-gray-400 text-center -mt-2">
            Protected by reCAPTCHA Enterprise. ⚔️
          </span>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
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
        </form>
      </motion.div>
    </div>
  );
};

export default Contact; 