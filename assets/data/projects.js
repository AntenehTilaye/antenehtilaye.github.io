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
        "title": "E-commerce Platform For Small Businesses",
        "intro": "This project is one of my side projects i have been working on for some time know. Once finished it can provide more than 2 million jobs and apportunities, currently looking for funding and investers the product is almost finished. If you are interest to work with me on this project in any way, Please Do Contact Me!",
        "intro_img": "assets/images/project2/shopping.png",
        "best_sample": "assets/images/project2/best.png",
        "sample": [{
                "sample_img": "assets/images/project2/one.png",
                "sample_text": [
                    "This is Website Version of the Plat Form",
                    "The logo and Name is Removed since the app is not released yet",
                    "It has all the features that most Shopping Platform Have and",
                    "a lot of unique and new features that will create a lot jobs apportunities",
                    "I can not discuss those Featured Here, But It is Cool, Specially in Ethiopia"
                ]
            },
            {
                "sample_img": "assets/images/project2/two.png",
                "sample_text": [
                    "The Platform has different local languages",
                    "This is just to showcase the Amahric Version, Still the data is being collected",
                    "English, Amahric, Afan Oromo, And Tigrigna is already installed"
                ]
            },
            {
                "sample_img": "assets/images/project2/three.png",
                "sample_text": [
                    "The Platform also have the Dark Theme",
                    "The user can use Light or Dark Theme by changing the Setting",
                    "The Same for the Language"
                ]
            },

            {
                "sample_img": "assets/images/project2/four.png",
                "sample_text": [
                    "This is the Mobile App Version of the Platform",
                    "The Design is similar with Desktop Version",
                    "this is developed using (Flutter)"
                ]
            },

        ]
    },
    "project3": {
        "title": "E-Student Management System",
        "intro": "E-Student Management System is developed for University, College, and Schools. Currently It is deployed for different institutions. If you are an Educational institution and looking for similar project, this is a great time to contact us. You will get fully functional System with in a Week. The ESMS have users like Student, Teacher, Registrar, School, Department, Content Manager for The Website, and A Super Admin.",
        "intro_img": "assets/images/project3/one.png",
        "best_sample": "assets/images/project3/best.png",
        "sample": [{
                "sample_img": "assets/images/project3/one.png",
                "sample_text": [
                    "Some of the Features Include, ",
                    "New Applicatant Registration, and Semister Course Registration",
                    "Course Offering, and Course Assignment",
                    "Section Assignment for Group And Single Student",
                    "Create Assessment, and Mark Entry and Update"
                ]
            },
            {
                "sample_img": "assets/images/project3/two.png",
                "sample_text": [
                    "Cont....",
                    "Grade Submission and View Submitted Grade of any Semister",
                    "View Assessment Result of Current and all taken Courses",
                    "Ask For Regrade and the registrar can view and approved students complain",
                    "the functionality enables the department, registrar and admin to view and generate statistics and reporting"
                ]
            },
            {
                "sample_img": "assets/images/project3/three.png",
                "sample_text": [
                    "Cont....",
                    "The teacher can share course material to his/her students, and Students can also view and download the materials",
                    "Student can Add or Drop Course",
                    "Registar Can Easly View, Evaluate and Approve Applicants",
                    "For More Info please Check out the Demo"
                ]
            },
        ]
    },
    "project4": {
        "title": "Distrubuted Blood Bank System",
        "intro": `
        Now days the need for blood is increasing more than ever as traffic accident are increasing and
        mothers loosing blood while giving birth, so blood donor must give blood in order to save their
        life. All of that is possible if there is effective and robust blood management system.
        The proposed system can store, process, retrieve and analyze information concerned with the
        administration and blood inventory management within a blood bank. The proposed system aims
        at maintaining all the information gathered from blood donors, different blood groups available in
        each blood bank and help them manage in a better way and to provide transparency in this field,
        make the process of obtaining blood from a blood bank hassle free and corruption free and make
        the system of blood bank management efficient. It Connects Donors, Blood Banks and Medical Centers.
        `,
        "intro_img": "assets/images/project4/six.png",
        "best_sample": "assets/images/project4/best.png",
        "sample": [{
                "sample_img": "assets/images/project4/one.png",
                "sample_text": [
                    "Some of the Features Include, ",
                    "Registration: Donor, Branch Blood Bank, Blood Collection Specialist",
                    "Registration: Branch Admin, Medical Center, Blood",
                    "Manage All The Above Informations Collected"
                ]
            },
            {
                "sample_img": "assets/images/project4/two.png",
                "sample_text": [
                    "Cont....",
                    "Manage Notification, and Registration Aproval",
                    "Blood Transaction: medical centers to make blood request from the nearest blood banks and the blood banks provides the needed blood",
                    "Search informations easily and quickly i.e. Users, resource, other information’s",
                    "Generate report: for every activity of the users and for every blood transaction and status."
                ]
            },
            {
                "sample_img": "assets/images/project4/four.png",
                "sample_text": [
                    "Cont....",
                    "Forum: ask questions concerning blood donation and people with such knowledge answer their question.",
                    "Medical Centers can view Avialbility of Blood by type before requesting for blood",
                    "Since it is a Distrubuted System Each blood bank have its on data offline and sync when there is connection",
                    "also when one server is down the system still will function"
                ]
            },
            {
                "sample_img": "assets/images/project4/five.png",
                "sample_text": [
                    "Cont....",
                    "Appointment: Donors can search for nearest Blood Bank or Event and make an appointement, Group or Single Donor/s Can make An Appointment",
                    "Can Check thier Appointment Status.",
                    "Find Route to the Nearest Blood Bank or Event."
                ]
            },
        ]
    },
    "project5": {
        "title": "Graduation Albem Mobile App",
        "intro": "This is one the simplest and usefull app i have ever Created. this App Simulates the Traditional Graduaction Book or albem which is printed in a paper. this makes the ablem to be available forever in the internet. In you are looking for such app or if you think this is interesting please contact me.",
        "intro_img": "assets/images/project5/intro1.png",
        "best_sample": "assets/images/project5/best.png",
        "sample": [{
                "sample_img": "assets/images/project5/one.png",
                "sample_text": [
                    "Some of the Features Include, ",
                    "Can View Trending Students, Departments, and Also Favorites in Thier Feed",
                    "Can Access and play Games",
                    "Can View Graduation Committee",
                    "Can View School or Instutition Information"
                ]
            },
            {
                "sample_img": "assets/images/project5/two.png",
                "sample_text": [
                    "Cont...",
                    "Can view Each Department Students photo and Saying",
                    "Can View Details of a student"
                ]
            },
            {
                "sample_img": "assets/images/project5/three.png",
                "sample_text": [
                    "Cont... ",
                    "Can View Popular Events like Color Day, Water Day...",
                    "Can Photos and Videos of each Event",
                    "Once the images are loaded you can view it offline",
                    "It Also have Web App which is used to manage the Data for the admin"
                ]
            }
        ]
    }
}