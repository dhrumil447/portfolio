import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/dhrumil447",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/dhrumilp7",
    },
    {
      name: "Email",
      icon: <HiMail className="w-5 h-5" />,
      href: "mailto:dhrumil.447@gmail.com",
    },
  ];

  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Dhrumil Patel
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Frontend Developer passionate about creating beautiful,
              functional, and user-friendly web experiences.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm italic">
              "Always open to new challenges and opportunities"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Connect With Me
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-red-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-400 text-sm"
        >
          <p className="flex items-center gap-2">
            © {currentYear} Dhrumil Patel. Made with{" "}
            <FaHeart className="text-red-500" /> and React.js
          </p>
          <p>
            All rights reserved. Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>

        {/* Additional Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-6 bg-red-500/10 rounded-xl border border-red-500/20 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Always open to new challenges. If you're building something
            impactful and need a developer who can take ownership of the
            frontend and deliver quality results—let's connect.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
