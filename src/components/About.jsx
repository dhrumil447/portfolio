import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiHeart, HiDownload } from "react-icons/hi";
import profileImage from "../img/WhatsApp Image 2026-01-28 at 9.29.22 PM.jpeg";
import resumePDF from "../img/resume.pdf";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <HiCode className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized applications for lightning-fast user experiences",
    },
    {
      icon: <HiHeart className="w-6 h-6" />,
      title: "User-Centric",
      description: "Crafting intuitive interfaces that users love",
    },
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-primary-light to-purple-600 mx-auto rounded-full"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-light to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative glass-card p-4 rounded-3xl">
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Dhrumil Patel - Frontend Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 glass-card px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-sm font-bold gradient-text">9+ Months</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Experience
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
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              Frontend Developer with a Passion for Excellence
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Frontend Developer currently working at{" "}
              <span className="font-semibold text-primary-light">
                Arihant Solution
              </span>
              , where I've been building modern web and mobile applications for
              the past 9 months.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise lies in creating responsive, performant, and visually
              stunning user interfaces using{" "}
              <span className="font-semibold text-primary-light">React.js</span>{" "}
              and{" "}
              <span className="font-semibold text-primary-light">
                React Native
              </span>
              . I specialize in transforming complex designs into pixel-perfect
              implementations, integrating RESTful APIs seamlessly, and ensuring
              an exceptional user experience across all devices.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest frontend technologies and best
              practices. My goal is to build products that not only look great
              but also solve real problems and deliver tangible value to users.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">
                9+ Months Experience
              </span>
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">
                10+ Projects
              </span>
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">
                React Specialist
              </span>
            </div>

            <motion.a
              href={resumePDF}
              download="Dhrumil_Patel_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-6 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HiDownload className="w-6 h-6" />
              Download Full Resume
            </motion.a>
          </motion.div>

          {/* Highlights Cards */}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl card-hover group text-center"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="p-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-12 text-center glass-card p-8 rounded-2xl max-w-4xl mx-auto bg-gradient-to-br from-primary-light/10 to-purple-600/10 border-2 border-primary-light/20"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
            "Always eager to learn, adapt, and take on new challenges. I thrive
            in collaborative environments and enjoy turning complex problems
            into elegant solutions."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
