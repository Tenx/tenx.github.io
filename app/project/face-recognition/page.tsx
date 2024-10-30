import ProjectLayout from '../../components/ProjectLayout'

export default function FaceRecognitionProject() {
  return (
    <ProjectLayout
      title="Face Recognition System"
      description="AI-powered face recognition system with real-time detection and analysis capabilities."
      challenge="Building a robust face recognition system that works in various lighting conditions and angles while maintaining high accuracy and low latency."
      solution="Implemented a deep learning-based solution using a combination of CNN architectures for face detection and recognition. Utilized transfer learning and custom data augmentation techniques to improve model performance."
      impact="The system achieved 99.5% accuracy on benchmark datasets and has been deployed in several real-world applications, including security systems and attendance tracking."
      techStack={["Python", "TensorFlow", "OpenCV", "React"]}
      imageUrl="/projects/face-recognition.jpg"
      demoUrl="https://demo.example.com"
      githubUrl="https://github.com/yourusername/face-recognition"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Real-time face detection and recognition</li>
          <li>Support for multiple face tracking</li>
          <li>Integration with security systems</li>
          <li>Mobile-friendly web interface</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}
