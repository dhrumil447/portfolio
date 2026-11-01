import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      subtitle: "Web & Cross-Platform",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "text-cyan-400" },
        { name: "React Native", icon: <SiReact />, color: "text-cyan-500" },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-400",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "text-blue-500",
        },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-teal-400",
        },
      ],
    },
    {
      title: "Backend & APIs",
      subtitle: "Server Architecture",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-emerald-500" },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "text-gray-800 dark:text-gray-200",
        },
        { name: "REST APIs", icon: <TbApi />, color: "text-rose-500" },
      ],
    },
    {
      title: "Databases",
      subtitle: "Relational & NoSQL",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "text-sky-600" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-600" },
      ],
    },
    {
      title: "UI Frameworks & Tools",
      subtitle: "Design & Version Control",
      skills: [
        { name: "Material UI", icon: <SiMui />, color: "text-blue-500" },
        { name: "Git", icon: <SiGit />, color: "text-orange-600" },
        {
          name: "GitHub",
          icon: <SiGithub />,
          color: "text-gray-900 dark:text-white",
        },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio />,
          color: "text-emerald-500",
        },
        {
          name: "VS Code",
          icon: <SiVisualstudiocode />,
          color: "text-sky-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-container relative"
      ref={ref}
      aria-label="Technical Skills - Frontend, Mobile, Backend, Databases, and Tools"
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
            <span>Technical Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Modern languages, frameworks, databases, and engineering tools I
            use to build robust web, mobile, CRM, and ERP solutions.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mt-4"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg dark:shadow-xl hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6 pb-3 border-b border-gray-100 dark:border-white/10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {category.subtitle}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.04,
                      }}
                      className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group/item"
                    >
                      <div
                        className={`text-2xl sm:text-3xl ${skill.color} group-hover/item:scale-125 transition-transform duration-300 shrink-0`}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover/item:text-red-500 dark:group-hover/item:text-red-400 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center p-6 sm:p-8 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl max-w-3xl mx-auto shadow-md"
        >
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Consistently applying modern engineering standards—from reusable
            React components and React Native mobile architecture to secure Node.js
            REST APIs and optimized database queries.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
