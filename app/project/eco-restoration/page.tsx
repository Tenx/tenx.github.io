import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function EcoRestorationProject() {
  return (
    <ProjectLayout
      title="Eco-Restoration Project - Denmark, WA"
      description="A community-driven initiative in Denmark, Western Australia, focusing on environmental restoration and sustainable housing development to achieve local ecosystem balance."
      challenge={`
        Denmark's local ecosystem faces multiple challenges from historical land use and climate change. The community needed a sustainable approach to housing development that would support environmental restoration rather than further degradation. Key challenges included:
        • Balancing development needs with environmental preservation
        • Maintaining biodiversity while creating livable spaces
        • Engaging community members in sustainable practices
        • Implementing eco-friendly building techniques suitable for local conditions
      `}
      solution={`
        We developed a comprehensive approach that combines sustainable housing construction with environmental restoration:
        
        Working closely with local environmental experts and community members, we designed housing solutions that minimize environmental impact while maximizing biodiversity support. The project incorporates native plant species, water-efficient systems, and locally-sourced sustainable materials.

        Each housing unit serves as a hub for local planting initiatives, featuring dedicated spaces for native plant cultivation and wildlife corridors that connect restored habitat areas.
      `}
      impact={`
        The project has achieved significant environmental and community impacts:
        • Restored over 5 hectares of native habitat
        • Established 3 community planting centers
        • Created sustainable housing for 12 families
        • Increased local biodiversity by 40%
        • Reduced water usage by 60% compared to traditional housing
        • Engaged over 200 community volunteers
      `}
      techStack={[
        "Sustainable Architecture",
        "Permaculture",
        "Water Management",
        "Native Plants",
        "Solar Systems",
        "Biodiversity Mapping",
        "Community Planning"
      ]}
      imageUrl="/projects/eco-restoration/thumbnail.jpg"
      demoUrl="https://eco-restoration-denmark.vercel.app/"
      githubUrl="https://github.com/Tenx/eco-restoration"
    >
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Project Components</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/projects/eco-restoration/components.jpg"
            alt="Eco-Restoration Project Components"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Sustainable Housing Design</h3>
            <p className="text-gray-600 mt-2">
              Houses are designed using passive solar principles and local materials, 
              incorporating rainwater harvesting systems and native plant gardens. Each 
              dwelling serves as a model for sustainable living while supporting local 
              biodiversity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800">Native Plant Nursery</h3>
            <p className="text-gray-600 mt-2">
              Community-operated nurseries propagate local plant species for restoration 
              projects. These centers serve as educational hubs where residents learn about 
              native flora and sustainable gardening practices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800">Ecosystem Monitoring</h3>
            <p className="text-gray-600 mt-2">
              Regular biodiversity surveys and environmental monitoring help track the 
              project's impact on local ecosystems. Data collected informs ongoing 
              restoration strategies and community education programs.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-12">Sustainable Practices</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-medium">Water Management</h3>
            <p>Integrated water management systems including rainwater harvesting, 
            greywater recycling, and drought-resistant landscaping reduce water consumption 
            while supporting plant growth.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Energy Efficiency</h3>
            <p>Solar passive design principles and renewable energy systems ensure minimal 
            environmental impact while providing comfortable living spaces.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Community Engagement</h3>
            <p>Regular workshops, volunteer days, and educational programs ensure ongoing 
            community involvement and knowledge sharing.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Future Plans</h2>
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="text-gray-800">Expanding the Project</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
            <li>Develop additional sustainable housing units</li>
            <li>Expand restoration areas to neighboring properties</li>
            <li>Establish seed bank for rare native species</li>
            <li>Create educational programs for local schools</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  )
} 