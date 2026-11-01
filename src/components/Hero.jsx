import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  HiArrowRight,
  HiMail,
  HiClipboardCopy,
  HiCheck,
  HiDownload,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGooglePlay } from "react-icons/fa";
import profileImage from "../img/WhatsApp Image 2026-01-28 at 9.29.22 PM.jpeg";
import resumePDF from "../img/resume.pdf";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  // Subtle Mouse Parallax using spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Very gentle parallax shifts for elements
  const photoParallaxX = useTransform(smoothMouseX, [-300, 300], [-8, 8]);
  const photoParallaxY = useTransform(smoothMouseY, [-300, 300], [-8, 8]);
  const textParallaxX = useTransform(smoothMouseX, [-300, 300], [-4, 4]);
  const textParallaxY = useTransform(smoothMouseY, [-300, 300], [-4, 4]);
  const ambientLightX = useTransform(smoothMouseX, [-400, 400], ["40%", "60%"]);
  const ambientLightY = useTransform(smoothMouseY, [-400, 400], ["20%", "40%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dhrumil.447@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20 bg-white dark:bg-[#07080c] transition-colors duration-300"
      aria-label="Hero section - Software Developer Portfolio"
    >
      {/* Subtle Ambient Moving Light (SaaS Spotlight Effect) */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-red-600/10 via-pink-500/5 to-cyan-500/5 dark:from-red-600/15 dark:via-pink-500/8 dark:to-transparent"
        style={{
          left: ambientLightX,
          top: ambientLightY,
        }}
      />

      {/* Gentle Radial Gradient Falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.12),rgba(0,0,0,0))] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* 1. Profile Photo with Subtle 3D Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: photoParallaxX, y: photoParallaxY }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative group p-1.5 rounded-full bg-gradient-to-b from-gray-200 via-gray-100 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent shadow-xl"
            >
              {/* Soft Border Ring */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border border-gray-300 dark:border-white/10 bg-neutral-900 shadow-inner">
                <img
                  src={profileImage}
                  alt="Dhrumil Patel - Software Developer"
                  className="w-full h-full object-cover scale-[1.9] translate-y-1 group-hover:scale-[2] transition-transform duration-500 ease-out"
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* 2. Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center mb-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-md hover:border-gray-300 dark:hover:border-white/20 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                Software Developer @ Lemon Software Solution
              </span>
            </div>
          </motion.div>

          {/* 3. Introduction & Titles with Elegant Reveal */}
          <motion.div
            style={{ x: textParallaxX, y: textParallaxY }}
            className="space-y-3.5 mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Hi, I'm <span className="gradient-text">Dhrumil Patel</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 tracking-tight"
            >
              Enterprise CRM & ERP Systems
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed pt-1"
            >
              Software Developer with hands-on expertise building enterprise CRM and ERP
              systems, responsive web applications, and published mobile solutions. Focused
              on clean architecture, scalable REST APIs, and intuitive business software.
            </motion.p>
          </motion.div>

          {/* 4. Three Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-2 mb-8"
          >
            {/* Button 1: Google Play App */}
            <motion.a
              href="#apps"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-900 hover:bg-black dark:bg-white/10 dark:hover:bg-white/15 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-gray-800 dark:border-white/10 shadow-sm"
            >
              <FaGooglePlay className="w-4 h-4 text-emerald-400" />
              <span>Google Play App</span>
            </motion.a>

            {/* Button 2: Live Projects */}
            <motion.a
              href="#live-projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-red-500/20"
            >
              <span>Live Projects</span>
              <HiArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Button 3: Resume */}
            <motion.a
              href={resumePDF}
              download="Dhrumil_Patel_Resume.pdf"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 text-gray-800 dark:text-gray-200 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <HiDownload className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          {/* 5. Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center justify-center gap-2 pt-2"
          >
            <a
              href="https://github.com/dhrumil447"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/dhrumilp7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:dhrumil.447@gmail.com"
              className="p-2.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
              aria-label="Email Dhrumil"
              title="Email Dhrumil"
            >
              <HiMail className="w-5 h-5" />
            </a>

            <button
              onClick={copyEmail}
              className="p-2.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all relative group"
              aria-label="Copy Email Address"
              title="Copy Email Address"
            >
              {copied ? (
                <HiCheck className="w-5 h-5 text-emerald-500" />
              ) : (
                <HiClipboardCopy className="w-5 h-5" />
              )}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                {copied ? "Copied!" : "Copy Email"}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
