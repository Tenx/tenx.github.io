import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function FlexiGPTProject() {
  return (
    <ProjectLayout
      title="FlexiGPT - Enterprise AI Assistant Platform"
      description="A powerful enterprise-grade AI assistant platform that enables seamless creation and deployment of custom chatbots. Built with advanced RAG capabilities, it features multi-source data integration, real-time updates, and enterprise-ready security."
      challenge={`
        In today's fast-paced enterprise environment, organizations struggle with managing vast amounts of institutional knowledge. Teams spend countless hours searching through fragmented information across departments, leading to decreased productivity and inconsistent customer service. Traditional knowledge management systems fail to adapt to growing data volumes, while maintaining security and accuracy becomes increasingly complex.
      `}
      solution={`
        FlexiGPT revolutionizes enterprise knowledge management through a sophisticated AI-powered approach. At its core, it utilizes GPT-4, enhanced by our custom-built Retrieval Augmented Generation (RAG) pipeline. This system processes and indexes enterprise data from multiple sources, creating a unified knowledge base that's both comprehensive and instantly accessible.

        Our platform employs advanced vector search technology through Pinecone, enabling precise information retrieval across millions of documents in milliseconds. The system maintains real-time synchronization with source materials, ensuring information is always current. Enterprise-grade security is built into every layer, with role-based access control and end-to-end encryption protecting sensitive data.
      `}
      impact={`
        The implementation of FlexiGPT has transformed operations across numerous enterprise organizations. Customer service teams now resolve queries 70% faster, with first-response accuracy improving by 85%. New employee onboarding time has been cut in half, as team members can instantly access relevant information and best practices.

        Beyond metrics, FlexiGPT has fundamentally changed how organizations operate. Teams collaborate more effectively, breaking down traditional information silos. The platform's success is reflected in its 90% user satisfaction rate and growing adoption across 50+ enterprise teams.
      `}
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
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Basic Methodology</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/projects/flexigpt/model.jpg"
            alt="FlexiGPT Basic Methodology"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-600">
          FlexiGPT employs a sophisticated approach to knowledge processing and retrieval. 
          When users interact with the system, their queries trigger a multi-step process: 
          First, the relevant information is retrieved from the knowledge base using semantic search. 
          Then, GPT-4 processes this context along with the query to generate accurate, contextual responses. 
          This methodology ensures both high accuracy and maintainable, traceable outputs.
        </p>

        <h2 className="text-xl font-semibold mt-8">Key Features</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-medium">Context-Aware Processing</h3>
            <p>Our advanced RAG pipeline intelligently processes and indexes enterprise data, 
            creating a dynamic knowledge base that adapts to your organization's evolving needs.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Seamless Integration</h3>
            <p>Connect with your existing tools and databases through our flexible API. 
            Automatic synchronization ensures your knowledge base stays current with your latest information.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Enterprise Security</h3>
            <p>Built with security at its core, featuring role-based access control, 
            audit logging, and end-to-end encryption to protect your sensitive data.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Performance Insights</h3>
            <p>Comprehensive analytics dashboard helps you track usage patterns, 
            response accuracy, and user satisfaction to continuously improve your knowledge base.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Technical Foundation</h2>
        <div className="space-y-2 text-gray-600">
          <p>Built on proven technologies for reliability and performance:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Advanced Vector Search: Pinecone powers our semantic search capabilities</li>
            <li>Language Processing: GPT-4 with custom-tuned prompts</li>
            <li>Data Pipeline: LangChain orchestrates our document processing</li>
            <li>Security Layer: Enterprise-grade encryption and access controls</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  )
}