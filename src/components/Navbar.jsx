import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun, HiDownload } from "react-icons/hi";
import resumePDF from "../img/resume.pdf";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "apps",
        "live-projects",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
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
    { name: "Experience", href: "#experience" },
    { name: "Apps", href: "#apps" },
    { name: "Live Projects", href: "#live-projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-300 top-0 left-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div
          className={`backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-gray-200 dark:border-white/10 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            scrolled ? "shadow-2xl shadow-black/20 dark:shadow-black/60" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:text-red-500 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                DP
              </span>
              <span className="hidden sm:inline font-bold text-sm text-gray-800 dark:text-gray-200">
                Dhrumil Patel
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-red-600 dark:text-white bg-red-500/10 dark:bg-white/10 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
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
                className="ml-2 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-red-500/20"
              >
                <HiDownload className="w-4 h-4" />
                <span>Resume</span>
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="ml-2 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <HiSun className="w-5 h-5 text-amber-400" />
                ) : (
                  <HiMoon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <HiSun className="w-5 h-5 text-amber-400" />
                ) : (
                  <HiMoon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden mt-3 backdrop-blur-2xl bg-white/95 dark:bg-black/90 rounded-2xl p-4 border border-gray-200 dark:border-white/10 shadow-2xl"
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-4 rounded-xl transition-all font-medium text-sm ${
                      isActive
                        ? "text-red-600 dark:text-white bg-red-500/10 dark:bg-white/10 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <a
              href={resumePDF}
              download="Dhrumil_Patel_Resume.pdf"
              className="mt-3 py-3 px-4 bg-red-600 hover:bg-red-700 text-white text-center rounded-xl transition-all font-semibold flex items-center justify-center gap-2 text-sm shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <HiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
