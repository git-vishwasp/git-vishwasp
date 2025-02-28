import './App.css';
import profileImage from './profile.png'; // Update this path
import { useState, useEffect, useRef } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // State for visible sections
  const [visibleSections, setVisibleSections] = useState(2);
  const loadMoreRef = useRef(null);
  
  // Sections data
  const sections = [
    {
      id: 1,
      title: "About Me",
      content: (
        <header className="w-[95%] sm:w-[90%] mx-auto p-3 sm:px-4 py-4 sm:py-8 relative">
          <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark rounded-xl sm:rounded-2xl 
                         border border-gray-200 dark:border-white/5 p-3 sm:p-6">
            <div className="relative flex flex-col items-center md:flex-row md:items-start gap-4 sm:gap-6 md:gap-8">
              {/* Profile Section */}
              <div className="md:order-2 w-full md:w-auto flex justify-center">
                <div className="relative w-32 sm:w-40 md:w-48 shrink-0 animate-fadeIn animation-delay-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-xl sm:rounded-2xl 
                                blur opacity-50 group-hover:opacity-75 transition duration-1000 z-0
                                animate-pulse"></div>
                  <img 
                    src={profileImage} 
                    alt="Professional headshot"
                    className="relative rounded-xl sm:rounded-2xl w-full object-cover z-10 shadow-xl
                             transform transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-3 text-sm flex-1 md:order-1 w-full">
                <div className="mb-4 sm:mb-6 border-b border-gray-200 dark:border-white/10 pb-4 sm:pb-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 
                               bg-gradient-to-r from-gray-900 dark:from-white to-accent 
                               bg-clip-text text-transparent tracking-tight
                               animate-slideDown text-center md:text-left">
                    Vishwas Parameshwarappa
                  </h1>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-accent-light mb-3 sm:mb-4 tracking-wide
                               animate-slideDown animation-delay-200 text-center md:text-left">
                    Senior Technology Leader & Innovation Expert
                  </h2>
                  
                  {/* Contact Links */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700 dark:text-gray-200 mt-3 sm:mt-4
                                animate-slideDown animation-delay-300">
                    <a href="tel:+12146816166" 
                       className="hover:text-accent transition-all duration-300 flex items-center gap-1 sm:gap-2 
                                hover:scale-105 hover:translate-x-1 transform">
                      <span className="text-accent">📞</span> +1(214) 681-6166
                    </a>
                    <a href="mailto:mail.vishwasp@gmail.com" 
                       className="hover:text-accent transition-all duration-300 flex items-center gap-1 sm:gap-2 
                                hover:scale-105 hover:translate-x-1 transform">
                      <span className="text-accent">📧</span> mail.vishwasp@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/vishwasparameshwarappa" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="hover:text-accent transition-all duration-300 flex items-center gap-1 sm:gap-2 
                                hover:scale-105 hover:translate-x-1 transform">
                      <span className="text-accent">🔗</span> LinkedIn
                    </a>
                    <a href="/resume.pdf" 
                       download
                       className="hover:text-accent transition-all duration-300 flex items-center gap-1 sm:gap-2 
                                hover:scale-105 hover:translate-x-1 transform">
                      <span className="text-accent">📄</span> Download Resume
                    </a>
                    <a href="https://calendly.com/mail-vishwasp" 
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="hover:text-accent transition-all duration-300 flex items-center gap-1 sm:gap-2 
                                hover:scale-105 hover:translate-x-1 transform">
                      <span className="text-accent">📅</span> Schedule Meeting
                    </a>
                  </div>
                </div>
                
                {/* About Section */}
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 
                              animate-slideUp animation-delay-500 text-left">
                  <p>
                    As a Senior Director of IT with 15+ years of experience at Verizon, 
                    I've led numerous large-scale transformation initiatives and driven 
                    technological innovation across the organization.
                  </p>
                  <p>
                    My journey from Software Engineer to Sr Director, reflects my commitment to excellence and continuous growth 
                    in technology leadership. 
                  </p>
                  <p>
                    Feel free to explore some of the projects I've worked on during my free time and the technologies I've used.
                  </p>
                </div>
                
                {/* Expertise Section */}
                <div className="animate-slideUp animation-delay-700 text-left">
                  <p className="font-semibold text-accent mt-6 sm:mt-8 mb-3 sm:mb-4">Key Focus Areas</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {/* Expertise items with adjusted spacing for mobile */}
                    <span className="expertise-item">Digital Transformation Leadership</span>
                    <span className="expertise-item">Cloud & Infrastructure Modernization</span>
                    <span className="expertise-item">Enterprise Architecture</span>
                    <span className="expertise-item">Technology Innovation & AI Strategy</span>
                    <span className="expertise-item">Strategic Vendor Management</span>
                    <span className="expertise-item">Operations & Service Excellence</span>
                    <span className="expertise-item">Sales Quote to Cash Systems</span>
                    <span className="expertise-item">Order Management & Fulfillment</span>
                    <span className="expertise-item">Service Management Systems</span>
                    <span className="expertise-item">IT Governance & Risk Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
    },
    {
      id: 2,
      title: "Projects",
      content: (
        <section className="w-[95%] sm:w-[90%] mx-auto p-3 sm:px-4 py-4 sm:py-8 relative">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Salescout Project - Current Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border-2 border-accent 
                           hover:border-accent/70 transition-all duration-300 h-full
                           relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-accent text-white text-xs px-2 py-1 rounded-full">
                Current Project
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Salescout
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  A SaaS platform revolutionizing how Amazon sellers understand and leverage their product reviews. 
                  Using advanced AI algorithms, Salescout filters out bot-generated reviews and provides 
                  comprehensive analytics on genuine customer feedback and product performance trends.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Bot Review Detection & Filtering
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Sales Performance Analytics
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Sentiment Analysis & Trend Tracking
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Real-time Performance Monitoring
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">React</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Node.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">TensorFlow</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">AWS</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">MongoDB</span>
                  </div>
                </div>

                <div>
                  <a href="/salescout" 
                     className="inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-light text-white 
                              text-sm font-semibold rounded-lg transition-colors duration-300 gap-2">
                    View Project Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* SmartHome Hub Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  SmartHome Hub
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  A centralized IoT platform that seamlessly integrates various smart home devices. 
                  Features include automated routines, energy optimization, and AI-powered security monitoring.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Multi-device Integration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Energy Usage Analytics
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    AI Security Monitoring
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Voice Control Integration
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Flutter</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Go</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">MQTT</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">TensorFlow Lite</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Firebase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HealthTrack AI Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  HealthTrack AI
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  A mobile health monitoring system that uses machine learning to provide personalized health insights 
                  and early warning detection for potential health issues based on wearable device data.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Real-time Health Monitoring
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Predictive Health Alerts
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Personalized Health Insights
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Healthcare Provider Integration
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Swift</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">CoreML</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">HealthKit</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">AWS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CodeMentor AI Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  CodeMentor AI
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  An AI-powered coding assistant that helps developers learn and improve their coding skills. 
                  Features include real-time code analysis, personalized learning paths, and interactive 
                  problem-solving sessions.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Intelligent Code Review
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Personalized Learning Paths
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Interactive Coding Challenges
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Multi-language Support
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Next.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">TypeScript</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">OpenAI</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">PostgreSQL</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  ];

  useEffect(() => {
    // Update class on document and save preference
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Intersection Observer setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && visibleSections < sections.length) {
          setVisibleSections(prev => Math.min(prev + 1, sections.length));
        }
      });
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [visibleSections, sections.length]);

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark transition-all duration-500">
      {/* Theme Toggle - more accessible on mobile */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full bg-primary-dark dark:bg-primary-light 
                   text-white dark:text-gray-900 shadow-lg 
                   hover:scale-110 hover:rotate-12 z-50
                   transform transition-all duration-300 ease-in-out"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Render visible sections */}
      <div className="space-y-8">
        {sections.slice(0, visibleSections).map(section => (
          <div key={section.id} className="animate-fadeIn">
            {section.content}
          </div>
        ))}
      </div>

      {/* Loading trigger element */}
      {visibleSections < sections.length && (
        <div 
          ref={loadMoreRef}
          className="w-full h-20 flex items-center justify-center"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
        </div>
      )}
    </div>
  );
}

export default App;
