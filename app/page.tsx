'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'
import { NEWS_ITEMS, PROJECTS, EXPERIENCES, SOCIAL_LINKS } from './constants/data'
import ScrollToTop from './components/ScrollToTop'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

// Fix the initial tab state
const TABS = ['About', 'Featured', 'Experience', 'Contact'] as const
type Tab = (typeof TABS)[number]

export default function Home() {
  const [activeTab, setActiveTab] = useState<Lowercase<Tab>>('about')
  
  // Move motion values inside the component
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])
  
  // Add these functions for mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Add ScrollToTop component */}
      <ScrollToTop />
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Logo Section with improved mobile spacing */}
            <Link 
              href="/" 
              className={`${orbitron.className} text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
            >
              TENG TENG
            </Link>

            {/* Navigation Section with mobile optimization */}
            <nav className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <ul className="flex space-x-4 md:space-x-8 min-w-max">
                {TABS.map((tab) => (
                  <li key={tab.toLowerCase()}>
                    <Link
                      href={`#${tab.toLowerCase()}`}
                      className={`text-sm uppercase tracking-wide transition-all duration-200 relative whitespace-nowrap
                        ${activeTab === tab.toLowerCase()
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                        }
                        after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                        after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-transform 
                        after:duration-300 hover:after:scale-x-100`}
                      onClick={() => setActiveTab(tab.toLowerCase() as Lowercase<Tab>)}
                    >
                      {tab}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <motion.div
                style={{
                  perspective: 2000
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  animate={{ scale: 1 }}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                  className="relative"
                >
                  <motion.div
                    style={{
                      transform: "translateZ(75px)",
                    }}
                    className="relative rounded-full overflow-hidden shadow-xl"
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Teng Teng"
                      width={300}
                      height={300}
                      className="rounded-full"
                      priority
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay rounded-full"
                      style={{
                        transform: "translateZ(2px)"
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Teng Teng</h1>
              <div className="text-xl text-gray-600 mb-6">
                <p>AI/ML Developer Lead, SAP</p>
                <p>Co-founder & CEO of XXXAI</p>
                <div className="flex items-center mt-2 space-x-4">
                  <motion.a
                    href={SOCIAL_LINKS.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      {/* Add Google Scholar icon path */}
                    </svg>
                  </motion.a>
                  {/* Add other social icons */}
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I am a Ph.D. student in the Machine Learning Department at Carnegie Mellon University, 
                advised by Prof. Louis-Philippe Morency and Prof. Ruslan Salakhutdinov. My research 
                focuses on developing robust and interpretable machine learning models for real-world applications.
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  pliang@cs.cmu.edu
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Machine Learning Department, CMU
                </p>
              </div>
            </div>
          </div>

          <motion.div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
            <ul className="space-y-4">
              {NEWS_ITEMS.map((news, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  className="flex items-start"
                >
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                  {news}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
            id="featured"  // Add this id
          >
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-16"
            id="experience"
          >
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-12">
                  {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard
                      key={index}
                      {...experience}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-16"
            id="contact"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out for collaborations, research opportunities, or just to say hello!
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:pliang@cs.cmu.edu"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  pliang@cs.cmu.edu
                </motion.a>
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <footer className="bg-white mt-16 py-8 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          <p>&copy; 2024 Paul Liang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
