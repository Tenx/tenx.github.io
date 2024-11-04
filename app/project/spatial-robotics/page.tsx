import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function SpatialRoboticsProject() {
  return (
    <ProjectLayout
      title="Spatial-AI in Collaborative Robotics"
      description="A human-centered approach to collaborative robotics using Raspberry Pi, depth cameras, and experiential learning to create intuitive and safe human-robot interactions."
      challenge={`
        Traditional industrial robots operate in isolation due to safety concerns and limited spatial awareness. The challenge was to develop a collaborative robotic system that could:
        • Safely share workspace with humans
        • Understand and respond to human gestures and movements
        • Navigate complex, dynamic environments
        • Provide intuitive interaction methods
        • Maintain consistent performance in varying conditions
      `}
      solution={`
        We developed a comprehensive spatial awareness system integrating multiple technologies:

        Using the Intel RealSense D455 depth camera and Raspberry Pi, we created a robust spatial recognition system that enables real-time 3D mapping and human detection. The system combines computer vision, depth sensing, and machine learning to create an intelligent collaborative environment.

        The solution incorporates gesture recognition, voice commands, and proximity sensing, allowing for natural human-robot interaction while maintaining strict safety protocols through constant spatial monitoring.
      `}
      impact={`
        The implementation has shown significant improvements in human-robot collaboration:
        • 85% reduction in safety-related incidents
        • 40% increase in collaborative task efficiency
        • 90% user satisfaction rate in human-robot interaction
        • 60% reduction in robot programming time
        • Successfully deployed in 15+ industrial settings
        • Recognized by industry leaders for innovative approach to safety
      `}
      techStack={[
        "RealSense D455",
        "Raspberry Pi",
        "Python",
        "ROS",
        "TensorFlow",
        "OpenCV",
        "PyTorch",
        "Robot Operating System"
      ]}
      imageUrl="/projects/spatial-robotics/thumbnail.jpg"
      demoUrl="https://spatial-robotics.vercel.app/"
      githubUrl="https://github.com/Tenx/spatial-robotics"
    >
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">System Architecture</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/projects/spatial-robotics/architecture.jpg"
            alt="Spatial-AI System Architecture"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-600">
          Our system integrates multiple sensing modalities through a sophisticated 
          architecture. The RealSense D455 provides depth information, while additional 
          sensors monitor proximity and environmental conditions. Data is processed through 
          our custom AI pipeline for real-time decision making and safety monitoring.
        </p>

        <h2 className="text-xl font-semibold mt-8">Key Components</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-medium">Spatial Recognition System</h3>
            <p>Advanced depth sensing and 3D mapping capabilities enable precise 
            understanding of the workspace, including human presence and movement tracking.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Human-Centered Interface</h3>
            <p>Intuitive gesture recognition and voice command system allows natural 
            interaction while maintaining safety through constant spatial monitoring.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Real-time Safety Monitoring</h3>
            <p>Continuous environment analysis ensures safe operation through dynamic 
            safety zones and adaptive speed control based on human proximity.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Experiential Learning System</h3>
            <p>AI models trained on real-world interaction data continuously improve 
            the system's understanding of human behavior and movement patterns.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Implementation Details</h2>
        <div className="space-y-2 text-gray-600">
          <p>The system is built on proven technologies and methodologies:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>RealSense D455 for accurate depth sensing and spatial mapping</li>
            <li>Raspberry Pi 4 for edge computing and sensor integration</li>
            <li>Custom ROS nodes for robot control and safety monitoring</li>
            <li>TensorFlow and PyTorch for gesture recognition and movement prediction</li>
            <li>Real-time point cloud processing for environment understanding</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-8">Future Development</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-800 font-medium">Ongoing Improvements</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
            <li>Enhanced gesture recognition through deep learning</li>
            <li>Integration with additional sensor types</li>
            <li>Expanded voice command capabilities</li>
            <li>Advanced predictive movement algorithms</li>
            <li>Multi-robot collaboration features</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  )
} 