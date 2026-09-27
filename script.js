/* ================================================
   NANDHAKUMAR N — PORTFOLIO SCRIPT v2
   15 projects | Featured bento + Archive rows
   Horizontal journey timeline | Case study modal
   ================================================ */

'use strict';

/* ============ FEATURED PROJECTS ============ */
const FEATURED_PROJECTS = [
  {
    num: '01',
    code: 'KUTTY LABS',
    category: 'AI / ROBOTICS / AUTONOMOUS SYSTEMS',
    title: 'Kutty — Campus Delivery Robot',
    subtitle: 'Autonomous AI-powered robot that navigates college campuses and delivers items between designated locations.',
    overview: 'Kutty is a fully autonomous differential-drive delivery robot built for campus environments. It fuses LiDAR-based SLAM, computer vision, and A* pathfinding to navigate between pickup and drop points without any manual control.',
    problem: 'Campus deliveries between departments are slow, manual, and error-prone. There was no scalable, autonomous solution for indoor/outdoor campus logistics.',
    solution: 'Built a custom robot on Raspberry Pi 5 + ESP32 with RPLiDAR, ultrasonic, IR sensors, and a camera. A* pathfinding runs over a digital twin of the campus. A web dashboard provides real-time tracking and task dispatching.',
    architecture: ['Dashboard', 'Digital Campus Twin', 'A* Pathfinding', 'Robot Controller', 'Sensors'],
    features: ['Autonomous A* navigation with real-time replanning', 'LiDAR SLAM for dynamic map generation', 'Campus digital twin integration', 'Live delivery tracking dashboard', 'Multi-sensor fusion (LiDAR, Ultrasonic, IR, IMU)','Computer vision for obstacle and landmark detection'],
    tags: ['Raspberry Pi 5', 'ESP32', 'RPLiDAR', 'Computer Vision', 'A* Algorithm', 'SLAM', 'Python', 'OpenCV'],
    thumb: 'assets/proj_kutty.jpg',
    github: 'https://github.com/nandha97151-lab',
    cta: 'Explore Kutty',
    span: 'span-8',
  },
  {
    num: '02',
    code: 'SECURE ID',
    category: 'BLOCKCHAIN / CYBERSECURITY',
    title: 'Blockchain Identity Platform',
    subtitle: 'Decentralized identity, access control, digital asset management, and secure voting on a single chain.',
    overview: 'A blockchain-based platform combining decentralized identity (DID), role-based access control, smart contracts, and a fake-vote prevention voting system. Sensitive data stays off-chain; only hashes, proofs, and permissions live on-chain.',
    problem: 'Centralized identity systems are single points of failure. Digital voting is vulnerable to duplication and fraud. Asset ownership lacks trustless verification.',
    solution: 'Built a decentralized system where each user has a verifiable on-chain identity. Smart contracts enforce RBAC/ABAC permissions. Voting enforces one verified person = one valid vote using ZK-proof concepts.',
    architecture: ['Identity', 'Verification', 'Smart Contract', 'Permission', 'Blockchain', 'Asset / Vote'],
    features: ['Decentralized identity (DID)', 'Smart contract access control (RBAC/ABAC)', 'Digital asset ownership and transfer', 'Secure voting with duplicate prevention', 'Off-chain sensitive data, on-chain proofs', 'Privacy-aware data storage'],
    tags: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3.js', 'IPFS', 'Node.js', 'React'],
    thumb: 'assets/proj_blockchain.jpg',
    github: 'https://github.com/nandha97151-lab',
    cta: 'Explore Platform',
    span: 'span-4',
  },
  {
    num: '03',
    code: 'EDUVERSE',
    category: 'EDTECH / AI / WEB',
    title: 'EduVerse — Learning Platform',
    subtitle: 'Modern AI-powered education platform with adaptive courses, quizzes, and intelligent study assistance.',
    overview: 'EduVerse is a full-stack edtech platform featuring course management, adaptive quizzes, an AI study assistant, a progress analytics dashboard, and separate teacher and student panels.',
    problem: 'Students lack a unified platform that combines structured learning, adaptive feedback, AI tutoring, and performance tracking in one place.',
    solution: 'Built a multi-module platform with React frontend and Node.js backend. AI study assistant answers course-specific queries. Progress analytics uses completion data and quiz performance to generate study recommendations.',
    architecture: ['Student', 'Course', 'AI Assistant', 'Quiz', 'Analytics', 'Progress'],
    features: ['Adaptive course tracking and completion', 'Interactive quiz system with instant feedback', 'AI study assistant (NLP-powered)', 'Progress analytics and study planning', 'Leaderboard and gamification', 'Separate teacher and student dashboards','Notes and resource management'],
    tags: ['React', 'Node.js', 'Python', 'NLP', 'MongoDB', 'FastAPI', 'Chart.js'],
    thumb: 'assets/proj_eduverse.jpg',
    github: 'https://github.com/nandha97151-lab',
    cta: 'Explore Platform',
    span: 'span-6',
  },
  {
    num: '15',
    code: 'PORTFOLIO 2.0',
    category: 'WEB / CREATIVE DEVELOPMENT',
    title: 'Portfolio 2.0',
    subtitle: 'Cinematic personal portfolio with scroll-driven storytelling, particle canvas, and interactive project showcase.',
    overview: 'This portfolio itself is a project — built with pure HTML, CSS, and vanilla JavaScript. No frameworks. Features a particle canvas with connection lines, custom cursor with spring physics, IntersectionObserver scroll reveals, bento grid layouts, and full case study modals.',
    problem: 'Most developer portfolios look templated and generic. The design should feel as precise and intentional as the engineering behind it.',
    solution: 'Developed a complete cinematic dark-tech identity. Every section has its own layout logic. The JS is modular and data-driven. All animation is performance-first using CSS transitions and IntersectionObserver.',
    architecture: ['Design System', 'Component Layout', 'Scroll Reveal', 'Modal System', 'Canvas Particles'],
    features: ['Particle canvas with dynamic connection lines', 'Custom spring-physics cursor', 'Bento-grid project section', 'Full case study modal for each project', 'Horizontal scroll journey timeline', 'WCAG-compliant + reduced-motion support'],
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'IntersectionObserver', 'Canvas API', 'CSS Grid'],
    thumb: 'assets/proj_portfolio.jpg',
    github: 'https://github.com/nandha97151-lab/nandha97151-lab.github.io',
    cta: 'You Are Here',
    span: 'span-6',
  },
];

/* ============ ARCHIVE PROJECTS ============ */
const ARCHIVE_PROJECTS = [
  {
    num: '04', title: 'Smart Campus Portal',
    subtitle: 'Connected digital campus management — attendance, timetable, events, assignments, and notices.',
    category: 'WEB / MANAGEMENT',
    tags: ['React', 'Node.js', 'MongoDB'],
    architecture: ['Student', 'Portal', 'Services', 'Campus Data'],
    overview: 'A unified campus management portal that digitizes attendance tracking, timetable management, event coordination, and academic notices for students and faculty.',
    thumb: '',
  },
  {
    num: '05', title: 'E-Commerce Platform',
    subtitle: 'Modern digital shopping experience with product browsing, cart, checkout, orders, and admin dashboard.',
    category: 'WEB / E-COMMERCE',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    architecture: ['Discover', 'Product', 'Cart', 'Checkout', 'Order'],
    overview: 'A full-stack e-commerce platform with product categories, search, filters, shopping cart, payment integration, order tracking, and an admin inventory dashboard.',
    thumb: '',
  },
  {
    num: '06', title: 'Smart Agriculture System',
    subtitle: 'Data-driven IoT agriculture with crop monitoring, soil data, and smart recommendations.',
    category: 'AI / IOT / AGRICULTURE',
    tags: ['Python', 'IoT', 'MQTT', 'TensorFlow', 'React'],
    architecture: ['Sensors', 'Data', 'Analysis', 'Recommendation', 'Farmer'],
    overview: 'A smart agriculture system that collects soil moisture, temperature, and humidity data from IoT sensors, then uses ML models to generate crop-specific recommendations.',
    thumb: '',
  },
  {
    num: '07', title: 'Smart Parking System',
    subtitle: 'Intelligent parking slot detection, reservation, and real-time availability dashboard.',
    category: 'AI / IOT / SMART CITY',
    tags: ['Python', 'OpenCV', 'IoT', 'React', 'Flask'],
    architecture: ['Vehicle', 'Detection', 'Slot Availability', 'Reservation', 'Parking'],
    overview: 'A camera-based parking management system that detects occupied/vacant slots using computer vision and allows users to reserve slots via a web interface.',
    thumb: '',
  },
  {
    num: '08', title: 'Hospital Management System',
    subtitle: 'Digital hospital management — patients, doctors, appointments, records, and billing.',
    category: 'SOFTWARE / MANAGEMENT',
    tags: ['Java', 'MySQL', 'JavaFX'],
    architecture: ['Patient', 'Appointment', 'Doctor', 'Record', 'Billing'],
    overview: 'A comprehensive hospital management system built in Java covering patient registration, doctor scheduling, appointment management, medical records, and billing.',
    thumb: '',
  },
  {
    num: '09', title: 'Smart Billing System',
    subtitle: 'Shopkeeper POS with product management, billing, inventory, and Tamil product name support.',
    category: 'WEB / BUSINESS',
    tags: ['React', 'Node.js', 'SQLite', 'Electron'],
    architecture: ['Product', 'Cart', 'Bill', 'Payment', 'Inventory'],
    overview: 'A point-of-sale and inventory management system for small businesses. Supports Tamil product names, barcode scanning, inventory tracking, and sales reports.',
    thumb: '',
  },
  {
    num: '10', title: 'AI Chatbot Assistant',
    subtitle: 'Intelligent conversational AI interface with NLP response generation and conversation history.',
    category: 'AI / NLP / WEB',
    tags: ['Python', 'Transformers', 'FastAPI', 'React'],
    architecture: ['User', 'Input', 'AI Processing', 'Response'],
    overview: 'A modern chatbot interface powered by a fine-tuned transformer model. Features conversation history, context management, and a futuristic UI with real-time response streaming.',
    thumb: '',
  },
  {
    num: '11', title: 'Smart Travel Planner',
    subtitle: 'Intelligent travel planning — itinerary, places, activities, budget, and schedule in one dashboard.',
    category: 'WEB / PLANNING',
    tags: ['React', 'Google Maps API', 'Node.js', 'MongoDB'],
    architecture: ['Destination', 'Plan', 'Explore', 'Itinerary', 'Trip'],
    overview: 'A travel planning web app that combines interactive maps, itinerary builder, activity suggestions, and budget tracking to help users plan and organize trips end-to-end.',
    thumb: '',
  },
  {
    num: '12', title: 'Smart Calculator',
    subtitle: 'Minimal interactive calculator with arithmetic operations, keyboard support, and calculation history.',
    category: 'WEB / JAVASCRIPT',
    tags: ['HTML', 'CSS', 'Vanilla JS'],
    architecture: ['Input', 'Expression', 'Evaluate', 'History'],
    overview: 'A beautifully designed, keyboard-accessible calculator with animated interactions, calculation history panel, and responsive layout. A minimal project with premium polish.',
    thumb: '',
  },
  {
    num: '13', title: 'Lost & Found System',
    subtitle: 'Java-based management system for registering, searching, and matching lost and found items.',
    category: 'JAVA / MANAGEMENT',
    tags: ['Java', 'MySQL', 'JavaFX', 'JDBC'],
    architecture: ['User', 'System', 'Item Database', 'Matching', 'Claim'],
    overview: 'A Java Swing/JavaFX application for managing lost and found items. Users register lost or found items, and the system automatically matches records and notifies claimants.',
    thumb: '',
  },
  {
    num: '14', title: 'Data Stories',
    subtitle: 'Interactive data analysis and visualization — raw data to insight through transformation and charts.',
    category: 'DATA SCIENCE / VISUALIZATION',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
    architecture: ['Raw Data', 'Transformation', 'Analysis', 'Visualization', 'Insight'],
    overview: 'A collection of data analysis notebooks covering transformation, conditional columns, API data, statistical analysis, bar plots, scatter plots, heatmaps, and insight narratives.',
    thumb: '',
  },
];

/* ============ SKILLS ============ */
const SKILL_CATEGORIES = [
  { name: 'Machine Learning & AI',   skills: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'SHAP', 'Pandas', 'NumPy'] },
  { name: 'Computer Vision',         skills: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Roboflow', 'Detectron2'] },
  { name: 'Robotics & Embedded',     skills: ['ROS2', 'SLAM', 'A* Pathfinding', 'Raspberry Pi 5', 'ESP32', 'Arduino', 'RPLiDAR'] },
  { name: 'Blockchain & Security',   skills: ['Solidity', 'Web3.js', 'IPFS', 'Smart Contracts', 'DID', 'Cryptography'] },
  { name: 'Web Development',         skills: ['React', 'Node.js', 'FastAPI', 'Flask', 'HTML5', 'CSS3', 'JavaScript'] },
  { name: 'Data & Tools',            skills: ['SQL', 'MongoDB', 'Jupyter', 'Docker', 'Git', 'Linux', 'Matplotlib', 'Seaborn'] },
];

/* ============ JOURNEY ============ */
const JOURNEY_NODES = [
  {
    year: '2020',
    label: 'SSLC',
    title: 'Class X — School',
    body: 'Strong academic foundation in mathematics and science. First exposure to programming basics.',
    accent: false,
  },
  {
    year: '2022',
    label: 'HSC',
    title: 'Class XII — School',
    body: 'Completed senior secondary with physics, math, and computer science. Algorithmic thinking begins.',
    accent: false,
  },
  {
    year: '2022',
    label: 'B.TECH START',
    title: 'Joined KPRIET',
    body: 'B.Tech Artificial Intelligence & Data Science at KPR Institute of Engineering and Technology, Coimbatore.',
    accent: true,
  },
  {
    year: '2024',
    label: 'AI / DATA',
    title: 'Projects in AI and Web',
    body: 'Built 10+ projects covering ML, NLP, computer vision, e-commerce, edtech, and management systems.',
    accent: false,
  },
  {
    year: '2025',
    label: 'HACKATHON',
    title: 'Smart India Hackathon',
    body: 'Developed advanced solutions under competitive pressure — autonomous systems and blockchain platforms.',
    accent: true,
  },
  {
    year: '2025',
    label: 'ROBOTICS',
    title: 'Autonomous Robotics',
    body: 'KUTTY campus delivery robot — fusing SLAM, A* pathfinding, computer vision, and multi-sensor control.',
    accent: true,
  },
  {
    year: '2026',
    label: 'PRESENT',
    title: 'Final Year',
    body: 'Completing B.Tech AI & DS. Focused on autonomous systems, full-stack AI, and open to opportunities.',
    accent: false,
  },
];

/* ===================================================
   CURSOR
=================================================== */
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;
  const dot  = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function tick() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
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
   HERO CANVAS
=================================================== */
function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r  = Math.random() * 1.2 + 0.4;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,56,43,${this.alpha})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((W * H) / 6000);
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,56,43,${0.06 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  let frame;
  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    frame = requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animate(); }
    else { cancelAnimationFrame(frame); }
  }, { threshold: 0 });
  observer.observe(canvas);

  resize(); initParticles();
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { resize(); initParticles(); }, 200);
  }, { passive: true });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cancelAnimationFrame(frame);
    canvas.style.display = 'none';
  }
}

/* ===================================================
   SCROLL REVEAL
=================================================== */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ===================================================
   FEATURED WORKS BENTO
=================================================== */
function buildWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  FEATURED_PROJECTS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = `work-card ${p.span} reveal-up`;
    card.style.setProperty('--d', i % 3);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${p.title}`);

    card.innerHTML = `
      <div class="work-thumb-wrap">
        <img src="${p.thumb}" alt="${p.title}" class="work-thumb" loading="lazy">
        <div class="work-thumb-overlay"></div>
      </div>
      <div class="work-body">
        <div class="work-body-top">
          <span class="work-num mono-sm">${p.num}</span>
          <span class="work-code">${p.code}</span>
        </div>
        <span class="work-category">${p.category}</span>
        <h3 class="work-title">${p.title}</h3>
        <p class="work-desc">${p.subtitle}</p>
        <div class="work-footer">
          <div class="work-tags">${p.tags.slice(0,4).map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
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
   ARCHIVE ROWS
=================================================== */
function buildArchive() {
  const list = document.getElementById('archive-list');
  if (!list) return;

  ARCHIVE_PROJECTS.forEach((p, i) => {
    const row = document.createElement('article');
    row.className = 'archive-row reveal-up';
    row.style.setProperty('--d', i % 4);
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.setAttribute('aria-label', `View ${p.title}`);

    row.innerHTML = `
      <span class="archive-num mono-sm">${p.num}</span>
      <div class="archive-info">
        <h3 class="archive-title">${p.title}</h3>
        <p class="archive-subtitle">${p.subtitle}</p>
      </div>
      <span class="archive-category mono-sm">${p.category}</span>
      <div class="archive-tags">${p.tags.slice(0,3).map(t => `<span class="work-tag">${t}</span>`).join('')}</div>
      <span class="archive-arrow" aria-hidden="true">&rarr;</span>
    `;

    row.addEventListener('click', () => openModal(p, 'archive'));
    row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(p, 'archive'); });
    list.appendChild(row);
  });

  initReveal();
}

/* ===================================================
   MODAL
=================================================== */
function initModal() {
  const modal    = document.getElementById('project-modal');
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
  const modal     = document.getElementById('project-modal');
  const numEl     = document.getElementById('modal-num');
  const catEl     = document.getElementById('modal-category');
  const titleEl   = document.getElementById('modal-title');
  const subEl     = document.getElementById('modal-subtitle');
  const tagsEl    = document.getElementById('modal-tags');
  const actionsEl = document.getElementById('modal-actions');
  const visualEl  = document.getElementById('modal-visual');
  const csEl      = document.getElementById('cs-sections');

  numEl.textContent   = `${project.num}`;
  catEl.textContent   = project.category;
  titleEl.textContent = project.title;
  subEl.textContent   = project.subtitle || '';

  // Thumb
  if (project.thumb) {
    visualEl.innerHTML = `<img src="${project.thumb}" alt="${project.title}" class="modal-img">`;
  } else {
    visualEl.innerHTML = `<div class="modal-img-placeholder"><span>${project.num}</span></div>`;
  }

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
        <span class="skill-cat-count mono-sm">${String(cat.skills.length).padStart(2,'0')}</span>
      </div>
      <div class="skill-pills">
        ${cat.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    `;
    flow.appendChild(section);
  });
}

/* ===================================================
   HORIZONTAL JOURNEY TIMELINE
=================================================== */
function buildJourney() {
  const track = document.getElementById('timeline-h-track');
  if (!track) return;

  JOURNEY_NODES.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = `journey-node${node.accent ? ' accent' : ''}`;
    el.style.setProperty('--idx', i);
    el.innerHTML = `
      <div class="journey-node-inner">
        <span class="journey-year mono-sm">${node.year}</span>
        <div class="journey-dot" aria-hidden="true"></div>
        <span class="journey-label">${node.label}</span>
        <h3 class="journey-title">${node.title}</h3>
        <p class="journey-body">${node.body}</p>
      </div>
    `;
    track.appendChild(el);
  });

  // Observe nodes for fade-in
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, root: track.parentElement });
  track.querySelectorAll('.journey-node').forEach(n => io.observe(n));

  // Drag scroll on desktop
  let isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('dragging'); });
  track.addEventListener('mouseup',   () => { isDown = false; track.classList.remove('dragging'); });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.2;
  });
}

/* ===================================================
   VERTICAL JOURNEY (fallback / original)
=================================================== */
function buildVerticalJourney() {
  // kept empty — replaced by horizontal
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
   INIT
=================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initCanvas();
  initReveal();
  initSmoothScroll();
  buildWorks();
  buildArchive();
  buildSkills();
  buildJourney();
  initModal();
  initBackTop();
  initHeroName();
});
