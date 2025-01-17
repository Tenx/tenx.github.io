import ProjectLayout from '../../components/ProjectLayout'
import Image from 'next/image'

export default function SpatialRoboticsProject() {
  return (
    <ProjectLayout
      title="Spatial-AI in Collaborative Robotics"
      description="Integration of RealSense D455 depth camera with myCobot robotic arm for spatial awareness and object manipulation using ROS."
      challenge="Integrating spatial awareness into robotic systems presents significant challenges in coordinate transformation, real-time processing, and precise control. Traditional robotic systems often lack the ability to accurately perceive and interact with their environment, making human-robot collaboration difficult and potentially unsafe. The challenge was to develop a system that could seamlessly integrate depth sensing with robotic control."
      solution="As the technical lead, I developed a comprehensive ROS-based system that integrates Intel RealSense D455 depth camera with myCobot robotic arm. The solution includes custom calibration methods for coordinate transformation, real-time point cloud processing for object detection, and precise control algorithms for robotic manipulation. The system uses ROS nodes for communication between the depth camera and robot controller."
      impact="The implementation has enabled precise object tracking and manipulation capabilities. The system successfully demonstrates real-time spatial awareness, allowing the robot to accurately locate and interact with objects in its environment. The integration provides a foundation for advanced human-robot collaboration applications."
      techStack={[
        "ROS",
        "Python",
        "C++",
        "RealSense SDK",
        "Point Cloud Library",
        "OpenCV",
        "TF (Transform)",
        "myCobot API"
      ]}
      imageUrl="/projects/spatial-robotics/thumbnail.png"
    >
      <section className="space-y-8">
        {/* Technical Implementation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">System Architecture</h2>
          <div className="space-y-6">
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src="/projects/spatial-robotics/architecture.png"
                alt="System Architecture"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Hardware Integration</h3>
                <p className="text-gray-600">
                  The system integrates a myCobot 280 M5Stack robotic arm with an Intel RealSense D455 
                  depth camera. The D455 provides high-quality depth sensing and RGB imaging, while the 
                  6-DOF robotic arm enables precise manipulation. The hardware is coordinated through 
                  ROS nodes running on Ubuntu 20.04.
                </p>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden mt-4">
                  <Image
                    src="/projects/spatial-robotics/mycobot.png"
                    alt="myCobot Hardware Setup"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Spatial Calibration</h3>
                <p className="text-gray-600">
                  Developed a custom calibration system using marker-based detection to establish the 
                  coordinate transformation between the camera and robot base frames. The calibration 
                  process uses three reference points to compute the translation and rotation matrices, 
                  enabling accurate coordinate mapping between vision and robot control systems.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Point Cloud Processing</h3>
                <p className="text-gray-600">
                  Implemented real-time point cloud processing pipelines for object detection and 
                  tracking. The system uses color-based segmentation and clustering algorithms to 
                  identify target objects, with custom ROS nodes handling the point cloud data 
                  processing and coordinate transformation for robot control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Implementation Details</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">ROS Framework</h3>
              <p className="text-gray-600">
                The system utilizes ROS Noetic for communication between components. Custom nodes 
                handle point cloud processing, coordinate transformation broadcasting, and robot 
                control. The architecture includes nodes for color detection, position calculation, 
                and robot movement coordination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Control System</h3>
              <p className="text-gray-600">
                Developed a hybrid control system combining ROS MoveIt for path planning and direct 
                control through the myCobot Python API. The system includes safety checks and 
                real-time position monitoring to ensure reliable operation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
} 