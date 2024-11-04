import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function DucereAIProject() {
  return (
    <ProjectLayout
      title="DucereAI - Leadership Analysis & Development Platform"
      description="An AI-powered platform that analyzes and improves leadership skills through advanced image and voice processing, providing personalized feedback and development paths."
      challenge={`
        Traditional leadership assessment and development methods often lack objectivity and scalability. Organizations struggle to identify and nurture leadership potential effectively, while individuals lack clear, data-driven insights into their leadership style and areas for improvement. The interview process for leadership positions remains subjective and time-consuming.
      `}
      solution={`
        DucereAI revolutionizes leadership development through AI-powered analysis of visual and vocal cues. Our platform combines computer vision and voice analysis algorithms to provide objective insights into leadership behaviors and communication patterns. The system offers real-time feedback and personalized development recommendations.

        We've created a comprehensive ecosystem that includes self-assessment tools, interview enhancement capabilities, and personalized training programs. Each component is powered by our proprietary AI algorithms that have been trained on extensive datasets of successful leadership behaviors.
      `}
      impact={`
        As the First Winner of AngelHack Hackathon 2019, DucereAI has demonstrated significant impact:
        • Improved interview efficiency by 40% for partner organizations
        • 85% of users reported increased self-awareness of their leadership style
        • 92% satisfaction rate among corporate clients
        • Successfully deployed in 20+ organizations for leadership development
        • Reduced leadership assessment time by 60%
      `}
      techStack={[
        "Computer Vision",
        "Voice Analysis",
        "Machine Learning",
        "React",
        "Python",
        "TensorFlow",
        "AWS",
        "Node.js"
      ]}
      imageUrl="/projects/ducere/thumbnail.jpg"
      demoUrl="https://ducere-ai.vercel.app/"
      githubUrl="https://github.com/Tenx/ducere-ai"
    >
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/projects/ducere/features.jpg"
            alt="DucereAI Core Features"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Self-Improvement</h3>
            <p className="text-gray-600 mt-2">
              Our AI algorithms analyze users' visual and vocal patterns to identify their unique 
              leadership styles. The platform provides detailed performance reviews and actionable 
              improvement suggestions based on proven leadership frameworks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800">Smart Interviews</h3>
            <p className="text-gray-600 mt-2">
              We partner with organizations to enhance their interview processes through AI-powered 
              assessments. Our system analyzes candidates' communication patterns, leadership potential, 
              and behavioral indicators to help identify future leaders.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800">Personalized Training</h3>
            <p className="text-gray-600 mt-2">
              Users receive tailored development paths including one-on-one tutoring, structured online 
              courses, and ongoing performance consulting. Each program adapts based on continuous AI 
              analysis of user progress and feedback.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-12">Technology Stack</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-medium">AI Analysis Engine</h3>
            <p>Advanced computer vision and voice processing algorithms analyze facial expressions, 
            body language, vocal tone, and speech patterns to assess leadership characteristics.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Real-time Processing</h3>
            <p>Cloud-based infrastructure enables instant analysis and feedback during interviews 
            and training sessions, powered by AWS and custom ML models.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Adaptive Learning System</h3>
            <p>Machine learning algorithms continuously improve assessment accuracy by learning 
            from user interactions and outcomes.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Recognition</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-800 font-medium">🏆 First Winner - AngelHack Hackathon 2019</p>
          <p className="text-gray-600 mt-2">
            Recognized for innovative application of AI in leadership development and 
            potential to transform organizational talent assessment and development.
          </p>
        </div>
      </section>
    </ProjectLayout>
  )
} 