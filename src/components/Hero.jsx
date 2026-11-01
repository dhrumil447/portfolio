import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiMail,
  HiClipboardCopy,
  HiCheck,
  HiDownload,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import profileImage from "../img/WhatsApp Image 2026-01-28 at 9.29.22 PM.jpeg";
import resumePDF from "../img/resume.pdf";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");
  const titles = [
    "Software Developer",
    "Web & Mobile Apps",
    "CRM & ERP Systems",
    "React & React Native",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    let currentTitle = titles[titleIndex];
    let charIndex = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          clearInterval(interval);
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              setTypedText(currentTitle.substring(0, charIndex - 1));
              charIndex--;
              if (charIndex === 0) {
                clearInterval(deleteInterval);
                setTitleIndex((prev) => (prev + 1) % titles.length);
              }
            }, 50);
          }, 1800);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [titleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText("dhrumil.447@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
      aria-label="Hero section - Software Developer Portfolio"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Profile Image with Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                type: "spring",
                bounce: 0.4,
              }}
              className="flex justify-center mb-6"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gray-200 dark:border-neutral-800 shadow-2xl bg-neutral-900">
                  <img
                    src={profileImage}
                    alt="Dhrumil Patel - Software Developer at Lemon Software Solution"
                    className="w-full h-full object-cover scale-[1.9] translate-y-1"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Employment Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-2"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Software Developer @ Lemon Software Solution
                </span>
              </div>
            </motion.div>

            {/* Location & Tenure */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 text-center"
            >
              July 2026 – Present • India
            </motion.p>

            {/* Name & Title */}
            <div className="text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="gradient-text">Dhrumil Patel</span>
              </motion.h1>

              {/* Typing Animation Subheading */}
              <div className="h-10 sm:h-12 flex items-center justify-center">
                <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                  <span>{typedText}</span>
                  <span className="text-red-500 animate-pulse font-normal">|</span>
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Crafting modern web applications, published Android applications,
                and enterprise CRM & ERP business solutions. Specializing in
                React.js, React Native, Node.js, and database engineering.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-4"
            >
              <motion.a
                href="#apps"
                className="w-full sm:w-auto px-7 py-3.5 bg-black hover:bg-neutral-900 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg border border-white/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGooglePlay className="w-4 h-4 text-emerald-400" />
                <span>Play Store App</span>
              </motion.a>

              <motion.a
                href="#live-projects"
                className="w-full sm:w-auto px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Live Projects</span>
                <HiArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={resumePDF}
                download="Dhrumil_Patel_Resume.pdf"
                className="w-full sm:w-auto px-7 py-3.5 bg-white dark:bg-white/[0.04] border border-gray-300 dark:border-white/10 hover:border-red-500 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiDownload className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 justify-center pt-6 flex-wrap"
            >
              <a
                href="https://github.com/dhrumil447"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dhrumilp7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dhrumil.447@gmail.com"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="Email Dhrumil"
              >
                <HiMail className="w-5 h-5" />
              </a>
              <button
                onClick={copyEmail}
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 relative group"
                aria-label="Copy Email Address"
              >
                {copied ? (
                  <HiCheck className="w-5 h-5 text-emerald-500" />
                ) : (
                  <HiClipboardCopy className="w-5 h-5" />
                )}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
