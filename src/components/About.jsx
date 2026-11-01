import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiCode,
  HiLightningBolt,
  HiHeart,
  HiDownload,
  HiExternalLink,
  HiServer,
  HiDeviceMobile,
} from "react-icons/hi";
import profileImage from "../img/WhatsApp Image 2026-01-28 at 9.29.22 PM.jpeg";
import resumePDF from "../img/resume.pdf";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <HiDeviceMobile className="w-6 h-6" />,
      title: "Web & Mobile Apps",
      description:
        "Building responsive web apps with React.js and published cross-platform mobile apps with React Native.",
    },
    {
      icon: <HiServer className="w-6 h-6" />,
      title: "CRM & ERP Systems",
      description:
        "Architecting enterprise business solutions, sales pipelines, stock tracking, and automated billing workflows.",
    },
    {
      icon: <HiCode className="w-6 h-6" />,
      title: "Clean Architecture",
      description:
        "Developing scalable, maintainable codebases with robust RESTful APIs and optimized database schemas.",
    },
  ];

  return (
    <section
      id="about"
      className="section-container relative"
      ref={ref}
      aria-label="About Dhrumil Patel - Software Developer"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <span>Background & Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative glass-card p-4 rounded-3xl border border-gray-200 dark:border-white/10">
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    src={profileImage}
                    alt="Dhrumil Patel - Software Developer at Lemon Software Solution"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Decorative Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 px-5 py-3 rounded-2xl shadow-xl">
                  <p className="text-sm font-bold gradient-text">Software Developer</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Lemon Software Solution
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Software Developer specializing in Web, Mobile, CRM & ERP Systems
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              I am a Software Developer currently working at{" "}
              <a
                href="https://lemonsoftwaresolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
              >
                Lemon Software Solution
                <HiExternalLink className="w-4 h-4 inline" />
              </a>{" "}
              (July 2026 – Present), where I engineer web applications, mobile
              applications, enterprise CRM systems, ERP platforms, and scalable
              business software solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              Prior to joining Lemon Software Solution, I honed my engineering
              foundation at{" "}
              <a
                href="https://waltertechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
              >
                Walter Technologies
                <HiExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , where I developed responsive web applications, modular frontend
              architectures, and integrated REST APIs.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              My technical expertise spans modern frontend frameworks (React.js,
              Material UI, Tailwind CSS), cross-platform mobile development (React
              Native with published applications on Google Play), server-side
              technologies (Node.js, Express.js, REST APIs), and databases (MySQL,
              MongoDB). I focus on writing clean, scalable code that streamlines
              complex business operations and delivers intuitive user experiences.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200">
                July 2026 – Present @ Lemon Software Solution
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200">
                Published Play Store App
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200">
                CRM & ERP Development
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200">
                Prev: Walter Technologies
              </span>
            </div>

            <div className="pt-2">
              <motion.a
                href={resumePDF}
                download="Dhrumil_Patel_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold shadow-lg shadow-red-500/20 hover:shadow-xl transition-all duration-300"
              >
                <HiDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-lg dark:shadow-xl hover:border-red-500/30 transition-all text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3.5 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center p-8 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-red-500/5 via-pink-500/5 to-purple-500/5 border border-red-500/20"
        >
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed italic">
            "Driven by creating impact through clean code, structured software
            architecture, and responsive products that solve genuine enterprise
            and consumer challenges."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
