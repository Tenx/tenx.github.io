import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  imageUrl: string
  title: string
  description: string
  techStack: string[]
  projectUrl: string
}

export default function ProjectCard({ 
  imageUrl, 
  title, 
  description, 
  techStack, 
  projectUrl 
}: ProjectCardProps) {
  return (
    <Link href={projectUrl} className="block">
      <motion.div 
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden group">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
