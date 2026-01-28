import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiX,
  HiChat,
  HiPaperAirplane,
  HiDownload,
  HiMicrophone,
  HiSparkles,
} from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm here to help you learn about Dhrumil Patel - his skills, projects, experience, and professional background.",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      type: "bot",
      text: "For Recruiters: If you have a job description or role requirements, feel free to paste it here and I'll provide a detailed match analysis showing how Dhrumil's skills and experience align with your needs.",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      type: "bot",
      text: "For Visitors: You can ask me about Dhrumil's technical skills, notable projects, work experience, or anything else you'd like to know. How can I assist you today?",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    { icon: "💻", text: "What are his skills?" },
    { icon: "💼", text: "Tell me about experience" },
    { icon: "🚀", text: "Show his projects" },
    { icon: "📧", text: "How to contact?" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // JD Analysis
    if (
      lowerMessage.includes("job description") ||
      lowerMessage.includes("jd") ||
      lowerMessage.includes("requirements") ||
      (lowerMessage.includes("role") && lowerMessage.length > 50)
    ) {
      return "📋 Job Description Analysis:\n\nI can analyze how Dhrumil's profile matches your requirements!\n\n✅ React.js & React Native expertise (9+ months)\n✅ 10+ successful project deliveries\n✅ Modern UI/UX implementation skills\n✅ RESTful API integration experience\n✅ Responsive & mobile-first development\n✅ State management with Redux\n✅ Performance optimization\n\n💡 Tip: Share specific requirements and I'll provide a detailed match percentage and gap analysis!\n\n🎯 Key Strengths:\n• Fast learner and adaptable\n• Clean code practices\n• Client-focused approach\n• Strong problem-solving skills";
    }

    // Skills related
    if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("technology") ||
      lowerMessage.includes("tech stack")
    ) {
      return "💻 Technical Skills Overview:\n\n🎨 Frontend Development:\n• React.js (Advanced)\n• React Native (Mobile Apps)\n• JavaScript ES6+\n• HTML5 & CSS3\n• Tailwind CSS\n• Responsive Design\n\n📚 UI/UX Libraries:\n• Bootstrap\n• Material UI\n• Redux (State Management)\n• Framer Motion\n\n⚙️ Backend & APIs:\n• Node.js (Basics)\n• MySQL Database\n• REST API Integration\n• JSON handling\n\n🛠️ Development Tools:\n• GitHub & Git\n• VS Code\n• Android Studio\n• npm/yarn\n\n✨ Specialization: Building modern, responsive web and mobile applications with clean architecture and pixel-perfect design!";
    }

    // Experience related
    if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("arihant")
    ) {
      return "💼 Professional Experience:\n\n🏢 Arihant Solution - Frontend Developer\n📅 Duration: 9+ months (Current)\n\n🎯 Key Responsibilities:\n• React.js web application development\n• React Native mobile app development\n• RESTful API integration & implementation\n• UI/UX design collaboration\n• Modern UI library implementation\n• Performance optimization & debugging\n• Code review & best practices\n\n📊 Key Achievements:\n✅ 10+ successful project deliveries\n✅ 100% client satisfaction rate\n✅ Improved app performance by optimizing code\n✅ Implemented responsive designs for multiple devices\n\n🚀 Growth: From learning React to building production-ready applications with modern architecture!";
    }

    // Projects related
    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("portfolio") ||
      lowerMessage.includes("work sample")
    ) {
      return "🚀 Featured Projects Portfolio:\n\n1️⃣ DocBook App 📱\n   • Doctor appointment booking system\n   • Tech: React Native, API Integration\n   • Features: Real-time booking, notifications\n\n2️⃣ Admin Dashboard 💼\n   • Modern analytics dashboard\n   • Tech: React.js, Material UI, Charts\n   • Features: Data visualization, user management\n\n3️⃣ E-Commerce Platform 🛒\n   • Full-featured shopping application\n   • Tech: React.js, Redux, Payment API\n   • Features: Cart, checkout, order tracking\n\n4️⃣ Task Management App 📋\n   • Collaborative productivity tool\n   • Tech: React.js, Drag-and-drop\n   • Features: Team collaboration, deadlines\n\n5️⃣ Weather Forecast App 🌤️\n   • Beautiful weather interface\n   • Tech: React.js, Weather API\n   • Features: Real-time data, forecasts\n\n💡 Each project showcases modern design, clean code, and user-centric features!\n\n👉 Scroll up to view detailed project cards with live previews!";
    }

    // Contact related
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("reach") ||
      lowerMessage.includes("hire")
    ) {
      return "📞 Contact Information:\n\n📧 Email: dhrumil@example.com\n💼 LinkedIn: linkedin.com/in/dhrumilpatel\n🐙 GitHub: github.com/dhrumilpatel\n📱 Phone: Available upon request\n\n🎯 Current Status:\n✅ Available for work\n✅ Open to new opportunities\n✅ Remote & On-site options\n\n💡 Best Ways to Connect:\n1. Send an email for project inquiries\n2. Connect on LinkedIn for networking\n3. Check GitHub for code samples\n4. Use the contact form above for quick reach\n\n⚡ Response Time: Usually within 24 hours!\n\n🤝 Let's build something amazing together!";
    }

    // Learning & Education
    if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("learn") ||
      lowerMessage.includes("course") ||
      lowerMessage.includes("certification")
    ) {
      return "🎓 Education & Learning:\n\nDhrumil is a self-taught developer who believes in continuous learning!\n\n📚 Learning Approach:\n• Online courses & tutorials\n• Building real-world projects\n• Community engagement\n• Documentation reading\n• Code challenges\n\n🌟 Currently Learning:\n• Advanced React patterns\n• Node.js backend development\n• Cloud deployment (AWS/Vercel)\n• TypeScript\n• Testing frameworks\n\n💡 Philosophy: Learning by doing - every project is an opportunity to grow!";
    }

    // Soft Skills
    if (
      lowerMessage.includes("soft skill") ||
      lowerMessage.includes("communication") ||
      lowerMessage.includes("teamwork") ||
      lowerMessage.includes("personality")
    ) {
      return "🌟 Soft Skills & Personality:\n\n💬 Communication:\n• Clear and concise\n• Active listener\n• Regular updates to stakeholders\n• Technical concepts simplified\n\n🤝 Teamwork:\n• Collaborative mindset\n• Open to feedback\n• Helps team members\n• Shares knowledge\n\n⚡ Work Ethic:\n• Reliable and punctual\n• Meets deadlines\n• Quality-focused\n• Problem solver\n\n🎯 Adaptability:\n• Quick learner\n• Handles pressure well\n• Flexible with changes\n• Open to new technologies\n\n✨ Result: A professional who's not just technically skilled, but also a great team player!";
    }

    // Availability
    if (
      lowerMessage.includes("available") ||
      lowerMessage.includes("availability") ||
      lowerMessage.includes("start") ||
      lowerMessage.includes("join")
    ) {
      return "📅 Availability Status:\n\n✅ CURRENTLY AVAILABLE\n\n🎯 Work Preferences:\n• Full-time positions\n• Contract projects (3+ months)\n• Remote work (preferred)\n• Hybrid/On-site (negotiable)\n\n⏰ Notice Period:\n• Can start immediately for the right opportunity\n• Flexible with start dates\n\n🌍 Location:\n• Open to remote positions worldwide\n• Available for on-site in [Location]\n\n💼 Looking for:\n• React.js/React Native roles\n• Frontend Developer positions\n• Full Stack opportunities\n• Innovative product companies\n\n📧 Let's discuss your opportunity!";
    }

    // React specific
    if (lowerMessage.includes("react")) {
      return "⚛️ React Expertise:\n\nDhrumil is a React specialist with hands-on experience!\n\n🎨 React.js Web Development:\n• Component-based architecture\n• Hooks (useState, useEffect, custom hooks)\n• Context API & Redux\n• React Router\n• Performance optimization\n• Code splitting\n\n📱 React Native Mobile Development:\n• Cross-platform apps (iOS & Android)\n• Native modules integration\n• Navigation (React Navigation)\n• API integration\n• State management\n• App deployment\n\n🔄 State Management:\n• Redux & Redux Toolkit\n• Context API\n• Local state management\n\n🎯 Best Practices:\n• Clean code principles\n• Component reusability\n• Proper folder structure\n• Error handling\n• Testing considerations\n\n💡 Always staying updated with the latest React features and ecosystem!";
    }

    // Salary & Compensation
    if (
      lowerMessage.includes("salary") ||
      lowerMessage.includes("compensation") ||
      lowerMessage.includes("ctc") ||
      lowerMessage.includes("package")
    ) {
      return "💰 Compensation Expectations:\n\nDhrumil is open to discussing competitive compensation based on:\n\n📊 Factors Considered:\n• Role responsibilities\n• Company size & stage\n• Location (remote/on-site)\n• Growth opportunities\n• Benefits package\n\n🎯 Priority:\n• Learning & growth > just salary\n• Work-life balance matters\n• Innovative projects\n• Collaborative environment\n\n💡 Best Approach: Let's discuss the complete package including salary, benefits, and career growth opportunities!\n\n📧 Open to conversation!";
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! 🤔\n\nI'm an AI assistant trained on Dhrumil's portfolio. I can help you with:\n\n💻 Technical skills & expertise\n💼 Work experience & achievements\n🚀 Project portfolio & case studies\n📧 Contact information\n🎯 Availability & job opportunities\n💡 Learning journey & soft skills\n\nTry asking: 'What are his React skills?' or 'Tell me about his projects'\n\nWhat would you like to explore?",
      "I'd be happy to help you learn more about Dhrumil! 😊\n\n🎯 Quick Menu:\n\n1️⃣ Skills & Technologies\n2️⃣ Work Experience\n3️⃣ Projects Portfolio\n4️⃣ Contact & Availability\n5️⃣ Education & Learning\n6️⃣ Soft Skills & Personality\n\n💡 Pro Tip: You can also paste a job description for a match analysis!\n\nWhat interests you most?",
      "Hey there! 👋\n\nDhrumil is a Frontend Developer with 9+ months of experience specializing in React.js and React Native.\n\n✨ Quick Facts:\n• 10+ successful projects\n• 100% client satisfaction\n• Modern tech stack\n• Currently available\n\n🎯 What would you like to know?\n\n💬 Ask me about specific skills, projects, experience, or how to get in touch!",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: input,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(
      () => {
        const botResponse = {
          type: "bot",
          text: getBotResponse(input),
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (question) => {
    setInput(question);
    setShowSuggestions(false);
    setTimeout(() => {
      handleSendWithText(question);
    }, 100);
  };

  const handleSendWithText = (text) => {
    const userMessage = {
      type: "user",
      text: text,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(
      () => {
        const botResponse = {
          type: "bot",
          text: getBotResponse(text),
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
        if (isMinimized) {
          setNewMessageCount((prev) => prev + 1);
        }
      },
      1000 + Math.random() * 1000,
    );
  };

  const copyMessage = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const exportChat = () => {
    const chatContent = messages
      .map(
        (msg) =>
          `[${msg.time}] ${msg.type === "user" ? "You" : "AI Assistant"}: ${msg.text}`,
      )
      .join("\n\n");

    const blob = new Blob([chatContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearChat = () => {
    setMessages([
      {
        type: "bot",
        text: "Chat cleared! How can I help you?",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setShowSuggestions(true);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isMinimized) {
      setNewMessageCount(0);
    }
  };

  const toggleVoiceRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceMessage = "Tell me about your skills";
        setInput(voiceMessage);
        // Auto-send after voice input
        setTimeout(() => handleSendWithText(voiceMessage), 500);
      }, 2000);
    }
  };

  const quickActions = [
    {
      icon: "💼",
      text: "View Experience",
      query: "Tell me about your work experience",
    },
    {
      icon: "🚀",
      text: "Show Projects",
      query: "What projects have you built?",
    },
    {
      icon: "💻",
      text: "Technical Skills",
      query: "What are your technical skills?",
    },
    { icon: "📧", text: "Contact Info", query: "How can I contact you?" },
  ];

  return (
    <>
      {/* Chat Button - Always Visible */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-[9999]"
          >
            {/* Outer glow rings */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary-light blur-xl" />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative p-6 bg-gradient-to-br from-primary via-primary to-primary-light hover:from-primary-light hover:to-primary hover:shadow-2xl text-white rounded-full shadow-xl group overflow-hidden"
              aria-label="Open chat"
            >
              {/* Animated gradient shimmer */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Animated background pulse */}
              <motion.span
                className="absolute inset-0 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Icon with sparkle effect */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <BsStars className="w-8 h-8 drop-shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <HiSparkles className="w-4 h-4 drop-shadow-md" />
                </motion.div>
              </div>

              {/* Enhanced online indicator with pulse */}
              <span className="absolute -top-1 -right-1 flex h-5 w-5 z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/50 animate-pulse"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg"></span>
              </span>

              {/* Notification badge */}
              {newMessageCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg z-20 border-2 border-white"
                >
                  {newMessageCount}
                </motion.span>
              )}

              {/* Enhanced tooltip */}
              <span className="absolute bottom-full right-0 mb-4 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl pointer-events-none backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💬
                  </motion.span>
                  <span>Chat with AI Assistant</span>
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </span>
                <span className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-white"></span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[95vw] sm:w-[420px] h-[85vh] sm:h-[650px] backdrop-blur-2xl bg-white/95 dark:bg-dark-card/95 border-2 border-gray-200 dark:border-dark-border rounded-3xl shadow-2xl z-[9999] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-border bg-gradient-to-r from-primary/10 to-primary-light/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary via-primary to-primary-light rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <BsStars className="w-6 h-6 text-white drop-shadow-md relative z-10" />
                    </motion.div>
                  </motion.div>
                  <motion.span
                    className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white dark:border-dark-card shadow-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    AI Assistant
                    <motion.span
                      className="text-xs px-2.5 py-0.5 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold shadow-sm"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Pro
                    </motion.span>
                  </h3>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1.5 font-medium">
                    <motion.span
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Active • Ask me anything
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={exportChat}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition-colors group"
                  aria-label="Export chat"
                  title="Download chat"
                >
                  <HiDownload className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearChat}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition-colors group"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition-colors"
                  aria-label="Close chat"
                  title="Close chat"
                >
                  <HiX className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} group`}
                >
                  <div className="relative max-w-[85%]">
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-sm ${
                        message.type === "user"
                          ? "bg-gradient-to-br from-primary to-primary-light text-white rounded-br-sm"
                          : "bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-gray-100 rounded-bl-sm border border-gray-200 dark:border-dark-border"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p
                          className={`text-xs ${
                            message.type === "user"
                              ? "text-white/70"
                              : "text-gray-500 dark:text-gray-500"
                          }`}
                        >
                          {message.time}
                        </p>
                        <button
                          onClick={() => copyMessage(message.text, index)}
                          className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded ${
                            message.type === "user"
                              ? "hover:bg-white/20"
                              : "hover:bg-gray-200 dark:hover:bg-dark-border"
                          }`}
                          title="Copy message"
                        >
                          {copiedIndex === index ? (
                            <svg
                              className="w-3.5 h-3.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Action Buttons */}
              {messages.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => setShowQuickActions(!showQuickActions)}
                    className="text-xs text-primary hover:text-primary-light flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-all"
                  >
                    <span>{showQuickActions ? "🔽" : "🔼"}</span>
                    Quick Actions
                  </button>
                </motion.div>
              )}

              {showQuickActions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 gap-2"
                >
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSendWithText(action.query)}
                      className="p-3 bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 hover:border-primary rounded-xl hover:shadow-md transition-all duration-300 text-left group"
                    >
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                        {action.icon}
                      </div>
                      <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {action.text}
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Suggestion Chips */}
              {showSuggestions && messages.length <= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      onClick={() => handleSuggestionClick(question.text)}
                      className="px-4 py-2 bg-white dark:bg-dark-card border-2 border-primary/20 hover:border-primary text-sm rounded-full hover:shadow-md transition-all duration-300 flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:scale-105"
                    >
                      <span>{question.icon}</span>
                      <span>{question.text}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-dark-bg rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg/50">
              <div className="flex gap-2">
                <motion.button
                  onClick={toggleVoiceRecording}
                  disabled={isRecording}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all ${isRecording ? "bg-red-500 animate-pulse" : "bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-dark-border"}`}
                  aria-label="Voice input"
                  title={isRecording ? "Recording..." : "Voice input (demo)"}
                >
                  <HiMicrophone
                    className={`w-5 h-5 ${isRecording ? "text-white" : "text-gray-600 dark:text-gray-400"}`}
                  />
                </motion.button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      isRecording ? "Listening..." : "Type your message..."
                    }
                    maxLength={500}
                    disabled={isRecording}
                    className="w-full px-4 py-3 pr-12 bg-white dark:bg-dark-card border-2 border-gray-200 dark:border-dark-border rounded-xl focus:outline-none focus:border-primary text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 text-sm transition-colors disabled:opacity-50"
                  />
                  {input.length > 0 && !isRecording && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                      {input.length}/500
                    </span>
                  )}
                </div>
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isRecording}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-br from-primary to-primary-light hover:shadow-lg text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Send message"
                >
                  <HiPaperAirplane className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-center">
                {isRecording
                  ? "🎤 Recording... (Demo mode)"
                  : "Press Enter to send • 🎤 Voice input available • AI-powered"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
