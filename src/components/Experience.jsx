import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import TiltCard from "./TiltCard";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Developer",
      company: "Lemon Software Solution",
      website: "https://lemonsoftwaresolution.com/",
      location: "India",
      period: "July 2026 – Present",
      current: true,
      badge: "Current Employment",
      description:
        "Working as a Software Developer building full-scale web applications, cross-platform mobile apps, and enterprise business software. Developing modern CRM and ERP systems with intuitive user interfaces, implementing robust RESTful APIs, and managing database architectures across SQL and NoSQL environments.",
      technologies: [
        "React.js",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Material UI",
        "Tailwind CSS",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Software Developer",
      company: "Walter Technologies",
      website: "https://waltertechnologies.com/",
      location: "India",
      period: "Previous Experience",
      current: false,
      badge: "Previous Company",
      description:
        "Engineered responsive web applications and mobile user interfaces. Collaborated with design and engineering teams to transform requirements into performant components, integrated RESTful APIs, and maintained clean, well-tested codebases.",
      technologies: [
        "React.js",
        "React Native",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Material UI",
        "Git",
        "GitHub",
      ],
    },
  ];

  const highlights = [
    {
      number: "Published",
      label: "Play Store App",
    },
    {
      number: "Live",
      label: "CRM & ERP Systems",
    },
    {
      number: "100%",
      label: "Clean Code Commitment",
    },
  ];

  return (
    <section
      id="experience"
      className="section-container relative"
      ref={ref}
      aria-label="Professional Software Developer Experience"
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
            <HiBriefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            My software development journey across professional software houses
            and enterprise product engineering.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mt-4"
          />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="relative pl-8 sm:pl-12 pb-16 last:pb-0"
            >
              {/* Luminous Animated Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[15px] sm:left-[23px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-pink-500 to-gray-300 dark:to-neutral-800" />
              )}

              {/* Timeline Indicator Beacon */}
              <div
                className={`absolute left-1.5 sm:left-3 top-2 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                  exp.current
                    ? "bg-red-600 border-white text-white shadow-xl shadow-red-500/40"
                    : "bg-gray-100 dark:bg-neutral-800 border-gray-400 dark:border-neutral-600 text-gray-500"
                }`}
              >
                {exp.current ? (
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
                ) : (
                  <span className="w-2 h-2 bg-gray-400 rounded-full" />
                )}
              </div>

              {/* 3D Tilt Card Container */}
              <TiltCard
                maxTilt={6}
                scale={1.015}
                className="ml-2 sm:ml-4 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl hover:border-red-500/30 transition-all duration-300 group"
              >
                {/* Header: Company & Badge */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex flex-wrap items-center justify-between gap-3 mb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl shadow-sm">
                      <HiBriefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-red-600 dark:text-red-400 hover:underline font-medium"
                            title="Visit company website"
                          >
                            <span>Website</span>
                            <HiExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        <HiLocationMarker className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                        exp.current
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
                      }`}
                    >
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Job Title & Period */}
                <div
                  style={{ transform: "translateZ(15px)" }}
                  className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-white/5"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    {exp.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <HiCalendar className="w-4 h-4 text-red-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div style={{ transform: "translateZ(20px)" }}>
                  <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2.5">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg hover:border-red-500/30 transition-colors shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Highlights Banner with 3D Depth */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + idx * 0.1 }}
            >
              <TiltCard
                maxTilt={8}
                scale={1.03}
                className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center shadow-lg"
              >
                <div className="text-2xl font-extrabold gradient-text">
                  {item.number}
                </div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
                  {item.label}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
