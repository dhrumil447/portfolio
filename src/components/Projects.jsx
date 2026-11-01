import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import TiltCard from "./TiltCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "DocBook App",
      category: "Healthcare Mobile Application",
      description:
        "A comprehensive doctor appointment booking application featuring real-time schedule availability, patient records management, and secure authentication. Built with React Native for cross-platform performance across iOS and Android.",
      techStack: ["React Native", "Node.js", "MySQL", "REST APIs"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      liveLink: "https://github.com/dhrumil447/DocBook.git",
      githubLink: "https://github.com/dhrumil447/DocBook.git",
    },
  ];

  return (
    <section
      id="projects"
      className="section-container relative"
      ref={ref}
      aria-label="Other Featured Projects"
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
            <span>Additional Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Cross-platform applications and software implementations built with
            modern development practices.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mt-4"
          />
        </div>

        {/* 3D Projects Grid */}
        <div className="max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <TiltCard
                maxTilt={8}
                scale={1.02}
                className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-red-500/30 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 sm:h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute bottom-4 left-6"
                  >
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-600 text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors shadow-md"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>Source & Case Study</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
