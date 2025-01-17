import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function DucereProject() {
  return (
    <ProjectLayout
      title="DucereAI - Leadership Analysis Platform"
      description="AI-powered platform that analyzes and improves leadership skills through advanced image and voice processing, providing personalized feedback and development paths."
      challenge="Traditional leadership assessment methods often lack objectivity and real-time feedback capabilities. Organizations struggle to provide consistent, data-driven leadership development programs that can scale across their workforce. Manual assessment processes are time-consuming and subject to human bias, while existing digital solutions fail to capture the nuanced aspects of leadership communication and presence."
      solution="As the AI/ML Architect, I developed a comprehensive platform that leverages computer vision and voice analysis to provide objective leadership assessments. The system analyzes verbal and non-verbal communication patterns, presentation skills, and audience engagement metrics. We implemented advanced ML models for emotion recognition, gesture analysis, and voice pattern assessment, integrated into a user-friendly platform that delivers actionable insights."
      impact="The platform has transformed leadership development programs across multiple organizations. Users report a 40% improvement in presentation effectiveness and a 35% increase in team engagement metrics. The automated assessment system has reduced evaluation time by 60% while providing more comprehensive feedback. Over 500 leaders have successfully used the platform for their development journey."
      techStack={[
        "Computer Vision",
        "Voice Analysis",
        "Machine Learning",
        "Python",
        "TensorFlow",
        "AWS",
        "React",
        "Node.js"
      ]}
      imageUrl="/projects/ducere/thumbnail.png"
    >
      <section className="space-y-8">
        {/* Technical Implementation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">System Architecture</h2>
          <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
            <Image
              src="/projects/ducere/architecture.png"
              alt="DucereAI System Architecture"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Core Features */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Core Features</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-3">Computer Vision Analysis</h3>
              <p className="text-gray-600">
                Our advanced computer vision system performs real-time analysis of facial expressions, body language, and gesture patterns. The platform leverages deep learning models trained on extensive leadership presentation datasets, enabling comprehensive evaluation of non-verbal communication effectiveness and audience engagement levels. Through continuous monitoring and analysis, the system provides instant feedback on presentation posture, gesture effectiveness, and audience interaction patterns.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Voice Pattern Recognition</h3>
              <p className="text-gray-600">
                The voice analysis module conducts in-depth examination of speech patterns, tone modulation, and pacing dynamics. Our sophisticated models assess multiple factors including vocal clarity, confidence levels, and emotional resonance in speech delivery. The system provides detailed insights into speaking pace, volume modulation, and emotional congruence, helping leaders develop more impactful communication styles.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Personalized Development Paths</h3>
              <p className="text-gray-600">
                Through comprehensive analysis of visual and audio data, the system creates tailored development recommendations for each user. Our machine learning algorithms identify successful patterns in leadership communication styles and generate specific improvement strategies. The platform continuously adapts its recommendations based on user progress and performance data, ensuring a truly personalized development journey for each leader.
              </p>
            </div>
          </div>
        </div>

        {/* Recognition & Impact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recognition & Market Impact</h2>
          <div className="space-y-6">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/ducere/prize.jpg"
                alt="DucereAI Recognition"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              On pitching in the German Center in Shanghai, China, and the MIT-CHIEF Tech Show, the project received considerable attention and positive review for its social effects and appeal. In addition to that, we received incubation invitations from Angelhack and NextAI technological hubs and several seed funds from private investors. Certain multinational companies adopted our mobile app to facilitate employee training sessions.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
} 