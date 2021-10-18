projects = {
    "project1": {
        "title": "Object Detection for Mobile Robot Navigation",
        "intro": "Mobile robots do not come with heavy computing power so the detection algorithm response time should be sufficient enough that the robots can make a decision fairly quickly. Multiple object recognition and localization for mobile robot navigation in a dynamic indoor environment are proposed in this study. The algorithm detects an object by combining deep features for recognition and local features for localization. For recognition of multiple objects, a CNN based Deep learning model that uses MobilenetV2 as a base network with a sigmoid classification layer is developed. The model generates a probability for each object in the image independently, which is used for localizing the recognized object in the image. ORB+SURF is used as a feature extractor to generate a bounding box for each object. ORB+SURF is compared with different feature detection and descriptor combination to evaluate its performance. The object detection algorithm is also integrated with ROS to evaluate the performance in a real-world scenario and in doing so the distance information is also extracted from the Laser distance sensor mounted on the top of Turtlebot.",
        "intro_img": "assets/images/project1/four.PNG",
        "best_sample": "assets/images/project1/best.PNG",
        "sample": [{
                "sample_img": "assets/images/project1/one.jpg",
                "sample_text": [
                    "Test-bed for Mobile Robot Indoor Navigation",
                    "The test best represents an indoor computer laboratory environment with some tables (white boxes), trash can, a power outlet, Water bottle, and EPOR robot on the floor",
                    "The image dataset is also collected from this test-bed."
                ]
            },
            {
                "sample_img": "assets/images/project1/three.PNG",
                "sample_text": [
                    "The object recognition algorithm takes an image from the scene as an input.",
                    "generates the probability that the input image belongs to each class.",
                    "Each class probability is calculated independently using a sigmoid function",
                    "The dataset contains images of one object or multiple objects."
                ]
            },
            {
                "sample_img": "assets/images/project1/six.PNG",
                "sample_text": [
                    "First Navigation Scenario Visualized by RViz and RQT, find the Robot",
                    "When the command is executed the path is planned by the global path planner to the object location",
                    "The object is bounded by a green box and the yellow text in the bottom of the bounding box is the distance of the robot to the object",
                    "The object is detected from 0.83 meters and the algorithm is 98% sure that the object is an EPOR robot."
                ]
            },
            {
                "sample_img": "assets/images/project1/five.PNG",
                "sample_text": [
                    "The second scenario is navigating from the starting point to the location of the bottle.",
                    "When it reaches the location the Turtlebot starts to look for the object.",
                    "The object is detected at a distance of 0.67 meters and the algorithm is 95% sure that the object is a bottle."
                ]
            },
            {
                "sample_img": "assets/images/project1/two.PNG",
                "sample_text": [
                    "sample images by combining them all together.",
                    "Putting the object recognition, object localization, and navigation, what kind of object exists, in what part of the image and at what distance does the object is located from the robot can be acquired.",
                ]
            }

        ]
    },
    "project2": {
        "title": "E-commerce Platform",
        "intro": "Mobile robots do not come with heavy computing power so the detection algorithm response time should be sufficient enough that the robots can make a decision fairly quickly. Multiple object recognition and localization for mobile robot navigation in a dynamic indoor environment are proposed in this study. The algorithm detects an object by combining deep features for recognition and local features for localization. For recognition of multiple objects, a CNN based Deep learning model that uses MobilenetV2 as a base network with a sigmoid classification layer is developed. The model generates a probability for each object in the image independently, which is used for localizing the recognized object in the image. ORB+SURF is used as a feature extractor to generate a bounding box for each object. ORB+SURF is compared with different feature detection and descriptor combination to evaluate its performance. The object detection algorithm is also integrated with ROS to evaluate the performance in a real-world scenario and in doing so the distance information is also extracted from the Laser distance sensor mounted on the top of Turtlebot.",
        "intro_img": "assets/images/coding.png",
        "best_sample": "assets/images/coding.png",
        "sample": [{
                "sample_img": "assets/images/program.png",
                "sample_text": [
                    "this is one describtion of the sample",
                    "this is another one describtion of the sample describtion of the sample",
                    "this is also another one describtion of the sample"
                ]
            },
            {
                "sample_img": "assets/images/program.png",
                "sample_text": [
                    "this is one describtion of the sample",
                    "this is another one describtion of the sample describtion of the sample",
                    "this is also another one describtion of the sample"
                ]
            },
            {
                "sample_img": "assets/images/program.png",
                "sample_text": [
                    "this is one describtion of the sample",
                    "this is another one describtion of the sample describtion of the sample",
                    "this is also another one describtion of the sample"
                ]
            }
        ]
    },
    "project3": {
        "title": "E-Student Management System",
        "intro": "Mobile robots do not come with heavy computing power so the detection algorithm response time should be sufficient enough that the robots can make a decision fairly quickly. Multiple object recognition and localization for mobile robot navigation in a dynamic indoor environment are proposed in this study. The algorithm detects an object by combining deep features for recognition and local features for localization. For recognition of multiple objects, a CNN based Deep learning model that uses MobilenetV2 as a base network with a sigmoid classification layer is developed. The model generates a probability for each object in the image independently, which is used for localizing the recognized object in the image. ORB+SURF is used as a feature extractor to generate a bounding box for each object. ORB+SURF is compared with different feature detection and descriptor combination to evaluate its performance. The object detection algorithm is also integrated with ROS to evaluate the performance in a real-world scenario and in doing so the distance information is also extracted from the Laser distance sensor mounted on the top of Turtlebot.",
        "intro_img": "assets/images/coding.png",
        "best_sample": "assets/images/coding.png",
        "sample": [{
                "sample_img": "assets/images/program.png",
                "sample_text": [
                    "this is one describtion of the sample",
                    "this is another one describtion of the sample describtion of the sample",
                    "this is also another one describtion of the sample"
                ]
            },
            {
                "sample_img": "assets/images/program.png",
                "sample_text": [
                    "this is one describtion of the sample",
                    "this is another one describtion of the sample describtion of the sample",
                    "this is also another one describtion of the sample"
                ]
            },
            {
                "sample_img": "assets/images/program.png",
                "sample_text": [
                    "this is one describtion of the sample",
                    "this is another one describtion of the sample describtion of the sample",
                    "this is also another one describtion of the sample"
                ]
            }
        ]
    }
}