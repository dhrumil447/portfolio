import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart, FaGooglePlay } from "react-icons/fa";
import { HiMail, HiExternalLink } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Published Apps", href: "#apps" },
    { name: "Live Projects", href: "#live-projects" },
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
      name: "Google Play",
      icon: <FaGooglePlay className="w-4 h-4 text-emerald-400" />,
      href: "https://play.google.com/store/apps/details?id=com.moneyflow.managerapp",
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
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Dhrumil Patel
            </h3>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Software Developer at{" "}
              <a
                href="https://lemonsoftwaresolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
              >
                Lemon Software Solution
                <HiExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
              Building high-performance web applications, published Android
              applications, and enterprise CRM & ERP business solutions.
            </p>
            <p className="text-gray-500 text-xs italic">
              "Crafting reliable software that powers real-world operations"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors inline-block"
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
            <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white uppercase tracking-wider text-xs">
              Connect With Me
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Have a project, opportunity, or inquiry? Feel free to reach out.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-neutral-900 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-white/10"
                  aria-label={social.name}
                  title={social.name}
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
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-400 text-xs"
        >
          <p className="flex items-center gap-1.5">
            © {currentYear} Dhrumil Patel. Built with{" "}
            <FaHeart className="text-red-500" /> using React.js & Tailwind CSS.
          </p>
          <p>
            Software Developer • Lemon Software Solution (July 2026 – Present)
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
