import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "DocBook App",
      description:
        "A comprehensive doctor appointment booking application with real-time availability, patient management, and secure authentication. Built with React Native for seamless cross-platform experience.",
      techStack: ["React Native", "Node.js", "MySQL", "REST API"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    // {
    //   title: "Admin Dashboard",
    //   description:
    //     "Modern and responsive admin dashboard with analytics, user management, and data visualization. Features dark mode, real-time updates, and intuitive UI.",
    //   techStack: ["React.js", "Material UI", "Chart.js", "REST API"],
    //   image:
    //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: true,
    // },
    // {
    //   title: "E-Commerce Platform",
    //   description:
    //     "Full-featured e-commerce application with product catalog, shopping cart, payment integration, and order tracking. Optimized for performance and user experience.",
    //   techStack: ["React.js", "Redux", "Bootstrap", "Node.js"],
    //   image:
    //     "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false,
    // },
    // {
    //   title: "Task Management App",
    //   description:
    //     "Collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Clean and intuitive interface.",
    //   techStack: ["React.js", "Tailwind CSS", "Firebase"],
    //   image:
    //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false,
    // },
    // {
    //   title: "Weather Forecast App",
    //   description:
    //     "Beautiful weather application with 7-day forecast, location-based weather data, and stunning UI. Features smooth animations and real-time updates.",
    //   techStack: ["React Native", "Weather API", "Styled Components"],
    //   image:
    //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false,
    // },
    // {
    //   title: "Portfolio CMS",
    //   description:
    //     "Content Management System for portfolio websites with drag-and-drop builder, template customization, and SEO optimization tools.",
    //   techStack: ["React.js", "Node.js", "MongoDB", "Material UI"],
    //   image:
    //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false,
    // },
  ];

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Projects I worked on. Each of them containing its own case study.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.5 + index * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 rounded-lg cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Preview Button */}
                <motion.a
                  href={project.liveLink}
                  className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-red-500 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm font-medium">Preview</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
