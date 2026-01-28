import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Arihant Solution",
      location: "India",
      period: "2024 - Present",
      current: true,
      description: "Developed and maintained responsive web applications using React.js and React Native. Built mobile applications delivering seamless user experiences across iOS and Android platforms. Integrated RESTful APIs to connect frontend interfaces with backend services, implementing efficient data fetching and state management. Collaborated with UI/UX designers to transform wireframes into pixel-perfect, interactive user interfaces.",
      technologies: ["React.js", "React Native", "JavaScript", "Material UI", "Bootstrap", "REST API", "Git", "HTML", "CSS"]
    }
  ]

  const achievements = [
    {
      number: "10+",
      label: "Projects Completed"
    },
    {
      number: "9",
      label: "Months Experience"
    },
    {
      number: "100%",
      label: "Client Satisfaction"
    }
  ]

  return (
    <section id="experience" className="section-container" ref={ref}>
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
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Professional experience that I have accumulated over several years.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="relative pl-12 pb-16 last:pb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-2.5 top-8 bottom-0 w-px bg-gray-300 dark:bg-gray-800" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-transparent border-2 border-gray-900 dark:border-white rounded-full" />

              {/* Experience Content */}
              <div className="ml-4">
                {/* Company and Location */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10">
                    <HiBriefcase className="w-5 h-5 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.company}, {exp.location}
                    </h3>
                  </div>
                </div>

                {/* Job Title */}
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 ml-12">
                  {exp.title}
                </h4>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4 ml-12">
                  <HiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 ml-12">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 ml-12">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
