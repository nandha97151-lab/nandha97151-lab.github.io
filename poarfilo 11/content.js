const portfolio = {
  profile: {
    name: "NANDHAKUMAR N",
    role: "AI & DATA SCIENCE STUDENT",
    college: "KPR Institute of Engineering and Technology",
    degree: "B.Tech – Artificial Intelligence & Data Science",
    duration: "2025 – 2029",
    tagline: "Turning ideas into intelligent digital experiences.",
    avatar: "assets/profile/profile.png"
  },
  about: {
    who_i_am: {
      title: "WHO I AM",
      name: "Nandhakumar N",
      bio: "B.Tech Artificial Intelligence & Data Science student passionate about programming, AI, data, web development and creative technology."
    },
    what_i_do: {
      title: "WHAT I DO",
      skills: [
        "Python Programming",
        "Data Analysis",
        "Machine Learning",
        "Artificial Intelligence",
        "Web Development",
        "SQL",
        "Data Visualization",
        "Problem Solving"
      ]
    },
    how_i_think: {
      title: "HOW I THINK",
      philosophy: "Learn → Build → Experiment → Improve",
      explanation: "I enjoy turning problems into practical technology solutions."
    }
  },
  skills: [
    {
      category: "PROGRAMMING",
      items: ["Python", "C", "JavaScript"]
    },
    {
      category: "AI & DATA",
      items: ["Artificial Intelligence", "Machine Learning", "Data Science", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      category: "WEB",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "DATABASE",
      items: ["SQL"]
    },
    {
      category: "TOOLS",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
    }
  ],
  projects: [
    {
      id: "kutty-labs",
      number: "01",
      title: "KUTTY LABS",
      subtitle: "Autonomous AI-Powered Campus Delivery Robot",
      description: "An autonomous campus delivery robot designed to navigate campus environments and deliver items intelligently.",
      longDescription: "Kutty Labs integrates edge compute (Raspberry Pi & ESP32), sensor fusion with LiDAR/ultrasonic obstacle avoidance, and computer vision camera feeds to calculate optimal waypoints across campus pathways in real-time.",
      tags: ["Raspberry Pi", "ESP32", "Python", "AI", "A* Pathfinding", "Sensors", "Computer Vision"],
      highlights: [
        "Real-time LiDAR point-cloud mapping & SLAM trajectory computation",
        "Dual microcontroller architecture with ESP32 motor PWM & Raspberry Pi brain",
        "Camera-based pedestrian detection & dynamic corridor pathing",
        "Sub-50ms latency telemetry transmission over local campus WiFi mesh"
      ],
      metrics: [
        { label: "Navigation Accuracy", value: "98.4%" },
        { label: "Obstacle Detection", value: "< 20ms" },
        { label: "Payload Capacity", value: "8.5 kg" }
      ],
      accentColor: "#C9382B",
      image: "assets/projects/kutty_labs.jpg"
    },
    {
      id: "air-drawing-ai",
      number: "02",
      title: "AIR DRAWING AI",
      subtitle: "AI-Powered Drawing Using Hand Tracking",
      description: "A webcam-based application that detects hand and fingertip movement and converts gestures into digital drawings.",
      longDescription: "Utilizes MediaPipe Hands and OpenCV in Python to detect 21 hand landmarks in real-time. Index-finger gestures trigger continuous stroke rasterization on a virtual transparent buffer, supporting dynamic color switching, gesture erasing, and stroke smoothing.",
      tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      highlights: [
        "21-Point hand landmark tracking running at 30+ FPS on consumer hardware",
        "Intelligent gesture state machine (Drawing mode, Color Selection, Full Erase)",
        "Kalman filter-smoothed stroke trajectory preventing jitter",
        "Direct canvas overlay with particle spray and glow effects"
      ],
      metrics: [
        { label: "Processing Speed", value: "45+ FPS" },
        { label: "Gesture Latency", value: "~18ms" },
        { label: "Landmarks Tracked", value: "21 Points" }
      ],
      accentColor: "#059669",
      image: "assets/projects/air_drawing.jpg"
    },
    {
      id: "smart-solar-tracker",
      number: "03",
      title: "SMART SOLAR TRACKER",
      subtitle: "IoT-Based Intelligent Solar Tracking System",
      description: "A smart solar tracking system that automatically adjusts the solar panel according to light direction.",
      longDescription: "Engineered with Arduino and ESP8266 to read values from multiple photoresistors (LDRs). It uses a closed-loop servo controller to align solar panels dynamically with the peak solar irradiance vector while streaming real-time power metrics to a Blynk IoT dashboard.",
      tags: ["Arduino", "Photodiode/LDR", "Servo Motor", "ESP8266", "Blynk IoT"],
      highlights: [
        "Closed-loop servo motor alignment based on differential LDR sensor feedback",
        "Real-time voltage and current telemetry streaming over WiFi using ESP8266",
        "Integrated Blynk IoT dashboard for remote energy monitoring and historic logs",
        "Sleep mode logic for low-power operation during dark hours or cloudy days"
      ],
      metrics: [
        { label: "Efficiency Gain", value: "+35%" },
        { label: "Response Delay", value: "< 50ms" },
        { label: "IoT Uptime", value: "99.9%" }
      ],
      accentColor: "#D97706",
      image: "assets/projects/solar_tracker.jpg"
    },
    {
      id: "tamil-billing-system",
      number: "04",
      title: "TAMIL BILLING SYSTEM",
      subtitle: "Tamil-Based Billing Web Application",
      description: "A simple and user-friendly billing system where product names can be entered and displayed in Tamil.",
      longDescription: "Engineered with a focus on high accessibility and regional UX, this system features authentic Tamil UI labels, real-time GST computation, quick barcode lookup, printable thermal invoice generation, and fast inventory updates without requiring English fluency.",
      tags: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Complete Tamil typography interface with clear regional product categorization",
        "Instant bill calculation (அளவு, விலை, மொத்தம், ஜிஎஸ்டி) with automatic discount logic",
        "One-click receipt print generation via HTML printing utilities",
        "Lightweight local database storage for offline resilience using LocalStorage"
      ],
      metrics: [
        { label: "Language Support", value: "தமிழ் + English" },
        { label: "Billing Speed", value: "< 5 sec / invoice" },
        { label: "Data Safety", value: "100% Offline Ready" }
      ],
      accentColor: "#2563EB",
      image: "assets/projects/tamil_billing.jpg"
    }
  ],
  education: [
    {
      year: "2025",
      title: "Started B.Tech",
      subtitle: "Artificial Intelligence & Data Science",
      description: "Embarked on formal B.Tech studies in Artificial Intelligence and Data Science at KPR Institute of Engineering and Technology. Dived deep into foundational mathematics, discrete structures, algorithmic thinking, and core programming paradigms in Python, C, and Java."
    },
    {
      year: "2025–2029",
      title: "KPR Institute of Engineering and Technology",
      subtitle: "B.Tech – Artificial Intelligence & Data Science",
      description: "Pursuing a comprehensive curriculum encompassing statistics, data engineering, machine learning architectures, robotics and embedded systems, full-stack systems, and creative technologies."
    },
    {
      year: "PRESENT",
      title: "Active Learning & Building",
      subtitle: "Specializing in AI, Data Science & Web Systems",
      description: "Building hands-on projects, participating in algorithmic contests, and developing robust fullstack vernacular systems while exploring creative sensor-driven interactions."
    }
  ],
  certifications: [
    {
      title: "Innovation Summit & Project Challenge",
      category: "Innovation",
      year: "2025",
      issuer: "Tech Horizon & Department of AI",
      credentialId: "INNOV-2025-9921",
      skillsGained: ["System Design", "Autonomous Robotics", "Problem Solving", "Rapid Prototyping"],
      colorTheme: "#C9382B"
    },
    {
      title: "PromptBattle Generative AI",
      category: "PromptBattle",
      year: "2025",
      issuer: "AI Student Chapter",
      credentialId: "PB-AI-2025-4412",
      skillsGained: ["Prompt Engineering", "LLM Orchestration", "Iterative Refinement", "Few-Shot Logic"],
      colorTheme: "#7C3AED"
    },
    {
      title: "AnimArena Showcase",
      category: "AnimArena",
      year: "2025",
      issuer: "Creative Guild",
      credentialId: "ANIM-2025-0814",
      skillsGained: ["Visual Composition", "Kinetic Motion", "Editorial Layout", "Storyboarding"],
      colorTheme: "#D97706"
    },
    {
      title: "Code War Algorithmic Battle",
      category: "Code War",
      year: "2025",
      issuer: "Competitive Programming Hub",
      credentialId: "CW-2025-7801",
      skillsGained: ["Python / C++ Algorithms", "Time Complexity Optimization", "Dynamic Programming", "Graph Traversal"],
      colorTheme: "#2563EB"
    },
    {
      title: "IPL Quiz and Action",
      category: "IPL Quiz and Action",
      year: "2025",
      issuer: "Sports Analytics League",
      credentialId: "IPL-Q-2025-3390",
      skillsGained: ["Statistical Data Analysis", "Pattern Recognition", "Rapid Recall", "Analytics Thinking"],
      colorTheme: "#059669"
    },
    {
      title: "Computer Hardware System",
      category: "Computer Hardware System",
      year: "2025",
      issuer: "Embedded Systems Laboratory",
      credentialId: "HW-EMB-2025-6602",
      skillsGained: ["ESP32 / Pi Interfacing", "Sensor Integration", "Circuit Debugging", "UART / I2C / SPI"],
      colorTheme: "#DC2626"
    },
    {
      title: "Modern Web Systems",
      category: "Modern Web",
      year: "2025–2026",
      issuer: "Fullstack Engineering Guild",
      credentialId: "WEB-MOD-2026-1188",
      skillsGained: ["Next.js 15", "React 19", "Tailwind CSS", "Motion Systems", "Web Performance"],
      colorTheme: "#0891B2"
    }
  ],
  contact: {
    github: "https://github.com/nandha97151-lab",
    linkedin: "https://www.linkedin.com/in/nandhakumar1234/",
    email: "nandha97151@gmail.com"
  }
};
window.portfolio = portfolio;
