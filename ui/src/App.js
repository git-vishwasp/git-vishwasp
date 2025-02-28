import './App.css';
import profileImage from './profile.png'; // Update this path
import { useState, useEffect, useRef } from 'react';
import { InlineWidget } from 'react-calendly';

function App() {
  const [showCalendly, setShowCalendly] = useState(false);

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
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Vishwas Parameshwarappa" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Schedule a Call button under profile pic */}
              <button 
                onClick={() => setShowCalendly(true)}
                className="mt-4 px-4 py-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Vishwas Parameshwarappa
              </h1>
              <p className="mt-2 text-lg text-accent font-medium">
                Senior Technology Leader
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed w-full">
                With over 15 years of experience in technology leadership, I specialize in building 
                innovative products that solve complex business problems. My expertise spans 
                leading global teams in Point of Sale systems, Order Management systems, Service Management Systems, AI/ML, 
                Cloud Architecture, and Digital Transformation.  
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed w-full">
                Feel free to schedule a call to discuss potential opportunities and explore my portfolio projects, which showcase my problem-solving approach. I'd be happy to walk you through my development process and implementation details.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="https://linkedin.com/in/vishwasparameshwarappa" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-glass-light dark:bg-glass-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:mail.vishwasp@gmail.com" 
                   className="p-2 bg-glass-light dark:bg-glass-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a href="tel:+12146816166" 
                   className="p-2 bg-glass-light dark:bg-glass-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
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

            {/* AI Meeting Assistant Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  AI Meeting Assistant
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  An intelligent meeting assistant that leverages advanced AI to transform business meetings. 
                  Features automated transcription, smart summaries, sentiment analysis, and AI-powered 
                  insights for better decision-making and follow-up actions.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Real-time Meeting Transcription
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    AI-powered Meeting Summaries
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Sentiment Analysis & Insights
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Sales Opportunity Detection
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">React</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">OpenAI</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Whisper</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">WebRTC</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Study Buddy Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  AI Study Buddy
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  A personalized AI-powered learning companion that revolutionizes how students study. 
                  Features adaptive learning paths, smart quiz generation, and intelligent topic analysis 
                  to optimize study efficiency and improve learning outcomes.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Adaptive Learning Pathways
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    AI-Generated Smart Quizzes
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Interactive AI Flashcards
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Weakness Detection & Analysis
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Next.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">OpenAI</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">TensorFlow</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">PostgreSQL</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Redis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Language & Cultural Assistant Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  AI Language & Cultural Assistant
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  An advanced AI-powered companion for language learning and cultural understanding. 
                  Combines AR technology, real-time translation, and cultural insights to create an 
                  immersive language learning and cultural adaptation experience.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    AR-Enhanced Visual Translation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Real-time Voice Translation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Cultural Context & Etiquette
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    AI Conversation Practice
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">React Native</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">OpenAI</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">ARKit/ARCore</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">TensorFlow</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Firebase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Genie Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Trip Genie
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  An AI-powered travel companion that creates personalized travel itineraries based on your preferences. 
                  Leverages LLM technology to consider factors like duration, group size, age groups, and interests to 
                  craft the perfect travel experience.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Personalized Itinerary Generation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Smart Budget Planning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Activity & Restaurant Recommendations
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Export & Share Features
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Next.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Node.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">OpenAI</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">MongoDB</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Google Maps API</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Firebase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* OTP Generator Project - Future Project */}
            <div className="backdrop-blur-sm bg-glass-light dark:bg-glass-dark p-4 sm:p-6 
                           rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 
                           hover:border-accent/30 transition-all duration-300 h-full
                           relative opacity-75 hover:opacity-100">
              <div className="absolute top-3 right-3 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  OTP Generator & Validator
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  A secure, scalable OTP (One-Time Password) generation and validation system designed for 
                  enterprise authentication needs. Features time-based and counter-based OTPs with 
                  configurable validity periods and robust security measures.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    TOTP & HOTP Implementation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Configurable Validity Windows
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Rate Limiting & Brute Force Protection
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-accent">✓</span>
                    Multi-channel Delivery (SMS, Email, Push)
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Node.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Express</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Redis</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">JWT</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Twilio API</span>
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

  // Add this function to handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setShowCalendly(false);
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

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

      {/* Add this modal overlay for Calendly */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl h-[650px] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <InlineWidget 
              url="https://calendly.com/mail-vishwasp" 
              styles={{height: '100%', width: '100%'}}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
