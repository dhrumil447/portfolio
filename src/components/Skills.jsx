import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiMysql,
  SiGithub,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiTailwindcss,
  SiRedux,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "text-cyan-500" },
        { name: "React Native", icon: <SiReact />, color: "text-cyan-600" },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-500",
        },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-600" },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-cyan-400",
        },
      ],
    },
    {
      title: "UI Libraries",
      skills: [
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
        { name: "Material UI", icon: <SiMui />, color: "text-blue-500" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-700" },
        { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
        { name: "REST API", icon: <SiReact />, color: "text-blue-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "GitHub",
          icon: <SiGithub />,
          color: "text-gray-800 dark:text-white",
        },
        {
          name: "VS Code",
          icon: <SiVisualstudiocode />,
          color: "text-blue-600",
        },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio />,
          color: "text-green-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-container"
      ref={ref}
      aria-label="Technical Skills - Frontend, Backend, and Tools"
    >
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl card-hover"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white pb-3 border-b border-gray-300 dark:border-white/10">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div
                      className={`text-3xl ${skill.color} group-hover:scale-125 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-red-500 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center glass-card p-8 rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Constantly learning and exploring new technologies to stay ahead in
            the ever-evolving world of web development.
            <span className="gradient-text font-semibold">
              {" "}
              Always open to new challenges!
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
