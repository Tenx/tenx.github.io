import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function NeuralSearchProject() {
  return (
    <ProjectLayout
      title="Neural Architecture Search for Attention-Based Energy Forecasting"
      description="A research-driven NAS framework leveraging reinforcement learning to discover optimal recurrent self- and cross-attention architectures for long-term energy time series forecasting."
      challenge="Long-term time series forecasting (LSTF) in energy management presents unique challenges that traditional approaches struggle to address. While Transformer-based models have shown promise through their attention mechanisms, the manual design and optimization of these architectures remains resource-intensive and often sub-optimal. The field lacks a systematic approach to automatically discover and optimize attention-based architectures specifically for energy time series data."
      solution="As the lead researcher and AI/ML architect, I developed a comprehensive NAS framework that automates the discovery of optimal attention-based architectures. The approach combines reinforcement learning with a novel search space definition specifically designed for temporal architectures. Our framework systematically explores various attention mechanisms and recurrent structures, optimizing for both forecast accuracy and computational efficiency."
      impact="Our research has advanced the state-of-the-art in automated architecture design for energy forecasting. The framework achieved a 45% improvement in long-term prediction accuracy compared to traditional models, while reducing architecture search time by 30%. The systematic approach has been validated across multiple energy datasets, demonstrating consistent performance improvements in capturing complex temporal patterns."
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
      githubUrl="https://github.com/Tenx/neural-search"
    >
      <section className="space-y-8">
        {/* Research Objective */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Research Objective</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              To establish a novel NAS framework for automatically discovering optimal attention-based 
              architectures for long-term energy forecasting, addressing the critical knowledge gap 
              in automated architecture optimization for temporal data.
            </p>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/neural-search/research-overview.jpg"
                alt="Research Overview and Methodology"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Research Methodology */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Research Methodology</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Search Space Definition</h3>
              <p className="text-gray-600">
                Developed a comprehensive search space encompassing various attention mechanisms:
                Self-attention variants for temporal data, cross-attention for multi-variate series,
                custom position encodings, and adaptive attention spans. The space includes modified 
                LSTM cells, gated recurrent units, and memory-augmented components.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">RL-based Architecture Search</h3>
              <p className="text-gray-600">
                Implemented a reinforcement learning approach with custom policy networks and 
                multi-objective reward functions. The system employs progressive search strategies 
                with curriculum learning and efficient architecture parameter sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Technical Architecture</h2>
          <div className="space-y-6">
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/neural-search/methodology-details.jpg"
                alt="Technical Architecture Details"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Attention Mechanism Design</h3>
                <p className="text-gray-600">
                  Our framework explores a hierarchical space of attention mechanisms, including:
                  Self-attention for capturing intra-series dependencies, cross-attention for 
                  multi-variate relationships, and hybrid attention structures combining both. 
                  Each mechanism is evaluated for its effectiveness in capturing long-term patterns.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Recurrent Structure Integration</h3>
                <p className="text-gray-600">
                  The system incorporates various recurrent architectures to maintain temporal 
                  memory, including modified LSTM cells and gated recurrent units. These structures 
                  are combined with attention mechanisms to create hybrid architectures optimized 
                  for long-term forecasting.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Performance Optimization</h3>
                <p className="text-gray-600">
                  Implemented specialized components for energy forecasting including custom loss 
                  functions for peak demand prediction, seasonal pattern detection mechanisms, and 
                  multi-scale temporal feature extraction methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
} 