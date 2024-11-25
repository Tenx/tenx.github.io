'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollToTop from './ScrollToTop'
import { useRouter } from 'next/navigation'

interface ProjectLayoutProps {
  title: string
  description: string
  challenge: string
  solution: string
  solutionImage?: React.ReactElement
  impact: string
  techStack: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  children?: React.ReactNode
}

export default function ProjectLayout({
  title,
  description,
  challenge,
  solution,
  solutionImage,
  impact,
  techStack,
  imageUrl,
  demoUrl,
  githubUrl,
  children
}: ProjectLayoutProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/#featured" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {demoUrl ? (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative h-96 block group cursor-pointer"
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium shadow-lg">
                    View Demo
                  </span>
                </div>
              </a>
            ) : (
              <div className="relative h-96">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
            <div className="p-8 space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Challenge</h2>
                <p className="text-gray-600 whitespace-pre-line">{challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Solution</h2>
                <p className="text-gray-600 whitespace-pre-line">{solution}</p>
                <div className="my-8">
                  {solutionImage}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Impact</h2>
                <p className="text-gray-600 whitespace-pre-line">{impact}</p>
              </div>

              {children}

              <div className="flex gap-4 mt-8">
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {githubUrl && title !== "Eco-Restoration Project - Denmark, WA" && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <ScrollToTop />
    </div>
  )
}