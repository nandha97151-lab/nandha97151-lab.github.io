/* ================================================
   NANDHAKUMAR N — PORTFOLIO SCRIPT v2
   15 projects | Featured bento + Archive rows
   Horizontal journey timeline | Case study modal
   ================================================ */

'use strict';

/* ============ FEATURED PROJECTS ============ */
const FEATURED_PROJECTS = [
  {
    num: '01', code: 'KUTTY LABS', category: 'AI / ROBOTICS / AUTONOMOUS SYSTEMS',
    title: 'Kutty — Campus Delivery Robot', subtitle: 'Autonomous AI-powered robot that navigates college campuses.',
    overview: 'Kutty is a fully autonomous differential-drive delivery robot built for campus environments. It fuses LiDAR-based SLAM, computer vision, and A* pathfinding.',
    problem: 'Campus deliveries between departments are slow, manual, and error-prone.', solution: 'Built a custom robot on Raspberry Pi 5 + ESP32 with RPLiDAR.',
    architecture: ['Dashboard', 'Digital Campus Twin', 'A* Pathfinding', 'Robot Controller', 'Sensors'],
    features: ['Autonomous A* navigation', 'LiDAR SLAM', 'Campus digital twin integration', 'Live delivery tracking dashboard'],
    tags: ['Raspberry Pi 5', 'ESP32', 'RPLiDAR', 'Computer Vision', 'A* Algorithm', 'SLAM', 'Python', 'OpenCV'],
    thumb: 'assets/proj_kutty.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Kutty', span: 'span-8'
  },
  {
    num: '02', code: 'SECURE ID', category: 'BLOCKCHAIN / CYBERSECURITY',
    title: 'Blockchain Identity Platform', subtitle: 'Decentralized identity, access control, and secure voting.',
    overview: 'A blockchain-based platform combining decentralized identity (DID), role-based access control, smart contracts.',
    problem: 'Centralized identity systems are single points of failure.', solution: 'Built a decentralized system with verifiable on-chain identity.',
    architecture: ['Identity', 'Verification', 'Smart Contract', 'Permission', 'Blockchain', 'Asset / Vote'],
    features: ['Decentralized identity (DID)', 'Smart contract access control', 'Secure voting', 'Privacy-aware storage'],
    tags: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3.js', 'IPFS', 'Node.js', 'React'],
    thumb: 'assets/proj_blockchain.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Platform', span: 'span-4'
  },
  {
    num: '03', code: 'EDUVERSE', category: 'EDTECH / AI / WEB',
    title: 'EduVerse — Learning Platform', subtitle: 'Modern AI-powered education platform with adaptive courses.',
    overview: 'EduVerse is a full-stack edtech platform featuring course management, adaptive quizzes, an AI study assistant.',
    problem: 'Students lack a unified platform that combines structured learning and AI tutoring.', solution: 'Built a multi-module platform with React frontend and Node.js backend.',
    architecture: ['Student', 'Course', 'AI Assistant', 'Quiz', 'Analytics', 'Progress'],
    features: ['Adaptive course tracking', 'Interactive quiz system', 'AI study assistant', 'Progress analytics'],
    tags: ['React', 'Node.js', 'Python', 'NLP', 'MongoDB', 'FastAPI', 'Chart.js'],
    thumb: 'assets/proj_eduverse.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Platform', span: 'span-6'
  },
  {
    num: '04', code: 'SMART CAMPUS', category: 'WEB / MANAGEMENT',
    title: 'Smart Campus Portal', subtitle: 'Connected digital campus management.',
    overview: 'A unified campus management portal that digitizes attendance tracking, timetable management, event coordination, and academic notices.',
    problem: 'Campus management relies on fragmented systems and physical notices.', solution: 'Developed a unified dashboard unifying student, faculty, and admin data.',
    architecture: ['Student', 'Portal', 'Services', 'Campus Data'],
    features: ['Attendance tracking', 'Timetable management', 'Event coordination', 'Academic notices'],
    tags: ['React', 'Node.js', 'MongoDB'],
    thumb: 'assets/proj_campus_1790479280224.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Portal', span: 'span-6'
  },
  {
    num: '05', code: 'E-COMMERCE', category: 'WEB / E-COMMERCE',
    title: 'E-Commerce Platform', subtitle: 'Modern digital shopping experience with product browsing and admin dashboard.',
    overview: 'A full-stack e-commerce platform with product categories, search, filters, shopping cart, payment integration, order tracking, and an admin inventory dashboard.',
    problem: 'Businesses need scalable online stores with seamless payment and inventory.', solution: 'Built a responsive React/Node app utilizing Stripe for secure payments.',
    architecture: ['Discover', 'Product', 'Cart', 'Checkout', 'Order'],
    features: ['Product browsing', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    thumb: 'assets/proj_ecommerce_1790479293551.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Store', span: 'span-4'
  },
  {
    num: '06', code: 'SMART AGRI', category: 'AI / IOT / AGRICULTURE',
    title: 'Smart Agriculture System', subtitle: 'Data-driven IoT agriculture with crop monitoring.',
    overview: 'A smart agriculture system that collects soil moisture, temperature, and humidity data from IoT sensors, then uses ML models to generate crop-specific recommendations.',
    problem: 'Traditional farming lacks real-time, data-driven soil and environment monitoring.', solution: 'Deployed IoT nodes communicating with a central ML engine for crop predictions.',
    architecture: ['Sensors', 'Data', 'Analysis', 'Recommendation', 'Farmer'],
    features: ['Soil monitoring', 'Temperature tracking', 'ML Crop Recommendations', 'Live Dashboard'],
    tags: ['Python', 'IoT', 'MQTT', 'TensorFlow', 'React'],
    thumb: 'assets/proj_agri_1790479309851.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore System', span: 'span-8'
  },
  {
    num: '07', code: 'SMART PARKING', category: 'AI / IOT / SMART CITY',
    title: 'Smart Parking System', subtitle: 'Intelligent parking slot detection and reservation.',
    overview: 'A camera-based parking management system that detects occupied/vacant slots using computer vision and allows users to reserve slots via a web interface.',
    problem: 'Finding vacant parking in busy cities causes traffic and wasted fuel.', solution: 'Implemented an overhead CV model to map spaces and update a live reservation app.',
    architecture: ['Vehicle', 'Detection', 'Slot Availability', 'Reservation', 'Parking'],
    features: ['Computer Vision slot detection', 'Real-time availability', 'Mobile reservation app', 'Analytics'],
    tags: ['Python', 'OpenCV', 'IoT', 'React', 'Flask'],
    thumb: 'assets/proj_parking_1790479321897.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Parking', span: 'span-7'
  },
  {
    num: '08', code: 'HOSPITAL MGMT', category: 'SOFTWARE / MANAGEMENT',
    title: 'Hospital Management System', subtitle: 'Digital hospital management — patients, doctors, records.',
    overview: 'A comprehensive hospital management system built in Java covering patient registration, doctor scheduling, appointment management, medical records, and billing.',
    problem: 'Paper-based medical records and manual scheduling lead to inefficiencies.', solution: 'Engineered a secure Java-based desktop client for end-to-end administration.',
    architecture: ['Patient', 'Appointment', 'Doctor', 'Record', 'Billing'],
    features: ['Patient Registration', 'Doctor Scheduling', 'Medical Records', 'Billing generation'],
    tags: ['Java', 'MySQL', 'JavaFX'],
    thumb: 'assets/proj_hospital_1790479373830.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore System', span: 'span-5'
  },
  {
    num: '09', code: 'SMART BILLING', category: 'WEB / BUSINESS',
    title: 'Smart Billing System', subtitle: 'Shopkeeper POS with inventory and Tamil language support.',
    overview: 'A point-of-sale and inventory management system for small businesses. Supports Tamil product names, barcode scanning, inventory tracking, and sales reports.',
    problem: 'Local shopkeepers struggle with English-only POS software and manual accounting.', solution: 'Developed a localized bilingual POS with offline-first capabilities.',
    architecture: ['Product', 'Cart', 'Bill', 'Payment', 'Inventory'],
    features: ['Tamil language support', 'Barcode scanning', 'Inventory tracking', 'Sales analytics'],
    tags: ['React', 'Node.js', 'SQLite', 'Electron'],
    thumb: 'assets/proj_billing_1790479387801.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore POS', span: 'span-4'
  },
  {
    num: '10', code: 'AI CHATBOT', category: 'AI / NLP / WEB',
    title: 'AI Chatbot Assistant', subtitle: 'Conversational AI interface with NLP response generation.',
    overview: 'A modern chatbot interface powered by a fine-tuned transformer model. Features conversation history, context management, and a futuristic UI with real-time response streaming.',
    problem: 'Static FAQs lack contextual awareness and natural conversation flow.', solution: 'Integrated a fine-tuned Transformer model wrapped in a high-performance FastAPI backend.',
    architecture: ['User', 'Input', 'AI Processing', 'Response'],
    features: ['Context management', 'Real-time response streaming', 'Transformer NLP', 'Custom personality tuning'],
    tags: ['Python', 'Transformers', 'FastAPI', 'React'],
    thumb: 'assets/proj_nav_bot.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Chatbot', span: 'span-4'
  },
  {
    num: '11', code: 'VISION TRACK', category: 'COMPUTER VISION / AI / YOLO',
    title: 'AI Real-Time Object Tracker', subtitle: 'Multi-class object detection and spatial trajectory tracking with YOLOv8 & OpenCV.',
    overview: 'A real-time computer vision system that tracks multiple moving entities with YOLOv8, maintains stable trajectory IDs via Kalman filtering, and overlays analytics.',
    problem: 'Camera surveillance feeds require automated high-accuracy object localization and velocity tracking.', solution: 'Deployed a YOLOv8 and OpenCV pipeline capable of real-time multi-target tracking at 30+ FPS.',
    architecture: ['Video Feed', 'YOLOv8 Detector', 'Kalman Tracker', 'Trajectory Engine', 'Visual Dashboard'],
    features: ['Multi-class object detection', 'Kalman filter trajectory smoothing', 'Real-time FPS telemetry', 'Bounding-box ID persistence'],
    tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
    thumb: 'assets/proj_object_tracker.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Vision', span: 'span-4'
  },
  {
    num: '12', code: 'RESUME AI', category: 'AI / NLP / RECRUITING TECH',
    title: 'AI Resume Analyzer & Parser', subtitle: 'Automated CV analysis, skill extraction, and candidate-job matching engine.',
    overview: 'An intelligent document processing platform that parses PDF/DOCX resumes, extracts key skills, experience, and educational background, and calculates job match scores.',
    problem: 'Recruiters spend countless hours manually filtering hundreds of unstructured resumes.', solution: 'Built an automated NLP pipeline using spaCy and TF-IDF semantic embeddings to rank applicant fit score.',
    architecture: ['Document Upload', 'Text Extractor', 'spaCy NER', 'Skill Matcher', 'Analytics Report'],
    features: ['Automated PDF/DOCX extraction', 'Skill entity recognition', 'Semantic job fit scoring', 'Comparative dashboard'],
    tags: ['Python', 'spaCy', 'FastAPI', 'React'],
    thumb: 'assets/proj_resume_ai.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Resume AI', span: 'span-6'
  },
  {
    num: '13', code: 'SOLAR IOT', category: 'ROBOTICS / IOT / CLEAN ENERGY',
    title: 'IoT Dual-Axis Solar Tracker', subtitle: 'Smart dual-axis solar tracking system maximizing photovoltaic power generation.',
    overview: 'An embedded dual-axis tracking device with light-dependent resistors and high-torque servo motors controlled by an Arduino microcontroller to track the sun path in real-time.',
    problem: 'Fixed solar panels suffer massive efficiency drops when the sun moves away from perpendicular.', solution: 'Engineered a dual-axis robotic mount that continuously realigns to maximum lux levels, increasing efficiency by ~30%.',
    architecture: ['LDR Sensors', 'Arduino Controller', 'Servo Motors', 'Solar Panel', 'IoT Telemetry'],
    features: ['Dual-axis servo tracking', 'Real-time lux gradient sensing', 'IoT energy generation logging', 'Overheat & storm protection'],
    tags: ['Arduino', 'C++', 'IoT', 'Sensors', 'ESP32'],
    thumb: 'assets/proj_solar_tracker.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Solar', span: 'span-6'
  },
  {
    num: '14', code: 'AIR DRAWING', category: 'COMPUTER VISION / GESTURE AI',
    title: 'Air Drawing AI — Hand Canvas', subtitle: 'Touchless virtual drawing canvas using webcam hand gesture tracking.',
    overview: 'A real-time webcam gesture interaction system that tracks 21 hand landmarks using MediaPipe and OpenCV, enabling users to draw, erase, and select colors in mid-air.',
    problem: 'Interactive whiteboard systems rely on expensive touch hardware or digital styluses.', solution: 'Built a touchless computer vision canvas with real-time finger gesture state recognition and trajectory smoothing.',
    architecture: ['Webcam Stream', 'MediaPipe Hands', 'Gesture Engine', 'Virtual Canvas', 'Display Overlay'],
    features: ['21-point hand landmark tracking', 'Dynamic color selection & erase mode', 'Trajectory stroke smoothing', 'Real-time 45+ FPS processing'],
    tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    thumb: 'assets/proj_air_drawing.jpg', github: 'https://github.com/nandha97151-lab', cta: 'Explore Air Draw', span: 'span-8'
  },
  {
    num: '15', code: 'PORTFOLIO 2.0', category: 'WEB / CREATIVE DEVELOPMENT',
    title: 'Portfolio 2.0 — Dark-Tech Identity', subtitle: 'Cinematic personal portfolio with Three.js particle canvas and dark-tech identity.',
    overview: 'A modern developer portfolio built from scratch with pure HTML5, CSS3, and vanilla JavaScript. Features a Three.js 3D neural core, custom physics cursor, GSAP interactions, and case study modals.',
    problem: 'Standard developer templates feel generic and lack distinctive engineering brand identity.', solution: 'Created a custom dark-tech aesthetic portfolio with custom WebGL canvas, bento layout, and interactive modal system.',
    architecture: ['Three.js Neural Core', 'GSAP ScrollTrigger', 'Bento Architecture', 'Modal System', 'Vanilla JS Engine'],
    features: ['3D WebGL neural core', 'Spring-physics cursor', 'Responsive bento layout', 'Complete case study modal system'],
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Three.js', 'GSAP'],
    thumb: 'assets/proj_portfolio.jpg', github: 'https://github.com/nandha97151-lab/nandha97151-lab.github.io', cta: 'Explore Portfolio', span: 'span-4'
  }
];

/* ============ SKILLS ============ */
const SKILL_CATEGORIES = [
  { name: 'Machine Learning & AI', skills: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'SHAP', 'Pandas', 'NumPy'] },
  { name: 'Computer Vision', skills: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Roboflow', 'Detectron2'] },
  { name: 'Robotics & Embedded', skills: ['ROS2', 'SLAM', 'A* Pathfinding', 'Raspberry Pi 5', 'ESP32', 'Arduino', 'RPLiDAR'] },
  { name: 'Blockchain & Security', skills: ['Solidity', 'Web3.js', 'IPFS', 'Smart Contracts', 'DID', 'Cryptography'] },
  { name: 'Web Development', skills: ['React', 'Node.js', 'FastAPI', 'Flask', 'HTML5', 'CSS3', 'JavaScript'] },
  { name: 'Data & Tools', skills: ['SQL', 'MongoDB', 'Jupyter', 'Docker', 'Git', 'Linux', 'Matplotlib', 'Seaborn'] },
];

/* ============ JOURNEY ============ */
const JOURNEY_STEPS = [
  {
    year: '2022–2023',
    badge: 'SSLC',
    title: 'SSLC',
    place: 'Vethaloga Vidhyalaya Matriculation Higher Secondary School',
    desc: 'Completed secondary education with strong fundamentals in mathematics and science. Developed early algorithmic problem-solving interest.',
    accent: false,
  },
  {
    year: '2023–2025',
    badge: 'HSC',
    title: 'HSC',
    place: 'Little Angel Higher Secondary School',
    desc: 'Completed higher secondary education in Physics, Chemistry, Mathematics, and Computer Science. Initiated hands-on coding and software development.',
    accent: false,
  },
  {
    year: '2025–2029',
    badge: 'B.TECH AI & DS',
    title: 'B.Tech AI & Data Science',
    place: 'KPR College of Engineering and Technology',
    desc: 'Pursuing undergraduate degree in Artificial Intelligence & Data Science. Deep focus on machine learning algorithms, deep neural nets, and data architecture.',
    accent: true,
  },
  {
    year: '2026–Present',
    badge: 'INNOVATION',
    title: 'Building AI, Data Science, Web & Robotics Projects',
    place: 'Autonomous Systems & Applied Engineering',
    desc: 'Engineering autonomous campus delivery robots (KUTTY), blockchain trust platforms, computer vision applications, and full-stack software.',
    accent: true,
  },
];

/* ===================================================
   CURSOR
=================================================== */
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;
  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function tick() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(tick);
  }
  tick();
  document.querySelectorAll('a,button,.work-card,.archive-row').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ===================================================
   NAV
=================================================== */
function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    mobileNav.classList.toggle('open');
    mobileNav.setAttribute('aria-hidden', expanded);
  });
  document.querySelectorAll('.mobile-link').forEach(l => {
    l.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ===================================================
   HERO CANVAS (THREE.JS)
=================================================== */
function initThreeCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Neural Core geometry
  const geometry = new THREE.IcosahedronGeometry(2, 3);

  // Create points
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0xc9382b,
    size: 0.03,
    transparent: true,
    opacity: 0.8
  });
  const points = new THREE.Points(geometry, pointsMaterial);

  // Create wireframe connecting the nodes
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xc9382b,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const wire = new THREE.Mesh(geometry, wireMaterial);

  const group = new THREE.Group();
  group.add(points);
  group.add(wire);

  // Add some ambient particles
  const particleGeo = new THREE.BufferGeometry();
  const particleCount = 200;
  const posArray = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.02, color: 0xc9382b, transparent: true, opacity: 0.4 });
  const particlesMesh = new THREE.Points(particleGeo, pMat);
  group.add(particlesMesh);

  scene.add(group);
  camera.position.z = 6;
  group.position.x = 2; // Shift right to balance hero text

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2);
  });

  let frame;
  const clock = new THREE.Clock();

  function animate() {
    frame = requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    group.rotation.y += 0.002;
    group.rotation.x += 0.001;

    // Neural core breathing effect
    const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
    points.scale.set(scale, scale, scale);
    wire.scale.set(scale, scale, scale);

    // Parallax mouse movement
    group.rotation.x += 0.05 * (targetY - group.rotation.x);
    group.rotation.y += 0.05 * (targetX - group.rotation.y);

    // Float effect
    group.position.y = Math.sin(elapsedTime) * 0.2;

    particlesMesh.rotation.y = -elapsedTime * 0.05;

    renderer.render(scene, camera);
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animate(); }
    else { cancelAnimationFrame(frame); }
  }, { threshold: 0 });
  observer.observe(canvas);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });
}

/* ===================================================
   SCROLL REVEAL
=================================================== */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up:not(.in-view)');
  if (!els.length) return;
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });
  els.forEach(el => io.observe(el));
}

/* ===================================================
   FEATURED WORKS BENTO (All 15 Projects)
=================================================== */
function buildWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  grid.innerHTML = '';
  FEATURED_PROJECTS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = `work-card ${p.span} reveal-up`;
    card.style.setProperty('--d', i % 3);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${p.title}`);

    card.innerHTML = `
      <div class="work-thumb-wrap">
        <img src="${p.thumb}" alt="${p.title}" class="work-thumb" loading="${i < 6 ? 'eager' : 'lazy'}" decoding="async"
          onerror="this.style.display='none';this.parentElement.querySelector('.work-thumb-fallback').style.display='flex'">
        <div class="work-thumb-fallback" style="display:none;position:absolute;inset:0;background:linear-gradient(135deg,#1a0a0a 0%,#0d1117 50%,#0c0c0e 100%);align-items:center;justify-content:center;flex-direction:column;gap:0.5rem;">
          <span style="font-family:var(--f-mono);font-size:28px;color:rgba(201,56,43,0.4);">${p.num}</span>
          <span style="font-family:var(--f-mono);font-size:9px;letter-spacing:0.2em;color:rgba(201,56,43,0.5);text-transform:uppercase;">${p.code}</span>
        </div>
        <div class="work-thumb-overlay"></div>
      </div>
      <div class="work-body">
        <div class="work-body-top">
          <span class="work-num">${p.num}</span>
          <span class="work-code">${p.code}</span>
        </div>
        <span class="work-category">${p.category}</span>
        <h3 class="work-title">${p.title}</h3>
        <p class="work-desc">${p.subtitle}</p>
        <div class="work-card-center-icon">
          <div class="work-center-dot"></div>
        </div>
        <div class="work-footer">
          <div class="work-tags">${p.tags.slice(0, 4).map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
          <span class="work-cta-hint">${p.cta} &rarr;</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p, 'featured'));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(p, 'featured'); });
    grid.appendChild(card);
  });

  initReveal();
}

/* ===================================================
   ARCHIVE ROWS (Removed)
=================================================== */

/* ===================================================
   MODAL
=================================================== */
function initModal() {
  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;
  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

function openModal(project, type) {
  const modal = document.getElementById('project-modal');
  const numEl = document.getElementById('modal-num');
  const catEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const subEl = document.getElementById('modal-subtitle');
  const tagsEl = document.getElementById('modal-tags');
  const actionsEl = document.getElementById('modal-actions');
  const visualEl = document.getElementById('modal-visual');
  const csEl = document.getElementById('cs-sections');

  numEl.textContent = `${project.num}`;
  catEl.textContent = project.category;
  titleEl.textContent = project.title;
  subEl.textContent = project.subtitle || '';

  // Thumb — always show fallback behind, fade in image on load
  visualEl.innerHTML = `
    <div class="modal-img-fallback">
      <span class="modal-img-fallback-num">${project.num}</span>
      <span class="modal-img-fallback-code">${project.code}</span>
    </div>
    ${project.thumb ? `<img src="${project.thumb}" alt="${project.title}" class="modal-img" onload="this.classList.add('loaded')">` : ''}
  `;

  // Case study body
  csEl.innerHTML = `
    <div class="cs-block">
      <h4 class="cs-label">Overview</h4>
      <p class="cs-text">${project.overview || ''}</p>
    </div>
    ${project.problem ? `
    <div class="cs-block">
      <h4 class="cs-label">Problem</h4>
      <p class="cs-text">${project.problem}</p>
    </div>
    <div class="cs-block">
      <h4 class="cs-label">Solution</h4>
      <p class="cs-text">${project.solution || ''}</p>
    </div>` : ''}
    ${project.architecture ? `
    <div class="cs-block">
      <h4 class="cs-label">Architecture</h4>
      <div class="cs-arch">
        ${project.architecture.map((node, idx) => `
          <span class="cs-arch-node">${node}</span>
          ${idx < project.architecture.length - 1 ? '<span class="cs-arch-arrow" aria-hidden="true">&#8594;</span>' : ''}
        `).join('')}
      </div>
    </div>` : ''}
    ${project.features ? `
    <div class="cs-block">
      <h4 class="cs-label">Key Features</h4>
      <ul class="cs-features">
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>` : ''}
  `;

  // Tags
  tagsEl.innerHTML = project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  // Actions
  const ctaLabel = (type === 'featured' && project.num === '15') ? 'You Are Here' : 'View on GitHub';
  actionsEl.innerHTML = `
    <a href="${project.github || 'https://github.com/nandha97151-lab'}" class="btn btn-primary modal-btn" target="_blank" rel="noopener">${ctaLabel}</a>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ===================================================
   SKILLS
=================================================== */
function buildSkills() {
  const flow = document.getElementById('skills-flow');
  if (!flow) return;
  SKILL_CATEGORIES.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'skill-category';
    section.innerHTML = `
      <div class="skill-cat-header">
        <span class="skill-cat-name">${cat.name}</span>
        <span class="skill-cat-count mono-sm">${String(cat.skills.length).padStart(2, '0')}</span>
      </div>
      <div class="skill-pills">
        ${cat.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    `;
    flow.appendChild(section);
  });
}

/* ===================================================
   JOURNEY TIMELINE (Vertical Stack)
=================================================== */
function buildJourney() {
  const container = document.getElementById('journey-timeline');
  if (!container) return;

  container.innerHTML = '';
  JOURNEY_STEPS.forEach((step, idx) => {
    const isLast = idx === JOURNEY_STEPS.length - 1;
    const el = document.createElement('div');
    el.className = `journey-step${step.accent ? ' accent' : ''} reveal-up`;
    el.style.setProperty('--d', idx);

    el.innerHTML = `
      <div class="j-step-left">
        <div class="j-year">${step.year}</div>
        <div class="j-badge">${step.badge}</div>
      </div>
      <div class="j-step-spine" aria-hidden="true">
        <div class="j-dot"></div>
        <div class="j-line"></div>
        ${!isLast ? '<div class="j-arrow-down">&darr;</div>' : ''}
      </div>
      <div class="j-step-card">
        <div class="j-mobile-meta">
          <span class="j-year">${step.year}</span>
          <span class="j-badge">${step.badge}</span>
        </div>
        <h3 class="j-card-title">${step.title}</h3>
        <span class="j-card-place">${step.place}</span>
        <p class="j-card-desc">${step.desc}</p>
      </div>
    `;
    container.appendChild(el);
  });
}


/* ===================================================
   HERO NAME ANIMATION
=================================================== */
function initHeroName() {
  const lines = document.querySelectorAll('.hero-name-line');
  if (!lines.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(40px) skewX(-4deg)';
    line.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.12}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.12}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateY(0) skewX(0)';
    }));
  });
}

/* ===================================================
   SMOOTH ANCHOR SCROLL
=================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ===================================================
   BACK TO TOP
=================================================== */
function initBackTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===================================================
   AWWWARDS EXPERIENCE (GSAP + LENIS + PRELOADER)
=================================================== */
function initAwwwards() {
  // Lenis Smooth Scroll
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // Preloader Sequence
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline();

    const counterObj = { val: 0 };
    tl.to(counterObj, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        const counterEl = document.querySelector('.preloader-counter');
        if (counterEl) counterEl.textContent = Math.floor(counterObj.val);
      }
    }, 0);

    tl.to('.preloader-text span', {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    }, 0);

    tl.to('.preloader', {
      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
      duration: 1,
      ease: 'power4.inOut',
      delay: 0.5
    });

    tl.add(initHeroName, '-=0.5');
  } else {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
    initHeroName();
  }

  // Currently Building Parallax & Magnetic Button
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.to('.word-track:not(.reverse)', {
      xPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.currently-building',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });
    gsap.to('.word-track.reverse', {
      xPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.currently-building',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });

    const magneticBtn = document.getElementById('magnetic-contact');
    if (magneticBtn) {
      const text = magneticBtn.querySelector('.magnetic-btn-text');
      magneticBtn.addEventListener('mousemove', (e) => {
        const rect = magneticBtn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
        gsap.to(magneticBtn, { x, y, duration: 0.5, ease: 'power2.out' });
        if (text) gsap.to(text, { x: x * 0.5, y: y * 0.5, duration: 0.5, ease: 'power2.out' });
      });
      magneticBtn.addEventListener('mouseleave', () => {
        gsap.to(magneticBtn, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
        if (text) gsap.to(text, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
      });
    }
  }
}

/* ===================================================
   INIT
=================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initThreeCanvas();
  initReveal();
  initSmoothScroll();
  buildWorks();
  buildSkills();
  buildJourney();
  initModal();
  initBackTop();
  initAwwwards();
});
