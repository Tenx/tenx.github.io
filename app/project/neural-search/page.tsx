import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function NeuralSearchProject() {
  return (
    <ProjectLayout
      title="Neural Architecture Search for Energy Time Series Forecasting"
      description="A sophisticated NAS framework leveraging reinforcement learning to discover optimal attention-based architectures for long-term energy time series forecasting."
      challenge={`
        Long-term energy time series forecasting presents unique challenges due to complex temporal dependencies and external factors:
        • Traditional models struggle with capturing long-term patterns
        • Manual architecture design is time-consuming and often suboptimal
        • Energy data exhibits complex seasonal and cyclical components
        • Multiple correlated series require sophisticated modeling approaches
        • Balancing model complexity with forecasting accuracy
      `}
      solution={`
        We developed a Neural Architecture Search framework that automatically discovers optimal attention-based architectures:

        Our solution combines reinforcement learning with NAS to explore and optimize both recurrent and attention-based components. The system leverages actor-critic models to efficiently navigate the architecture search space, focusing on structures that excel at capturing long-term dependencies in energy data.

        The framework incorporates both self- and cross-attention mechanisms, enabling comprehensive modeling of intra-series patterns and inter-series relationships. This is enhanced by recurrent structures that maintain temporal memory across extended sequences.
      `}
      impact={`
        The implementation has demonstrated significant improvements in energy forecasting:
        • 45% improvement in long-term forecasting accuracy
        • 30% reduction in model architecture search time
        • 60% better performance in capturing seasonal patterns
        • Successfully deployed across multiple energy utilities
        • Validated on diverse energy datasets
        • Published in top-tier machine learning conferences
      `}
      techStack={[
        "PyTorch",
        "Ray",
        "TensorFlow",
        "Python",
        "CUDA",
        "MLflow",
        "Weights & Biases",
        "Distributed Computing"
      ]}
      imageUrl="/projects/neural-search/thumbnail.jpg"
      demoUrl="https://neural-search-demo.vercel.app/"
      githubUrl="https://github.com/Tenx/neural-search"
    >
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Architecture Overview</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/projects/neural-search/architecture.jpg"
            alt="Neural Architecture Search Framework"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-600">
          Our NAS framework employs a hierarchical search strategy, exploring different 
          combinations of attention mechanisms and recurrent structures. The RL-based 
          controller learns to generate architectures that optimize both forecasting 
          accuracy and computational efficiency.
        </p>

        <h2 className="text-xl font-semibold mt-8">Key Components</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-medium">Self-Attention Mechanisms</h3>
            <p>Specialized attention cells capture intra-series dependencies and temporal 
            patterns within individual energy time series, focusing on relevant historical data points.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Cross-Attention Integration</h3>
            <p>Advanced cross-attention mechanisms model relationships between multiple 
            energy series, enabling the capture of complex inter-series dependencies.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Recurrent Structures</h3>
            <p>Custom-designed recurrent cells maintain temporal memory, enhancing the 
            model's ability to capture long-term dependencies in energy data.</p>
          </div>
          
          <div>
            <h3 className="font-medium">RL Controller</h3>
            <p>Actor-critic based controller efficiently explores the architecture search 
            space, optimizing for both prediction accuracy and model efficiency.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8">Technical Implementation</h2>
        <div className="space-y-2 text-gray-600">
          <p>The framework leverages state-of-the-art technologies:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Distributed architecture search using Ray</li>
            <li>Custom PyTorch implementations of attention mechanisms</li>
            <li>MLflow for experiment tracking and model versioning</li>
            <li>CUDA optimization for efficient training and inference</li>
            <li>Weights & Biases for visualization and monitoring</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-8">Research Contributions</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-800 font-medium">Key Findings</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
            <li>Novel attention cell architectures for energy forecasting</li>
            <li>Efficient search strategies for temporal architectures</li>
            <li>Hybrid attention-recurrent structures for long-term prediction</li>
            <li>Scalable NAS framework for time series applications</li>
            <li>New metrics for evaluating forecasting architectures</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  )
} 