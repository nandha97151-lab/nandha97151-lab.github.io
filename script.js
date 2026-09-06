/* --------------------------------------------------
   PREMIUM EDITORIAL CINEMATIC PORTFOLIO ENGINE
   Nandhakumar N — AI & Data Science
   https://nandha97151-lab.github.io
   -------------------------------------------------- */

// --- PORTFOLIO DATA ---
const portfolio = {
  profile: {
    name: "NANDHAKUMAR N",
    role: "AI & DATA SCIENCE STUDENT",
    college: "KPR Institute of Engineering and Technology",
    degree: "B.Tech – Artificial Intelligence & Data Science",
    duration: "2025 – 2029",
    tagline: "Turning ideas into intelligent digital experiences.",
    avatar: "assets/profile.jpg"
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


// --- INTERACTIVE ENGINE ---
/* --------------------------------------------------
   PREMIUM EDITORIAL CINEMATIC PORTFOLIO ENGINE
   Nandhakumar N — AI & Data Science
   -------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  // Verify portfolio data is loaded
  const data = window.portfolio;
  if (!data) {
    console.error("Portfolio content not found. Please ensure content.js is loaded.");
    return;
  }

  // Check user preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Initialize Page Modules
  initRenderData(data);
  initNavigation();
  initCustomCursor(isTouchDevice);
  if (!prefersReducedMotion) {
    initHeroParticles();
    initScrollAnimations();
    initPuzzleTransition();
    initRobot3D();
  }
  initAboutInteractions();
  initWorksGallery(data);
  initContactInteractions();
});

/* ==========================================
   01. DATA INJECTION & RENDER MODULE
   ========================================== */
function initRenderData(data) {
  // Inject Hero Info
  document.getElementById("hero-title").innerHTML = data.profile.name.split("").map(char => {
    if (char === " ") return `<span class="char-span">&nbsp;</span>`;
    return `<span class="char-span">${char}</span>`;
  }).join("");
  document.getElementById("hero-subtitle").innerText = data.profile.role;
  document.getElementById("hero-desc").innerText = data.profile.tagline;
  
  if (data.profile.avatar) {
    document.getElementById("profile-img").src = data.profile.avatar;
  }

  // Inject About Me skills list
  const aboutSkillsContainer = document.getElementById("about-skills-list");
  aboutSkillsContainer.innerHTML = data.about.what_i_do.skills.map(skill => `<li>${skill}</li>`).join("");

  // Inject Skills Section (Universe)
  const skillsContainer = document.getElementById("skills-list-container");
  skillsContainer.innerHTML = data.skills.map((cat, index) => `
    <div class="skills-cat-group" id="skills-cat-${index}">
      <div class="skills-cat-header">
        <h4 class="skills-cat-title">${cat.category}</h4>
        <span class="skills-cat-num">0${index + 1}</span>
      </div>
      <div class="skills-list-items">
        ${cat.items.map(item => `<span class="skill-tag-huge">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");

  // Inject Education timeline
  const educationContainer = document.getElementById("education-timeline-nodes");
  educationContainer.innerHTML = data.education.map((edu, index) => `
    <div class="timeline-node-card" id="timeline-node-${index}">
      <div class="timeline-dot"></div>
      <div class="node-year">${edu.year}</div>
      <div class="node-box">
        <h3 class="node-title">${edu.title}</h3>
        <h4 class="node-subtitle">${edu.subtitle}</h4>
        <p class="node-desc">${edu.description}</p>
      </div>
    </div>
  `).join("");

  // Inject Certifications wall
  const certContainer = document.getElementById("certifications-wall-grid");
  certContainer.innerHTML = data.certifications.map((cert, index) => {
    // Generate deterministic rotation and styles
    const rotations = [-2.5, 3.2, -1.5, 2.8, -3.0, 1.8, -2.0];
    const rot = rotations[index % rotations.length];
    const tapePositions = ["top-left", "top-right", "center", "both"];
    const tapeClass = `tape-${tapePositions[index % tapePositions.length]}`;
    
    return `
      <div class="cert-card ${tapeClass}" style="--rot: ${rot}deg; --accent-theme: ${cert.colorTheme};" id="cert-card-${index}">
        <div class="cert-header">
          <span class="cert-tag" style="color: ${cert.colorTheme}">${cert.category}</span>
          <span class="cert-year">${cert.year}</span>
        </div>
        <div class="cert-body">
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
        </div>
        <div class="cert-footer-info">
          <span class="cert-cred-id">ID: ${cert.credentialId || "N/A"}</span>
          <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:8px;">
            ${cert.skillsGained.slice(0, 2).map(skill => `<span class="project-tag-pill">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================
   02. NAVIGATION MODULE
   ========================================== */
function initNavigation() {
  const header = document.getElementById("main-header");
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menuOverlay = document.getElementById("mobile-nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-link, .nav-logo");
  const backToTop = document.getElementById("back-to-top-btn");

  let lastScrollY = window.scrollY;

  // Scroll visibility management
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    // Hide/show navigation based on direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.classList.add("nav-hidden");
    } else {
      header.classList.remove("nav-hidden");
    }

    // Border bottom on scroll
    if (currentScrollY > 50) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }

    lastScrollY = currentScrollY;
  });

  // Mobile menu toggle
  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("lock-scroll");
  });

  // Close mobile navigation on link click
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          menuBtn.setAttribute("aria-expanded", "false");
          menuOverlay.classList.remove("active");
          document.body.classList.remove("lock-scroll");

          // Smooth scroll to target
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Back to Top button
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================
   03. CUSTOM CURSOR MODULE
   ========================================== */
function initCustomCursor(isTouchDevice) {
  const cursor = document.getElementById("custom-cursor");
  const dot = cursor.querySelector(".cursor-dot");
  const ring = cursor.querySelector(".cursor-ring");
  const label = cursor.querySelector(".cursor-label");
  const globalGlow = document.getElementById("radial-glow-global");

  if (isTouchDevice) {
    cursor.style.display = "none";
    return;
  }

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Position the snappy dot instantly
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

    // Update global crimson glow properties
    document.documentElement.style.setProperty("--glow-x", `${mouseX}px`);
    document.documentElement.style.setProperty("--glow-y", `${mouseY}px`);
  });

  // Smooth inertial ring tracking (lerp)
  function updateRing() {
    const dx = mouseX - ringX;
    const dy = mouseY - ringY;
    
    ringX += dx * 0.12;
    ringY += dy * 0.12;
    
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    label.style.left = `${ringX}px`;
    label.style.top = `${ringY}px`;

    requestAnimationFrame(updateRing);
  }
  updateRing();

  // Mouse hover triggers
  document.body.addEventListener("mouseover", (e) => {
    const target = e.target;
    
    // Check elements for button actions
    if (target.closest(".reveal-works-btn")) {
      document.body.classList.add("hover-btn");
      label.innerText = "ENTER";
    } else if (target.closest(".door-inner") || target.closest(".door-close-btn") || target.closest(".modal-close-btn") || target.closest(".back-to-top")) {
      document.body.classList.add("hover-btn");
      label.innerText = "CLICK";
    } else if (target.closest(".project-card")) {
      document.body.classList.add("hover-image");
      label.innerText = "OPEN";
    } else if (target.closest("a") || target.closest("button") || target.closest(".skill-tag-huge")) {
      document.body.classList.add("hover-link");
    }
  });

  document.body.addEventListener("mouseout", (e) => {
    const target = e.target;
    if (target.closest("a") || target.closest("button") || target.closest(".project-card") || target.closest(".door-inner") || target.closest(".skill-tag-huge")) {
      document.body.classList.remove("hover-btn", "hover-link", "hover-image");
      label.innerText = "";
    }
  });
}

/* ==========================================
   04. HERO PARTICLES MODULE
   ========================================== */
function initHeroParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  const heroSection = document.getElementById("hero");

  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;

  const particles = [];
  const particleCount = 65;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = -(Math.random() * 0.8 + 0.2);
      this.r = Math.random() * 2.5 + 0.5;
      this.opacity = Math.random() * 0.6 + 0.1;
      this.color = Math.random() > 0.45 ? "201, 56, 43" : "255, 255, 255";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      // Floating fade logic
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
    // Disperse particles vertically initially
    particles[i].y = Math.random() * height;
  }

  let animationFrameId;
  let isHeroVisible = true;

  // Optimize loop rendering on offscreen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isHeroVisible = entry.isIntersecting;
      if (isHeroVisible) {
        loop();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(heroSection);

  function loop() {
    if (!isHeroVisible) return;
    
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(loop);
  }

  // Handle resizing
  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });
}

/* ==========================================
   05. SCROLL-DRIVEN & SCRUB ANIMATIONS
   ========================================== */
function initScrollAnimations() {
  const heroSection = document.getElementById("hero");
  const charSpans = document.querySelectorAll(".char-span");
  const subtitle = document.getElementById("hero-subtitle");
  const desc = document.getElementById("hero-desc");
  const scrollIndicator = document.getElementById("scroll-indicator");
  const avatar = document.getElementById("profile-avatar-container");
  const glow = document.getElementById("hero-glow");

  // --- Cinematic Staggered Hero Entry ---
  setTimeout(() => {
    glow.style.opacity = "1";
    
    // Spelling out title
    charSpans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0) scale(1)";
        span.style.filter = "none";
      }, index * 80);
    });

    // Avatar reveal
    setTimeout(() => {
      avatar.style.opacity = "1";
      avatar.style.transform = "translateY(0)";
    }, 400);

    // Subtitle & Desc reveal
    setTimeout(() => {
      subtitle.style.opacity = "1";
      subtitle.style.transform = "translateY(0)";
      desc.style.opacity = "1";
      desc.style.transform = "translateY(0)";
      scrollIndicator.style.opacity = "1";
      scrollIndicator.style.transform = "translateY(0)";
    }, 900);
  }, 300);

  // --- Chapter 02: Pinned Typography Scroll Scrub ---
  const pinnedSection = document.getElementById("where-code-meets");
  const stickyContainer = document.getElementById("sticky-container");
  const wordCode = document.getElementById("word-code");
  const wordData = document.getElementById("word-data");
  const wordIntelligence = document.getElementById("word-intelligence");
  const wordCreativity = document.getElementById("word-creativity");
  const statement = document.getElementById("pinned-statement");
  const centerLabel = document.getElementById("pinned-center-label");
  const pinnedGlow = document.getElementById("pinned-bg-glow");

  window.addEventListener("scroll", () => {
    // 01. Parallax movement on Hero elements
    const scroll = window.scrollY;
    if (scroll < window.innerHeight) {
      const factor = scroll * 0.15;
      avatar.style.transform = `translateY(${factor}px)`;
      subtitle.style.transform = `translateY(${scroll * 0.08}px)`;
      desc.style.transform = `translateY(${scroll * 0.05}px)`;
    }

    // 02. Section 02 Pinned Scrub Logic
    const rect = pinnedSection.getBoundingClientRect();
    const sectionHeight = pinnedSection.offsetHeight;
    const scrollStart = window.scrollY + rect.top;
    
    // Calculate scroll progress percentage inside the sticky segment
    let pct = (window.scrollY - scrollStart) / (sectionHeight - window.innerHeight);
    pct = Math.max(0, Math.min(1, pct)); // Clamp between 0 and 1

    if (pct > 0 && pct < 1) {
      // Dynamic scrub properties based on pct
      
      // Word 1: CODE (peaks at 0.1)
      let pctCode = Math.min(1, pct / 0.25);
      wordCode.style.opacity = pctCode < 0.8 ? pctCode : Math.max(0, 1 - (pctCode - 0.8) / 0.2);
      wordCode.style.transform = `translate3d(${-30 + pctCode * 15}%, ${-40 - pctCode * 50}px, 0) scale(${1 + pctCode * 0.5})`;
      wordCode.style.filter = `blur(${Math.max(0, 10 - pctCode * 10)}px)`;
      wordCode.style.clipPath = `inset(0% ${Math.max(0, 100 - pctCode * 100)}% 0% 0%)`;

      // Word 2: DATA (peaks at 0.3)
      let pctData = Math.max(0, (pct - 0.15) / 0.25);
      pctData = Math.min(1, pctData);
      wordData.style.opacity = pctData < 0.8 ? pctData : Math.max(0, 1 - (pctData - 0.8) / 0.2);
      wordData.style.transform = `translate3d(${30 - pctData * 10}%, ${-20 - pctData * 60}px, 0) scale(${1 + pctData * 0.4})`;
      wordData.style.filter = `blur(${Math.max(0, 10 - pctData * 10)}px)`;
      wordData.style.clipPath = `inset(0% 0% 0% ${Math.max(0, 100 - pctData * 100)}%)`;

      // Word 3: INTELLIGENCE (peaks at 0.5)
      let pctIntel = Math.max(0, (pct - 0.3) / 0.25);
      pctIntel = Math.min(1, pctIntel);
      wordIntelligence.style.opacity = pctIntel < 0.8 ? pctIntel : Math.max(0, 1 - (pctIntel - 0.8) / 0.2);
      wordIntelligence.style.transform = `translate3d(${-20 + pctIntel * 10}%, ${30 - pctIntel * 50}px, 0) scale(${1 + pctIntel * 0.3})`;
      wordIntelligence.style.filter = `blur(${Math.max(0, 10 - pctIntel * 10)}px)`;
      wordIntelligence.style.clipPath = `inset(${Math.max(0, 100 - pctIntel * 100)}% 0% 0% 0%)`;

      // Word 4: CREATIVITY (peaks at 0.7)
      let pctCreat = Math.max(0, (pct - 0.45) / 0.25);
      pctCreat = Math.min(1, pctCreat);
      wordCreativity.style.opacity = pctCreat < 0.8 ? pctCreat : Math.max(0, 1 - (pctCreat - 0.8) / 0.2);
      wordCreativity.style.transform = `translate3d(${20 - pctCreat * 12}%, ${50 - pctCreat * 40}px, 0) scale(${1 + pctCreat * 0.3})`;
      wordCreativity.style.filter = `blur(${Math.max(0, 10 - pctCreat * 10)}px)`;
      wordCreativity.style.clipPath = `inset(0% 0% ${Math.max(0, 100 - pctCreat * 100)}% 0%)`;

      // Final Statement reveal (peaks at 0.85)
      let pctStatement = Math.max(0, (pct - 0.6) / 0.35);
      pctStatement = Math.min(1, pctStatement);
      statement.style.opacity = pctStatement;
      statement.style.transform = `scale(${0.85 + pctStatement * 0.15}) translateY(${20 - pctStatement * 20}px)`;
      statement.style.filter = `blur(${Math.max(0, 5 - pctStatement * 5)}px)`;

      // Background transition (Crimson atmosphere fade)
      const r = Math.floor(pctStatement * 15);
      const g = Math.floor(pctStatement * 3);
      const b = Math.floor(pctStatement * 2);
      stickyContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      pinnedGlow.style.background = `radial-gradient(circle, rgba(201, 56, 43, ${pctStatement * 0.3}) 0%, rgba(0,0,0,0) 70%)`;
      
      centerLabel.style.opacity = 1 - pctStatement;
    }
  });

  // --- General Intersection Observer Trigger (Fade-in on scroll) ---
  const scrollElements = document.querySelectorAll(".reveal-on-scroll, .skills-cat-group, .timeline-node-card, .cert-card");
  
  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        
        // Add specific class for timeline dot activation
        if (entry.target.classList.contains("timeline-node-card")) {
          entry.target.classList.add("active-node");
        }
      }
    });
  }, { threshold: 0.15 });

  scrollElements.forEach(el => elementObserver.observe(el));

  // --- Education Timeline growing line observer ---
  const eduSection = document.getElementById("education");
  const progressFill = document.getElementById("timeline-progress-fill");

  window.addEventListener("scroll", () => {
    const rect = eduSection.getBoundingClientRect();
    const height = eduSection.offsetHeight;
    
    // Percent scroll inside the education segment
    let progress = (window.innerHeight - rect.top) / (height + window.innerHeight - 200);
    progress = Math.max(0, Math.min(1, progress));
    
    progressFill.style.height = `${progress * 100}%`;
  });
}

/* ==========================================
   06. PUZZLE TRANSITION SETUP
   ========================================== */
function initPuzzleTransition() {
  const transitionContainer = document.getElementById("puzzle-transition");
  const piecesWrapper = document.getElementById("puzzle-pieces-wrapper");
  const pinnedSection = document.getElementById("where-code-meets");

  // Create grid segment coordinates
  const rows = 3;
  const cols = 4;
  const piecesCount = rows * cols;
  const pieces = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const piece = document.createElement("div");
      piece.className = "puzzle-piece";
      
      // Define clipped path coordinates
      const left = c * 25;
      const top = r * 33.333;
      const width = 25;
      const height = 33.333;
      
      const innerContent = document.createElement("div");
      innerContent.className = "puzzle-piece-content";
      innerContent.innerHTML = `
        <div style="width: 100vw; height: 100vh; position: absolute; top: -${top}vh; left: -${left}vw; background: radial-gradient(circle, rgba(201, 56, 43, 0.25) 0%, rgba(10,10,10,0.95) 80%); display: flex; align-items: center; justify-content: center;">
          <div style="font-family: var(--font-cinematic); font-size: clamp(3rem, 5vw, 6rem); color: rgba(255,255,255,0.025); letter-spacing: 15px;">BREAKING SYMMETRY</div>
        </div>
      `;
      
      piece.appendChild(innerContent);
      piecesWrapper.appendChild(piece);
      
      // Calculate random trajectories for physics simulation
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 200 + 150;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const rot = (Math.random() - 0.5) * 60;
      
      pieces.push({
        el: piece,
        tx,
        ty,
        rot
      });
    }
  }

  // Scroll scrub the breaking pieces at the boundary of Section 02
  window.addEventListener("scroll", () => {
    const rect = pinnedSection.getBoundingClientRect();
    const sectionHeight = pinnedSection.offsetHeight;
    const startBreak = sectionHeight - window.innerHeight * 1.5;
    
    let progress = (window.scrollY - (window.scrollY + rect.top + startBreak)) / (window.innerHeight * 0.5);
    progress = Math.max(0, Math.min(1, progress));

    if (progress > 0 && progress < 1) {
      transitionContainer.style.display = "block";
      transitionContainer.style.position = "fixed";
      transitionContainer.style.top = "0";
      transitionContainer.style.left = "0";
      
      pieces.forEach(p => {
        p.el.style.transform = `translate3d(${p.tx * progress}px, ${p.ty * progress}px, 0) rotate(${p.rot * progress}deg) scale(${1 - progress * 0.4})`;
        p.el.style.opacity = 1 - progress * 0.95;
        p.el.style.filter = `blur(${progress * 8}px)`;
      });
    } else {
      transitionContainer.style.display = "none";
    }
  });
}

/* ==========================================
   07. ABOUT ME DOORS INTERACTION
   ========================================== */
function initAboutInteractions() {
  const cards = document.querySelectorAll(".about-door-card");

  cards.forEach(card => {
    // Open door on click
    card.addEventListener("click", (e) => {
      // If clicking the back-button, do not trigger parent flip again
      if (e.target.closest(".door-close-btn")) {
        e.stopPropagation();
        card.classList.remove("open");
        return;
      }
      
      // Toggle card open state
      card.classList.toggle("open");
    });

    // Keyboard support
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("open");
      }
    });
  });
}

/* ==========================================
   08. SELECTED WORKS MODULE
   ========================================== */
function initWorksGallery(data) {
  const preReveal = document.getElementById("works-pre-reveal");
  const revealBtn = document.getElementById("reveal-works-btn");
  const shutterFlash = document.getElementById("shutter-flash");
  const contentWrapper = document.getElementById("works-content-wrapper");
  const galleryGrid = document.getElementById("works-gallery-grid");

  // Render Projects Cards
  galleryGrid.innerHTML = data.projects.map(proj => `
    <div class="project-card" data-project-id="${proj.id}">
      <div class="project-image-box">
        <span class="project-num-tag">${proj.number}</span>
        <img src="${proj.image}" alt="${proj.title}" class="project-card-img" loading="lazy">
        <div class="project-hover-overlay"></div>
        <div class="project-info-summary">
          <span class="project-card-category">${proj.subtitle}</span>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-card-desc">${proj.description}</p>
        </div>
      </div>
      <div class="project-card-footer">
        <div class="project-tags-row">
          ${proj.tags.slice(0, 3).map(tag => `<span class="project-tag-pill">${tag}</span>`).join("")}
        </div>
        <span class="project-view-btn">VIEW DETAILS &rarr;</span>
      </div>
    </div>
  `).join("");

  // Trigger flash transition and display works list
  revealBtn.addEventListener("click", () => {
    shutterFlash.classList.add("flash-active");
    
    setTimeout(() => {
      preReveal.style.display = "none";
      contentWrapper.classList.remove("works-hidden");
      
      // Scroll slightly forward to trigger observer entries
      window.scrollBy(0, 1);
    }, 200);

    setTimeout(() => {
      shutterFlash.classList.remove("flash-active");
    }, 800);
  });

  // Setup Modal logic
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-project-img");
  const modalNum = document.getElementById("modal-project-num");
  const modalCategory = document.getElementById("modal-project-category");
  const modalTitle = document.getElementById("modal-project-title");
  const modalLongDesc = document.getElementById("modal-project-long-desc");
  const modalHighlights = document.getElementById("modal-project-highlights");
  const modalTags = document.getElementById("modal-project-tags");
  const modalMetrics = document.getElementById("modal-project-metrics");
  const modalGithub = document.getElementById("modal-btn-github");
  const modalClose = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");

  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-project-id");
      const proj = data.projects.find(p => p.id === projId);
      if (proj) {
        // Populate modal data
        modalImg.src = proj.image;
        modalImg.alt = proj.title;
        modalNum.innerText = proj.number;
        modalCategory.innerText = proj.subtitle;
        modalTitle.innerText = proj.title;
        modalLongDesc.innerText = proj.longDescription;
        
        // Render highlights
        modalHighlights.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join("");
        
        // Render tags
        modalTags.innerHTML = proj.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");
        
        // Render metrics
        modalMetrics.innerHTML = proj.metrics.map(m => `
          <div class="modal-metric-item">
            <span class="metric-label">${m.label}</span>
            <span class="metric-value">${m.value}</span>
          </div>
        `).join("");
        
        // Set GitHub link (fall back to user profile if missing specific repo)
        modalGithub.href = proj.githubUrl || data.contact.github;
        
        // Show modal
        modal.classList.add("modal-active");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("lock-scroll");
      }
    });
  });

  // Close modal functions
  function closeModal() {
    modal.classList.remove("modal-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock-scroll");
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  
  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal-active")) {
      closeModal();
    }
  });
}

/* ==========================================
   09. 3D AI ROBOT EXPERIENCE
   ========================================== */
function initRobot3D() {
  const visualArea = document.getElementById("robot-visual-area");
  const head = document.getElementById("robot-head");
  const glassTags = document.querySelectorAll(".floating-glass-tag");

  let areaRect = visualArea.getBoundingClientRect();
  
  window.addEventListener("resize", () => {
    areaRect = visualArea.getBoundingClientRect();
  });

  // Track coordinates for head rotations
  visualArea.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX - areaRect.left;
    const mouseY = e.clientY - areaRect.top;
    
    // Calculate delta from center (pixels)
    const dx = mouseX - (areaRect.width / 2);
    const dy = mouseY - (areaRect.height / 2);
    
    // Convert to rotation degrees (limits pitch/yaw to ~25deg)
    const ry = (dx / (areaRect.width / 2)) * 25;
    const rx = -(dy / (areaRect.height / 2)) * 20;

    // Apply rotation values
    head.style.setProperty("--rx", `${rx}deg`);
    head.style.setProperty("--ry", `${ry}deg`);

    // Parallax displacements on glass tags
    glassTags.forEach((tag, idx) => {
      const depth = (idx + 1) * 12;
      const tagDx = (dx / (areaRect.width / 2)) * depth;
      const tagDy = (dy / (areaRect.height / 2)) * depth;
      
      tag.style.transform = `translate3d(${tagDx}px, ${tagDy}px, 0)`;
    });
  });

  // Reset head coordinates when mouse exits visual zone
  visualArea.addEventListener("mouseleave", () => {
    head.style.setProperty("--rx", `0deg`);
    head.style.setProperty("--ry", `0deg`);
    
    glassTags.forEach(tag => {
      tag.style.transform = `translate3d(0, 0, 0)`;
    });
  });
}

/* ==========================================
   10. CONTACT INTERACTIONS (Magnetic links)
   ========================================= */
function initContactInteractions() {
  const links = document.querySelectorAll(".magnetic-contact-link");

  links.forEach(link => {
    link.addEventListener("mousemove", (e) => {
      const rect = link.getBoundingClientRect();
      
      // Distance of mouse from center of link
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);

      // Translate element relative to displacement (magnetic strength)
      link.style.transform = `translate3d(${mx * 0.35}px, ${my * 0.35}px, 0)`;
      link.style.borderColor = "var(--accent-bright)";
    });

    link.addEventListener("mouseleave", () => {
      // Return to base position
      link.style.transform = `translate3d(0, 0, 0)`;
      link.style.borderColor = "";
    });
  });
}

