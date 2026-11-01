import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiBadgeCheck, HiSparkles } from "react-icons/hi";
import TiltCard from "./TiltCard";

const LiveProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const crmErpWorkHighlights = [
    "Developing and maintaining enterprise CRM and ERP applications.",
    "Building modules for customer management, inventory, billing, and business operations.",
    "Working on frontend development, API integration, and database-driven functionality.",
    "Contributing to real-world business software used to manage day-to-day operations.",
  ];

  const techStack = [
    "React.js",
    "Material UI",
    "Node.js",
    "Express.js",
    "MySQL",
    "REST APIs",
    "Tailwind CSS",
  ];

  return (
    <section
      id="live-projects"
      className="section-container relative"
      ref={ref}
      aria-label="Enterprise Solutions - Live Projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Enterprise Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Live <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Currently working on real-world enterprise CRM and ERP solutions at{" "}
            <a
              href="https://lemonsoftwaresolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
            >
              Lemon Software Solution
              <HiExternalLink className="w-4 h-4 inline" />
            </a>
            , developing business applications that streamline operations, customer
            management, inventory, billing, and business workflows.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mt-4"
          />
        </div>

        {/* 3D Interactive Enterprise CRM & ERP Development Card */}
        <TiltCard
          maxTilt={7}
          scale={1.015}
          className="max-w-4xl mx-auto bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
        >
          {/* Top Gradient Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500" />

          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header & Meta Badges */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-white/10"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  CRM & ERP Development
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Enterprise Business Software Solutions
              </p>
            </div>

            {/* Employment Details Chips with 3D Depth */}
            <div
              style={{ transform: "translateZ(30px)" }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 text-xs shadow-md">
                <div className="text-gray-500 dark:text-gray-400 font-medium">
                  Company
                </div>
                <a
                  href="https://lemonsoftwaresolution.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gray-900 dark:text-white hover:text-red-500 inline-flex items-center gap-1"
                >
                  Lemon Software Solution
                  <HiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 text-xs shadow-md">
                <div className="text-gray-500 dark:text-gray-400 font-medium">
                  Role
                </div>
                <div className="font-bold text-gray-900 dark:text-white">
                  Software Developer
                </div>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 text-xs shadow-md">
                <div className="text-gray-500 dark:text-gray-400 font-medium">
                  Duration
                </div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400">
                  July 2026 – Present
                </div>
              </div>
            </div>
          </div>

          {/* Bulleted Work List with Subtle Micro-Animations */}
          <div
            style={{ transform: "translateZ(15px)" }}
            className="grid sm:grid-cols-2 gap-3.5 pt-6 pb-6 border-b border-gray-100 dark:border-white/10"
          >
            {crmErpWorkHighlights.map((point, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/5 hover:border-red-500/30 transition-all shadow-sm"
              >
                <HiBadgeCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack & Footnote with 3D Depth */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mr-1">
                Tech Stack:
              </span>
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-white/10 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400 italic flex items-center gap-1.5">
              <HiSparkles className="text-amber-400 w-3.5 h-3.5" />
              <span>These projects represent my ongoing professional work at Lemon Software Solution.</span>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
};

export default LiveProjects;
