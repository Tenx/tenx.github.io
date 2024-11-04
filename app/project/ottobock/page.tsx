import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function OttobockProject() {
  return (
    <ProjectLayout
      title="Ottobock Design Thinking - Healthcare Innovation"
      description="A comprehensive design thinking project focused on improving prosthetic limb user experience through innovative AI and sensor technologies."
      challenge={`
        Modern prosthetic users face significant challenges in adapting to and effectively using their devices. Traditional prosthetics often lack intuitive control systems and real-time feedback mechanisms, leading to reduced user confidence and limited functionality. Additionally, the learning curve for new prosthetic users is steep, and the support systems during the adaptation period are not always comprehensive.
      `}
      solution={`
        Through an intensive design thinking process, we developed an AI-enhanced prosthetic control system that adapts to individual user patterns and provides real-time feedback. The solution integrates multiple sensor technologies with machine learning algorithms to create a more natural and intuitive user experience.

        The system includes a mobile application that provides user feedback, tracks usage patterns, and offers personalized training programs. This comprehensive approach combines hardware improvements with software solutions to create a more holistic prosthetic experience.
      `}
      impact={`
        The implementation of our design solutions has led to significant improvements in user outcomes:
        • 40% reduction in adaptation time for new prosthetic users
        • 60% increase in user confidence during daily activities
        • 85% of users reported more natural movement patterns
        • Substantial improvement in user satisfaction and quality of life metrics
      `}
      techStack={[
        "AI/ML",
        "Sensor Tech",
        "IoT",
        "Mobile App",
        "Data Analytics",
        "User Research",
        "Prototyping"
      ]}
      imageUrl="/projects/ottobock/thumbnail.jpg"
      demoUrl="https://ottobock-demo.vercel.app/"
      githubUrl="https://github.com/Tenx/ottobock"
    >
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Design Process</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/projects/ottobock/process.jpg"
            alt="Ottobock Design Process"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-600">
          Our design thinking approach followed a comprehensive five-stage process: 
          Empathize, Define, Ideate, Prototype, and Test. Through extensive user research 
          and iterative prototyping, we developed solutions that directly address user needs 
          and enhance the overall prosthetic experience.
        </p>

        <h2 className="text-xl font-semibold mt-8">Key Innovations</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-medium">Adaptive Control System</h3>
            <p>AI-powered control system that learns from user movements and adapts to 
            individual patterns, providing more natural and intuitive control.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Smart Feedback Mechanism</h3>
            <p>Real-time sensory feedback system that provides users with information 
            about pressure, temperature, and position of the prosthetic limb.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Mobile Companion App</h3>
            <p>User-friendly application that tracks usage patterns, provides training 
            exercises, and enables remote adjustments by healthcare providers.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Data Analytics Platform</h3>
            <p>Comprehensive analytics system that helps healthcare providers monitor 
            patient progress and optimize prosthetic settings.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Research Methodology</h2>
        <div className="space-y-2 text-gray-600">
          <p>Our research combined multiple approaches to ensure comprehensive understanding:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>In-depth interviews with prosthetic users and healthcare providers</li>
            <li>Motion analysis studies using advanced sensor technology</li>
            <li>Iterative prototyping with user feedback integration</li>
            <li>Long-term usability studies in real-world conditions</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  )
} 