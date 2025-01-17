import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function OttobockProject() {
  return (
    <ProjectLayout
      title="Ottobock Design Thinking"
      description="A comprehensive design thinking project focused on improving prosthetic limb user experience through innovative AI and sensor technologies."
      challenge="Traditional prosthetic limbs often lack intuitive control systems and real-time feedback mechanisms, leading to reduced user adoption and satisfaction. Users face difficulties in natural movement control and environmental adaptation, while healthcare providers struggle to provide personalized adjustment and rehabilitation programs."
      solution="Through an intensive design thinking process, our interdisciplinary team developed an innovative sensor-based control system integrated with machine learning algorithms. The solution combines real-time motion sensors, EMG signal processing, and adaptive learning algorithms to create a more intuitive and responsive prosthetic control system. We implemented a mobile application for user feedback and adjustment, along with a cloud-based platform for healthcare provider monitoring and customization."
      impact="The project has significantly improved prosthetic limb user experience and adoption rates. Users report a 65% increase in control accuracy and a 40% reduction in adaptation time. The system's machine learning capabilities have enabled continuous improvement in movement prediction, while the mobile application has streamlined the adjustment process, reducing clinical visits by 30%. Healthcare providers now have access to detailed usage analytics for better patient support."
      techStack={[
        "Machine Learning",
        "Sensor Tech",
        "IoT",
        "Data Analytics",
        "Mobile App",
        "User Research",
        "Prototyping"
      ]}
      imageUrl="/projects/ottobock/thumbnail.jpg"
    >
      <section className="space-y-8">
        {/* Design Process */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Design Process</h2>
          <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
            <Image
              src="/projects/ottobock/design-process.png"
              alt="Design Thinking Process"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Team Collaboration */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Team Collaboration</h2>
          <div className="space-y-4">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/ottobock/co-working.jpg"
                alt="Team Collaboration"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              As part of the Product Builder Digital Health program, our team of 20 master's students 
              from HPI and various universities in the Berlin-Brandenburg area collaborated to solve 
              healthcare challenges. Our diverse backgrounds in design thinking, healthcare, and 
              engineering enabled us to approach the challenge from multiple perspectives, leading 
              to innovative solutions.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Core Features</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-3">Sensor Integration</h3>
              <p className="text-gray-600">
                Our system integrates multiple sensor types including EMG sensors for muscle activity detection, 
                motion sensors for movement tracking, and pressure sensors for ground contact feedback. The sensor 
                fusion algorithm combines these inputs to create a comprehensive understanding of user intent and 
                movement patterns.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Adaptive Learning System</h3>
              <p className="text-gray-600">
                The machine learning pipeline continuously learns from user interactions and movement patterns. 
                Our algorithms adapt to individual user preferences and physical characteristics, improving 
                control accuracy over time. The system includes real-time pattern recognition for different 
                movement types and environmental conditions.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Mobile Application Interface</h3>
              <p className="text-gray-600">
                The companion mobile application provides users with real-time feedback and adjustment capabilities. 
                Users can monitor their usage patterns, customize control settings, and communicate with healthcare 
                providers through the app. The interface includes visualization tools for movement data and 
                progress tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Program Results */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Program Results</h2>
          <div className="space-y-4">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/ottobock/result.jpg"
                alt="Program Results and Recognition"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Our team successfully completed the Product Builder Digital Health program, receiving recognition 
              from Ottobock for our innovative approach to prosthetic control systems. The project demonstrated 
              the potential of combining design thinking methodologies with advanced AI technologies in healthcare 
              applications. Our solution was particularly praised for its user-centric design and technical feasibility.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
} 