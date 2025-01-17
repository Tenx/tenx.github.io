import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function NeuralSearchProject() {
  return (
    <ProjectLayout
      title="Neural Architecture Search with Actor-Critic Learning for Energy Forecasting"
      description="An innovative NAS framework using Actor-Critic reinforcement learning to automatically discover optimal neural architectures for energy time series forecasting, featuring advanced attention mechanisms and LSTM-based policy networks."
      challenge="Long-term time series forecasting (LTSF) in energy markets presents unique challenges that traditional approaches struggle to address. While different generations of forecasting models exist, each has limitations. The industry needs an automated way to combine the strengths of various approaches while mitigating their individual weaknesses."
      solution="I developed a sophisticated Neural Architecture Search framework using an Actor-Critic reinforcement learning approach. The system automatically discovers optimal combinations of different forecasting models, attention mechanisms, and temporal components. The framework employs a shared LSTM layer for architecture sampling and includes a comprehensive search space covering multiple model generations."
      impact="The framework achieves significant improvements in forecasting accuracy while automating the architecture design process. Key metrics include:
      • Automated discovery of optimal model ensembles
      • Efficient exploration of vast architecture search spaces
      • Adaptive combination of different forecasting approaches
      • Scalable evaluation across multiple energy datasets"
      techStack={[
        "PyTorch",
        "NumPy",
        "Pandas",
        "CUDA",
        "MLflow",
        "Ray",
        "Distributed Computing",
        "LSTM"
      ]}
      imageUrl="/projects/neural-search/thumbnail.jpg"
      githubUrl="https://github.com/Tenx/AutoMTS"
    >
      <section className="space-y-8">
        {/* Actor-Critic Architecture */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Actor-Critic Architecture</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              The core of our framework is an Actor-Critic model that learns to construct optimal 
              ensembles of forecasting models. The architecture features a shared LSTM layer that 
              processes embedded representations of model components, multiple actor heads for 
              sampling different architectural elements, and a sophisticated policy network for 
              architecture exploration.
            </p>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/neural-search/research-overview.jpg"
                alt="Actor-Critic Architecture Overview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Search Space Design */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Search Space Design</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Comprehensive Model Space</h3>
              <p className="text-gray-600">
                The search space encompasses multiple components:
                • Variable number of time series modules (NA)
                • Multiple forecasting model generations
                • Advanced aggregation modules
                • Specialized prediction modules
                Each component is represented in a continuous embedding space, enabling efficient 
                exploration through the Actor-Critic network.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Architecture Sampling</h3>
              <p className="text-gray-600">
                The system employs a sophisticated sampling strategy using multiple actor heads:
                • Initial sampling of the number of models
                • Sequential sampling of individual forecasting modules
                • Selection of aggregation and prediction components
                Each decision is guided by learned probabilities and maintains exploration capability.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Technical Implementation</h2>
          <div className="space-y-6">
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/neural-search/methodology-details.jpg"
                alt="Technical Implementation Details"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-3">LSTM-based Policy Network</h3>
                <p className="text-gray-600">
                  The framework utilizes a shared LSTM layer with 128 hidden units to maintain 
                  temporal context during architecture sampling. The network processes embedded 
                  representations of architecture components and outputs sampling probabilities 
                  through multiple specialized actor heads.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Embedding Space</h3>
                <p className="text-gray-600">
                  Architecture components are represented in a 20-dimensional embedding space, 
                  ensuring unique representations across all dimensions. This continuous 
                  representation enables efficient exploration of the discrete architecture space 
                  through the Actor-Critic network.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Evaluation Pipeline</h3>
                <p className="text-gray-600">
                  The framework includes a comprehensive evaluation system that tracks:
                  • Average architecture probabilities
                  • Component selection distributions
                  • Architecture performance metrics
                  This enables efficient identification of promising architectural patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
} 