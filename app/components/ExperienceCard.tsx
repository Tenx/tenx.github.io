import { motion } from 'framer-motion'
import Image from 'next/image'

interface ExperienceCardProps {
  logo: string
  title: string
  company: string
  companyUrl: string
  date: string
  location: string
  description: string[]
}

export default function ExperienceCard({
  logo,
  title,
  company,
  companyUrl,
  date,
  location,
  description
}: ExperienceCardProps) {
  return (
    <div className="flex gap-4">
      <div className="hidden sm:flex flex-col items-center">
        <div className="h-full w-px bg-gray-200"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        <div className="h-full w-px bg-gray-200"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-4">
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <Image
                src={logo}
                alt={company}
                width={56}
                height={56}
                className="rounded"
              />
            </a>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <a 
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {company}
              </a>
              <div className="text-sm text-gray-500 mt-1">
                {date}
                <span className="mx-2">•</span>
                {location}
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-gray-600 flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
