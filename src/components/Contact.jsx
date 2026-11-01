import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Rate limiting check
    const lastSubmitTime = localStorage.getItem("lastEmailSubmit");
    const now = Date.now();
    const cooldownTime = 60000; // 1 minute cooldown

    if (lastSubmitTime && now - parseInt(lastSubmitTime) < cooldownTime) {
      const remainingTime = Math.ceil(
        (cooldownTime - (now - parseInt(lastSubmitTime))) / 1000,
      );
      setFormStatus(
        `⏳ Please wait ${remainingTime} seconds before sending another message.`,
      );
      return;
    }

    setIsSubmitting(true);
    setFormStatus("");

    // EmailJS Configuration
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Send email using EmailJS
    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        publicKey,
      )
      .then(
        (response) => {
          localStorage.setItem("lastEmailSubmit", Date.now().toString());
          setFormStatus(
            "✅ Message sent successfully! I'll get back to you soon.",
          );
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
          setTimeout(() => setFormStatus(""), 5000);
        },
        (error) => {
          setFormStatus(
            "❌ Failed to send message. Please try again or email me directly.",
          );
          setIsSubmitting(false);
          setTimeout(() => setFormStatus(""), 5000);
        },
      );
  };

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6" />,
      title: "Email",
      value: "dhrumil.447@gmail.com",
      link: "mailto:dhrumil.447@gmail.com",
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9512721508",
      link: "tel:+919512721508",
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/dhrumil447",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      link: "https://linkedin.com/in/dhrumilp7",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="section-container" ref={ref}>
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl card-hover group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-bold text-gray-900 dark:text-white hover:text-red-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card rounded-xl transition-all duration-300 card-hover ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 rounded-2xl border-2 border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Available for Work
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Open to freelance projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-red-500 outline-none transition-colors duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-red-500 outline-none transition-colors duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-red-500 outline-none transition-colors duration-300 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Project Discussion"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-red-500 outline-none transition-colors duration-300 resize-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-xl font-semibold shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Form Status */}
              {formStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium"
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
