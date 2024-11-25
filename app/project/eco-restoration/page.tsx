import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function EcoRestorationProject() {
  return (
    <ProjectLayout
      title="Eco-Restoration Project - Denmark, WA"
      description="A community-driven initiative in Denmark, Western Australia, focusing on environmental restoration and sustainable housing development to achieve local ecosystem balance."
      challenge="Denmark's local ecosystem faces multiple challenges from historical land use and climate change. The community needed a sustainable approach to housing development that would support environmental restoration rather than further degradation. Our project needed to address the complex balance between development needs and environmental preservation, while ensuring biodiversity in livable spaces. We also faced the challenge of engaging community members in sustainable practices and implementing eco-friendly building techniques suitable for local conditions."
      solution="We developed a comprehensive approach that combines sustainable housing construction with environmental restoration. Working closely with local environmental experts and community members, we designed housing solutions that minimize environmental impact while maximizing biodiversity support. The project incorporates native plant species, water-efficient systems, and locally-sourced sustainable materials. Each housing unit serves as a hub for local planting initiatives, featuring dedicated spaces for native plant cultivation and wildlife corridors that connect restored habitat areas."
      impact="The project has achieved remarkable environmental and community impact through its integrated approach. We have successfully restored over five hectares of native habitat and established three thriving community planting centers. The initiative has created sustainable housing for twelve families while increasing local biodiversity by forty percent. Our innovative water management systems have demonstrated a sixty percent reduction in water usage compared to traditional housing. Most importantly, we've engaged more than two hundred community volunteers in ongoing restoration efforts, creating a sustainable model for community-driven environmental restoration."
      techStack={[
        "Sustainable Architecture",
        "Permaculture Design",
        "Water Management",
        "Solar Systems",
        "Native Plants",
        "Biodiversity Mapping",
        "Community Planning"
      ]}
      imageUrl="/projects/eco-restoration/thumbnail.jpg"
      githubUrl="https://github.com/Tenx/eco-restoration"
    >
      <section className="space-y-8">
        {/* Solution Image */}
        <div>
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="/projects/eco-restoration/solution.jpg"
              alt="Eco-Restoration Solution Overview"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Native Plant Integration */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Native Plant Integration</h2>
          <div className="space-y-4">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/eco-restoration/native-plant.jpg"
                alt="Native Plant Species"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Our native plant program focuses on selecting and cultivating indigenous species 
              that support local wildlife and enhance biodiversity. We have established a 
              comprehensive nursery system that propagates local plant varieties, ensuring 
              their successful integration into both residential landscapes and restoration areas.
            </p>
          </div>
        </div>

        {/* Sustainable Practices */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sustainable Practices</h2>
          <div className="space-y-4">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/eco-restoration/sustainable-practice.jpg"
                alt="Sustainable Practices Implementation"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Our sustainable practices encompass water conservation through integrated 
              management systems, including rainwater harvesting and greywater recycling. 
              The housing designs incorporate passive solar principles and renewable energy 
              systems, ensuring minimal environmental impact while providing comfortable 
              living spaces. Regular workshops and educational programs maintain strong 
              community involvement and knowledge sharing.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
} 