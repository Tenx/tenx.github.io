'use client'

import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'
import { useState, useCallback } from 'react'

export default function FlexiGPTProject() {
  const [showArchitectureModal, setShowArchitectureModal] = useState(false)

  const handleModalClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setShowArchitectureModal(false)
  }, [])

  const handleImageClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setShowArchitectureModal(true)
  }, [])

  return (
    <ProjectLayout
      title="FlexiGPT - Enterprise AI Assistant Platform"
      description="An enterprise-grade RAG-powered AI assistant platform that revolutionizes how organizations manage and utilize their institutional knowledge."
      challenge="Enterprise organizations face critical challenges in knowledge management. Information fragmentation across departments significantly reduces productivity, while traditional search systems struggle to capture context and relationships between data points. Knowledge bases often become outdated and inconsistent, creating confusion and inefficiencies. Additionally, security and compliance requirements add layers of complexity, making it difficult to scale knowledge access across large organizations effectively."
      solution="As the AI/ML Architect, I led the development of FlexiGPT from concept to deployment. My role encompassed designing and implementing the core RAG architecture and ML pipeline, developing custom embedding strategies for enterprise data, and creating a scalable vector search infrastructure. I implemented enterprise-grade security measures and led a team of 5 engineers in system implementation, ensuring robust and secure deployment across multiple enterprise environments."
      impact="FlexiGPT has demonstrated significant impact across enterprise deployments. We achieved a 70% increase in query resolution speed for customer service teams, while improving first-response accuracy by 85%. The platform reduced onboarding time by 50% and maintained a 90% user satisfaction rate. Our success is further evidenced by successful deployments across 50+ enterprise teams and recognition in leading enterprise AI publications."
      techStack={[
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "GPT-4",
        "RAG",
        "Vector DB",
        "LangChain"
      ]}
      imageUrl="/projects/flexigpt/thumbnail.jpg"
      demoUrl="https://flexi-gpt.vercel.app/"
      githubUrl="https://github.com/Tenx/FlexiGPT"
    >
      <section className="space-y-8">
        {/* Objective & Need Statement */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Project Objective</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              To create an enterprise-ready AI assistant platform that transforms organizational 
              knowledge management through advanced RAG technology, making information instantly 
              accessible while maintaining security and accuracy.
            </p>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/flexigpt/problem-statement.jpg"
                alt="Enterprise Knowledge Management Challenges"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Role & Responsibilities */}
        <div>
          <h2 className="text-xl font-semibold mb-4">My Role: AI/ML Architect</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Technical Leadership</h3>
              <p className="text-gray-600">
                My responsibilities as the AI/ML Architect included architecture design and implementation, ML pipeline development, team technical guidance, and performance optimization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Research & Innovation</h3>
              <p className="text-gray-600">
                I conducted RAG methodology research, developed custom embedding strategies, designed security frameworks, and explored scalability solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Technical Architecture</h2>
          <div className="space-y-6">
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/flexigpt/technical-architecture.png"
                alt="FlexiGPT Technical Architecture"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Core RAG Implementation</h3>
                <p className="text-gray-600">
                  The heart of FlexiGPT is our advanced Retrieval Augmented Generation pipeline. 
                  We developed a sophisticated multi-stage document processing system that begins 
                  with semantic chunking of enterprise documents. These chunks are then processed 
                  through our hybrid embedding system, which combines multiple embedding models 
                  to capture both semantic meaning and domain-specific context. The system 
                  maintains context awareness through our proprietary sliding window approach, 
                  ensuring that retrieved information maintains coherence across broader contexts.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Vector Search Infrastructure</h3>
                <p className="text-gray-600">
                  Our distributed vector storage system handles millions of embeddings while 
                  maintaining sub-second query performance. The architecture employs a hierarchical 
                  indexing strategy, with frequently accessed information cached in a fast-access 
                  layer. Real-time updates are managed through an event-driven pipeline that 
                  ensures index consistency while allowing continuous system operation.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Enterprise Security Layer</h3>
                <p className="text-gray-600">
                  Security is implemented at every level of the architecture. Document access 
                  is controlled through a fine-grained permissions system integrated with 
                  enterprise authentication services. All data is encrypted both at rest and 
                  in transit, with a key rotation system ensuring long-term security. The 
                  system maintains detailed audit logs of all queries and document access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outcomes & Metrics */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Response Accuracy</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <p className="text-gray-600">Improvement in first-response accuracy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Query Resolution</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <p className="text-gray-600">Faster query resolution time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">User Satisfaction</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-gray-600">Overall user satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}