import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiMail,
  HiClipboardCopy,
  HiCheck,
  HiDownload,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import profileImage from "../img/WhatsApp Image 2026-01-28 at 9.29.22 PM.jpeg";
import resumePDF from "../img/resume.pdf";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("dhrumil@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with different animations */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
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
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Dhrumil Patel"
                    className="w-full h-full object-cover scale-[2]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                  Available for work!
                </span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-600 dark:text-gray-500 mb-8 text-center"
            >
              Currently based in India — open to relocate
            </motion.p>

            {/* Name & Title */}
            <div className="text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <motion.span
                  className="text-gray-900 dark:text-white inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Hi I'm
                </motion.span>
                <motion.span
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  Dhrumil Patel
                </motion.span>
                <motion.span
                  className="text-gray-900 dark:text-white inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  – Frontend Developer with Full-Stack Expertise.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Specializing in React.js & React Native. Building modern,
                performant web experiences with clean code and pixel-perfect
                design.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <motion.a
                href="#projects"
                className="group px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-500/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <HiArrowRight className="transition-all" />
                </motion.div>
              </motion.a>
              <motion.a
                href={resumePDF}
                download="Dhrumil_Patel_Resume.pdf"
                className="group px-8 py-3.5 bg-gray-100 dark:bg-dark-card border border-gray-300 dark:border-dark-border hover:border-red-500 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <HiDownload className="w-5 h-5" />
                </motion.div>
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3.5 border-2 border-gray-300 dark:border-dark-border hover:border-red-500 text-gray-900 dark:text-gray-300 hover:text-red-500 dark:hover:text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="w-5 h-5" />
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 justify-center pt-8 flex-wrap"
            >
              <a
                href="https://github.com/dhrumil447"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dhrumilp7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dhrumil.447@gmail.com"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="Email"
              >
                <HiMail className="w-5 h-5" />
              </a>
              <button
                onClick={copyEmail}
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 relative group"
                aria-label="Copy Email"
              >
                {copied ? (
                  <HiCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <HiClipboardCopy className="w-5 h-5" />
                )}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-100 dark:bg-dark-card border border-gray-300 dark:border-dark-border text-gray-900 dark:text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
