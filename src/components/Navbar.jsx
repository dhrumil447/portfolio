import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun, HiDownload } from "react-icons/hi";
import resumePDF from "../img/resume.pdf";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section detection
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div
          className={`backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled ? "shadow-2xl shadow-black/50" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-xl font-bold text-white hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              DP
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Download CV Button */}
              <a
                href={resumePDF}
                download="Dhrumil_Patel_Resume.pdf"
                className="ml-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-2 shadow-lg shadow-red-500/20"
              >
                <HiDownload className="w-4 h-4" />
                <span className="hidden lg:inline">CV</span>
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="ml-2 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <HiSun className="w-5 h-5" />
                ) : (
                  <HiMoon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <HiSun className="w-5 h-5" />
                ) : (
                  <HiMoon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 backdrop-blur-xl bg-black/60 rounded-2xl p-4 border border-white/10"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-xl transition-all duration-200 font-medium ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href={resumePDF}
              download="Dhrumil_Patel_Resume.pdf"
              className="block py-3 px-4 mt-2 bg-red-600 hover:bg-red-700 text-white text-center rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
