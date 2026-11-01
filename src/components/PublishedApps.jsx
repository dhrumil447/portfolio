import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaGooglePlay,
  FaAndroid,
  FaShieldAlt,
  FaChartPie,
  FaWallet,
  FaBell,
  FaLock,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiX, HiChevronLeft, HiChevronRight, HiSparkles } from "react-icons/hi";

import appIcon from "../img/moneyflow/icon.png";
import shot1 from "../img/moneyflow/screenshot-1.png";
import shot2 from "../img/moneyflow/screenshot-2.png";
import shot3 from "../img/moneyflow/screenshot-3.png";
import shot4 from "../img/moneyflow/screenshot-4.png";
import TiltCard from "./TiltCard";

const PublishedApps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.moneyflow.managerapp";

  const screenshots = [
    { src: shot1, label: "Daily Transactions & Balance" },
    { src: shot2, label: "Monthly Budget & Categories" },
    { src: shot3, label: "Financial Reports & Analytics" },
    { src: shot4, label: "Quick Expense & Income Entry" },
  ];

  const features = [
    {
      icon: <FaWallet className="w-5 h-5 text-emerald-500" />,
      title: "Daily Expense & Income Logging",
      desc: "Manage cash, cards, UPI, and bank transfers with instant categorized tracking.",
    },
    {
      icon: <FaBell className="w-5 h-5 text-amber-500" />,
      title: "Monthly Budget & Alerts",
      desc: "Set category spending limits, track EMIs and recurring bills to prevent overspending.",
    },
    {
      icon: <FaChartPie className="w-5 h-5 text-cyan-500" />,
      title: "Visual Financial Analytics",
      desc: "Understand spending habits through interactive category breakdowns and cash flow charts.",
    },
    {
      icon: <FaLock className="w-5 h-5 text-red-500" />,
      title: "Local-First Privacy & Security",
      desc: "Zero mandatory account creation. Financial data remains securely stored on-device with passcode protection.",
    },
  ];

  const nextScreenshot = () => {
    setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setActiveScreenshot((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="apps"
      className="section-container relative"
      ref={ref}
      aria-label="Published Applications on Google Play Store"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <FaAndroid className="w-4 h-4" />
            <span>Google Play Store Release</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Published <span className="gradient-text">Applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Production mobile applications designed, developed, and published
            live on Google Play Store.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mt-4"
          />
        </div>

        {/* Main 3D App Showcase Card */}
        <TiltCard
          maxTilt={5}
          scale={1.01}
          className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: App Info & Features (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* App Header: Icon + Title + Meta */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group shrink-0"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition duration-300" />
                  <img
                    src={appIcon}
                    alt="MoneyFlow – Expense Tracker App Icon"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-2xl border border-white/20 bg-black"
                  />
                  <span className="absolute -bottom-2 -right-2 p-1.5 bg-emerald-600 text-white rounded-full text-xs shadow-md">
                    <FaCheckCircle className="w-3.5 h-3.5" />
                  </span>
                </motion.div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live on Play Store
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                      Personal Finance
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 flex items-center gap-1">
                      <FaAndroid className="text-green-500" /> Android
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    MoneyFlow – Expense Tracker
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    Daily Expense Tracker, Budget Planner & Personal Money Manager
                  </p>
                </div>
              </div>

              {/* Description with Smooth Reveal */}
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Take full control of your finances with a sleek, privacy-first
                expense tracker and budget planner. Designed to track income and
                daily spending (cash, card, UPI, and bank transfers), organize
                budgets with category alerts, and generate clear visual reports—all
                with 100% on-device data privacy and zero cloud tracking.
              </p>

              {/* Key Features Grid */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {features.map((feat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 hover:border-emerald-500/30 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-gray-200/50 dark:bg-white/10 shadow-sm">
                        {feat.icon}
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-normal pl-8">
                      {feat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mr-1">
                  Stack:
                </span>
                {[
                  "React Native",
                  "Android",
                  "JavaScript",
                  "Local Storage / SQLite",
                  "State Management",
                  "Google Play Console",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Prominent Google Play Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-black hover:bg-neutral-900 text-white rounded-xl border border-white/20 shadow-2xl shadow-emerald-500/20 transition-all duration-300"
                  aria-label="Download MoneyFlow on Google Play"
                >
                  <FaGooglePlay className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] tracking-wider uppercase font-semibold text-gray-300">
                      GET IT ON
                    </div>
                    <div className="text-base sm:text-lg font-bold tracking-wide">
                      Google Play
                    </div>
                  </div>
                  <FaExternalLinkAlt className="w-3.5 h-3.5 text-gray-400 ml-1 group-hover:text-white transition-colors" />
                </motion.a>

                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 px-2">
                  <FaShieldAlt className="text-emerald-500 w-4 h-4 shrink-0" />
                  <span>Verified Google Play Listing • Open in App on Android</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating 3D Mobile Device Mockup (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <TiltCard
                maxTilt={14}
                scale={1.03}
                perspective={1200}
                className="relative w-full max-w-[280px] sm:max-w-[310px] cursor-pointer"
              >
                {/* 3D Ambient Depth Aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-red-500/25 rounded-[48px] blur-2xl pointer-events-none" />

                {/* Floating 3D Tag (Above Device) */}
                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="absolute -top-4 -right-2 px-3 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-xl flex items-center gap-1.5 z-30"
                >
                  <HiSparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Play Store App</span>
                </div>

                {/* Device Chassis with 3D Depth */}
                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="relative rounded-[40px] border-[6px] border-neutral-800 dark:border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden aspect-[9/18.5]"
                >
                  {/* Phone Notch/Camera */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                  </div>

                  {/* Active Screenshot Display with 3D Perspective */}
                  <div
                    className="relative w-full h-full overflow-hidden bg-black"
                    onClick={() => setModalImage(screenshots[activeScreenshot].src)}
                    title="Click to view full screenshot in lightbox"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeScreenshot}
                        src={screenshots[activeScreenshot].src}
                        alt={`MoneyFlow screenshot - ${screenshots[activeScreenshot].label}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Screenshot Label Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                      <p className="text-xs font-semibold text-white tracking-wide">
                        {screenshots[activeScreenshot].label}
                      </p>
                      <p className="text-[10px] text-gray-300 mt-0.5">
                        Click to enlarge • {activeScreenshot + 1} of{" "}
                        {screenshots.length}
                      </p>
                    </div>
                  </div>

                  {/* Nav Chevrons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevScreenshot();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white z-20 transition-colors backdrop-blur-sm"
                    aria-label="Previous screenshot"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextScreenshot();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white z-20 transition-colors backdrop-blur-sm"
                    aria-label="Next screenshot"
                  >
                    <HiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </TiltCard>

              {/* Thumbnail Selector Dots / Previews */}
              <div className="flex gap-2.5 mt-5 justify-center">
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshot(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeScreenshot === idx
                        ? "border-emerald-500 scale-105 shadow-lg shadow-emerald-500/25"
                        : "border-gray-300 dark:border-white/10 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View screenshot ${idx + 1}`}
                  >
                    <img
                      src={s.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-12 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      {/* Lightbox Modal for Full Screenshot */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
                aria-label="Close modal"
              >
                <HiX className="w-6 h-6" />
              </button>
              <img
                src={modalImage}
                alt="Enlarged MoneyFlow Screenshot"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PublishedApps;
