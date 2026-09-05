export const personalInfo = {
  name: "GADDE GOWTHAM CHOWDARY",
  shortName: "GOWTHAM CHOWDARY",
  title: "SOFTWARE ENGINEER — AI/ML",
  subtitle: "AI/ML • COMPUTER VISION • SOFTWARE ENGINEERING",
  tagline: "Building practical intelligent systems through code, machine learning, and computer vision.",
  bio: "Computer Science undergraduate at Koneru Lakshmaiah Education Foundation with strong foundations in Data Structures, Algorithms, and Object-Oriented Programming. Experienced in building machine learning and computer vision applications using Python and YOLOv8. Proficient in object detection and developing practical AI-based solutions for real-world problems.",
  email: "2300033152cse1@gmail.com",
  phone: "+91 9133252619",
  linkedin: "https://linkedin.com/in/gowtham-chowdary-gadde-26720132b",
  location: "Vijayawada, Andhra Pradesh, India",
  portrait: `${import.meta.env.BASE_URL}gowtham_portrait.jpg`,
  cgpa: "8.99 / 10.00",
};

export const domains = [
  {
    id: "01",
    title: "AI & MACHINE LEARNING",
    code: "AI_ML_SYSTEMS",
    description: "Hands-on experience developing practical AI/ML solutions, model logic, and inference pipelines for automated classification and telemetry.",
    skills: ["Machine Learning", "Model Logic", "Python Data Pipelines", "Practical AI"]
  },
  {
    id: "02",
    title: "COMPUTER VISION & YOLOv8",
    code: "CV_OBJECT_DETECTION",
    description: "Skilled in applying YOLOv8, image processing, object detection, and bounding-box generation for wildlife and agricultural vision tasks.",
    skills: ["YOLOv8", "Computer Vision", "Object Detection", "Image Processing"]
  },
  {
    id: "03",
    title: "SOFTWARE ENGINEERING",
    code: "SWE_FUNDAMENTALS",
    description: "Solid foundations in C, Java, Python, SQL, Data Structures, Algorithms, OOP, Database Management, and Operating Systems.",
    skills: ["Python", "Java", "C", "SQL", "DSA", "OOP"]
  },
  {
    id: "04",
    title: "PRACTICAL PROBLEM SOLVING",
    code: "PROBLEM_SOLVING",
    description: "Ability to analyze complex domain problems and construct working software applications that deliver tangible real-world value.",
    skills: ["Algorithm Analysis", "System Design Basics", "Pipeline Optimization"]
  }
];

export const projects = [
  {
    id: "01",
    num: "PROJECT 01",
    title: "WILDLIFE ANIMAL DETECTION SYSTEM",
    category: "AI / COMPUTER VISION",
    shortDesc: "Built a wildlife animal detection system using YOLOv8 to identify and classify species from images with bounding boxes and confidence scoring.",
    fullDesc: "Developed an end-to-end computer vision object detection pipeline designed for wildlife monitoring and species protection. Utilizing YOLOv8, the system processes input imagery, identifies targeted species (such as tigers, lions, elephants, and deer), and overlays precise bounding box coordinates along with confidence metrics.",
    purpose: "Wildlife monitoring, automated census, and conservation efforts.",
    tech: ["Python", "YOLOv8", "Computer Vision", "Image Processing"],
    highlights: [
      "Trained and evaluated YOLOv8 architecture for multi-species animal classification.",
      "Generated automated bounding box telemetry with real-time confidence scores.",
      "Constructed custom image-processing pipeline to format raw input photos for inference.",
      "Aimed at helping conservationists monitor animal populations efficiently."
    ],
    interactiveType: "bounding-box",
    samples: [
      {
        name: "Bengal Tiger",
        label: "tiger",
        confidence: "98.6%",
        color: "#00f0ff",
        box: { top: "18%", left: "15%", width: "70%", height: "65%" },
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80",
        speciesInfo: "Panthera tigris — Detected in dense foliage area."
      },
      {
        name: "African Elephant",
        label: "elephant",
        confidence: "96.2%",
        color: "#00ff9d",
        box: { top: "15%", left: "12%", width: "76%", height: "70%" },
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
        speciesInfo: "Loxodonta africana — Savannah corridor movement."
      },
      {
        name: "Spotted Deer",
        label: "deer",
        confidence: "94.8%",
        color: "#f59e0b",
        box: { top: "20%", left: "20%", width: "60%", height: "60%" },
        image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1000&q=80",
        speciesInfo: "Axis axis — Forest boundary detection."
      },
      {
        name: "African Lion",
        label: "lion",
        confidence: "97.4%",
        color: "#ef4444",
        box: { top: "16%", left: "18%", width: "64%", height: "64%" },
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=1000&q=80",
        speciesInfo: "Panthera leo — Daylight tracking signature."
      }
    ]
  },
  {
    id: "02",
    num: "PROJECT 02",
    title: "CROP DISEASE DETECTION SYSTEM",
    category: "MACHINE LEARNING / COMPUTER VISION",
    shortDesc: "Developed an image-based system to classify diseased and healthy crops early using image data and preprocessing techniques.",
    fullDesc: "Designed an agricultural computer vision solution aimed at supporting farmers through early plant disease identification. The system ingests leaf image data, applies image preprocessing techniques to reduce noise and enhance spectral leaf features, and performs multi-class disease classification to distinguish between healthy crops and diseased leaves.",
    purpose: "Helping farmers identify crop diseases at an early stage to prevent yield losses.",
    tech: ["Python", "Machine Learning", "Computer Vision", "Image Preprocessing"],
    highlights: [
      "Trained classification model using curated crop leaf image data.",
      "Applied basic image preprocessing (resizing, contrast normalization, noise filtering).",
      "Categorized healthy foliage versus disease-infected leaves.",
      "Engineered early-warning diagnostic feedback to support sustainable farming."
    ],
    interactiveType: "crop-scanner",
    samples: [
      {
        name: "Healthy Tomato Leaf",
        status: "HEALTHY",
        confidence: "99.1%",
        color: "#00ff9d",
        condition: "No infection detected",
        action: "Optimal growth condition. Standard irrigation recommended.",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19657?auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Early Blight Infection",
        status: "DISEASED",
        confidence: "94.7%",
        color: "#f59e0b",
        condition: "Fungal leaf spot detected (Alternaria solani)",
        action: "Apply targeted bio-fungicide within 48 hours to restrict spread.",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Severe Leaf Mold",
        status: "CRITICAL",
        confidence: "96.3%",
        color: "#ef4444",
        condition: "High fungal spore density detected",
        action: "Isolate infected crop patch and regulate canopy humidity immediately.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80"
      }
    ]
  },
  {
    id: "03",
    num: "PROJECT 03",
    title: "CAMERA TRAP SPECIES DETECTION SYSTEM",
    category: "AI / WILDLIFE MONITORING",
    shortDesc: "Automated AI system to process field camera-trap imagery, detect wildlife species, and generate telemetry coordinates and confidence scores.",
    fullDesc: "Constructed a specialized automated computer vision pipeline tailored for field monitoring and nocturnal/daylight camera-trap image processing. Integrating YOLOv8, the system rapidly screens large volumes of camera-trap photos captured in natural environments, identifies animal occurrences, overlays class labels, and generates confidence scores.",
    purpose: "Automated wildlife monitoring, field data processing, and biodiversity conservation.",
    tech: ["YOLOv8", "Python", "Image Processing", "Camera Trap Telemetry"],
    highlights: [
      "Utilized YOLOv8 optimized for field camera-trap imagery in natural environments.",
      "Built automated batch image-processing pipeline to parse camera logs.",
      "Generated instant bounding boxes, species class labels, and confidence values.",
      "Supported continuous non-intrusive biodiversity research and habitat tracking."
    ],
    interactiveType: "night-vision",
    samples: [
      {
        name: "Camera Trap 04 — Forest Reserve",
        species: "Tiger (Panthera tigris)",
        confidence: "97.9%",
        time: "02:14:38 AM IST",
        mode: "INFRARED NIGHT VISION",
        coords: "16.5062° N, 80.6480° E",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Camera Trap 12 — River Basin",
        species: "Elephant (Loxodonta)",
        confidence: "95.4%",
        time: "11:42:19 PM IST",
        mode: "THERMAL PASS-THROUGH",
        coords: "16.5120° N, 80.6512° E",
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80"
      }
    ]
  }
];

export const techStack = [
  {
    category: "PROGRAMMING LANGUAGES",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Primary", desc: "Core language for AI/ML, computer vision pipelines, and YOLOv8 integration." },
      { name: "Java", level: "Proficient", desc: "Object-Oriented Programming, enterprise software concepts, and algorithms." },
      { name: "C", level: "Foundation", desc: "Low-level fundamentals, memory management, and structured programming." },
      { name: "SQL", level: "Data", desc: "Database querying, schema design, and relational database management." }
    ]
  },
  {
    category: "AI / ML / COMPUTER VISION",
    icon: "Brain",
    skills: [
      { name: "YOLOv8", level: "Core Tool", desc: "State-of-the-art object detection framework applied in wildlife & camera-trap systems." },
      { name: "Computer Vision", level: "Domain", desc: "Image filtering, bounding box telemetry, class label prediction, feature extraction." },
      { name: "Object Detection", level: "Specialty", desc: "Multi-class target detection, bounding box generation, and confidence scoring." },
      { name: "Machine Learning", level: "Domain", desc: "Supervised classification models, data preprocessing, and model evaluation." },
      { name: "Image Processing", level: "Pipeline", desc: "Preprocessing, noise reduction, image resizing, and color space transformations." }
    ]
  },
  {
    category: "CS FUNDAMENTALS",
    icon: "Cpu",
    skills: [
      { name: "Data Structures", level: "Core", desc: "Arrays, Linked Lists, Trees, Graphs, Hash Tables, Stacks & Queues." },
      { name: "Algorithms", level: "Core", desc: "Sorting, Searching, Dynamic Programming, Greedy approaches, Complexity analysis." },
      { name: "OOP", level: "Paradigm", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, Design patterns." },
      { name: "DBMS", level: "Systems", desc: "Relational database concepts, normalization, transactions, SQL querying." },
      { name: "Operating Systems", level: "Systems", desc: "Process scheduling, memory management, concurrency, file systems." },
      { name: "Computer Networks", level: "Systems", desc: "TCP/IP architecture, OSI layers, routing, network security basics." }
    ]
  },
  {
    category: "DEVELOPMENT TOOLS",
    icon: "Wrench",
    skills: [
      { name: "GitHub", level: "Version Control", desc: "Repository management, code versioning, and project tracking." },
      { name: "VS Code", level: "Primary IDE", desc: "Main development environment for Python, C, Java, and Web projects." },
      { name: "Eclipse", level: "Java IDE", desc: "Java development, debugging, and Object-Oriented project building." }
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Koneru Lakshmaiah Education Foundation (KLEF / KL University)",
    period: "2023 – Present",
    location: "Guntur, Andhra Pradesh",
    gradeLabel: "CGPA",
    grade: "8.99 / 10.00",
    badge: "Undergraduate Distinction",
    details: "Focusing on Artificial Intelligence, Machine Learning, Computer Vision, Data Structures, Algorithms, and Software Engineering principles."
  },
  {
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    institution: "Tirumala Junior College",
    period: "2021 – 2023",
    location: "Katheru, Andhra Pradesh",
    gradeLabel: "Percentage",
    grade: "96.7 / 100.0",
    badge: "Academic Excellence",
    details: "Strong foundational grounding in advanced mathematics, analytical physics, and physical sciences."
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Tirumala E.M High School",
    period: "2020 – 2021",
    location: "Katheru, Andhra Pradesh",
    gradeLabel: "Score",
    grade: "100 / 100",
    badge: "Perfect Score (100%)",
    details: "Graduated with top academic standing across mathematics, science, and computer basics."
  }
];

export const certifications = [
  {
    title: "Automation Anywhere Advanced (RPA)",
    issuer: "Automation Anywhere",
    code: "RPA-ADVANCED",
    desc: "Certification in robotic process automation concepts, workflow logic, and automated task execution."
  },
  {
    title: "Oracle Cloud Infrastructure 2025 (AI Foundations Associate)",
    issuer: "Oracle Cloud",
    code: "OCI-2025-AI",
    desc: "Foundational certification covering artificial intelligence principles, cloud machine learning models, and OCI AI services."
  },
  {
    title: "Cambridge Linguaskill English Certification — B1 Level",
    issuer: "Cambridge Assessment English",
    code: "LINGUASKILL-B1",
    desc: "International English language assessment certifying proficiency in professional technical communication."
  }
];

export const achievements = [
  {
    title: "Consistently High Academic Performance",
    metric: "CGPA 8.99 / 10.00",
    desc: "Maintained strong academic standing throughout undergraduate computer science studies at KLEF."
  },
  {
    title: "Independent AI Project Development",
    metric: "3 Vision Systems",
    desc: "Engineered practical end-to-end computer vision and object detection applications using Python and YOLOv8."
  },
  {
    title: "Perfect SSC Academic Record",
    metric: "100% Score",
    desc: "Achieved a flawless score of 100/100 in Secondary School Certification."
  }
];

export const languages = [
  { name: "English", level: "Proficient", dots: 4 },
  { name: "Telugu", level: "Native", dots: 5 },
  { name: "Hindi", level: "Advanced", dots: 4 },
  { name: "Korean", level: "Beginner", dots: 1 }
];
