/* ================================================
   NANDHAKUMAR N — PORTFOLIO SCRIPT
   Vanilla JS | No dependencies
   ================================================ */

'use strict';

/* ============ DATA ============ */
const PROJECTS = [
  {
    id: 1,
    category: 'Computer Vision',
    title: 'Autonomous Object Tracker',
    desc: 'Real-time object detection and tracking pipeline using YOLOv8 and OpenCV. Deployed on edge hardware for low-latency inference.',
    longDesc: 'A full edge-ML pipeline combining YOLOv8 for multi-class detection with a Kalman-filter tracker. The system runs at 30 FPS on an NVIDIA Jetson Nano, with configurable alert zones and a Flask-based monitoring dashboard.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Jetson Nano'],
    thumb: 'assets/proj_object_tracker.jpg',
    github: 'https://github.com/nandha97151-lab',
    span: 'span-7',
  },
  {
    id: 2,
    category: 'Machine Learning',
    title: 'Predictive Maintenance ML',
    desc: 'LSTM-based anomaly detection for industrial sensor streams. Reduces unplanned downtime by catching failures before they occur.',
    longDesc: 'Time-series forecasting system using stacked LSTMs trained on multi-sensor industrial data. Includes a feature-engineering pipeline, explainability layer (SHAP values), and a REST API for real-time scoring.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'SHAP', 'FastAPI'],
    thumb: 'assets/proj_predictive_ml.jpg',
    github: 'https://github.com/nandha97151-lab',
    span: 'span-5',
  },
  {
    id: 3,
    category: 'Robotics',
    title: 'Autonomous Navigation Bot',
    desc: 'ROS2-based differential drive robot with LiDAR SLAM and A* path planning. Navigates dynamic environments without manual input.',
    longDesc: 'Built on ROS2 Humble with a differential-drive chassis. Integrates RPLiDAR A1 for 2D SLAM (cartographer), obstacle inflation layers, and a custom recovery behavior. Tested in a simulated warehouse environment (Gazebo) and on physical hardware.',
    tags: ['C++', 'ROS2', 'LiDAR', 'SLAM', 'Python'],
    thumb: 'assets/proj_nav_bot.jpg',
    github: 'https://github.com/nandha97151-lab',
    span: 'span-4',
  },
  {
    id: 4,
    category: 'Web + AI',
    title: 'AI Resume Analyzer',
    desc: 'NLP-powered tool that extracts key skills and gaps from resumes against job descriptions, returning structured feedback.',
    longDesc: 'Full-stack application using spaCy and sentence-transformers for semantic similarity scoring between resumes and JDs. React frontend with a FastAPI backend, deployed on Render with PostgreSQL for storing session data.',
    tags: ['Python', 'spaCy', 'React', 'FastAPI', 'PostgreSQL'],
    thumb: 'assets/proj_resume_ai.jpg',
    github: 'https://github.com/nandha97151-lab',
    span: 'span-8',
  },
];

const SKILL_CATEGORIES = [
  {
    name: 'Machine Learning & AI',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'SHAP', 'Pandas', 'NumPy'],
  },
  {
    name: 'Computer Vision',
    skills: ['OpenCV', 'YOLOv8', 'Roboflow', 'Pillow', 'MediaPipe', 'Detectron2'],
  },
  {
    name: 'Robotics & Embedded',
    skills: ['ROS2', 'Gazebo', 'SLAM', 'C++', 'Arduino', 'Raspberry Pi', 'Jetson Nano'],
  },
  {
    name: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'FastAPI', 'Flask', 'Node.js'],
  },
  {
    name: 'Data & Tools',
    skills: ['SQL', 'Git', 'Docker', 'Jupyter', 'VS Code', 'Linux', 'Matplotlib', 'Seaborn'],
  },
];

const JOURNEY = [
  {
    year: '2022 / PRESENT',
    title: 'B.Tech Artificial Intelligence & Data Science',
    org: 'KPR Institute of Engineering and Technology, Coimbatore',
    desc: 'Coursework in machine learning, deep learning, computer vision, natural language processing, and autonomous systems. Hands-on project work each semester.',
  },
  {
    year: '2022',
    title: 'HSC, Class XII',
    org: 'Govt. Higher Secondary School',
    desc: 'State board senior secondary with mathematics, physics, and computer science. Developed early interest in programming and algorithmic problem solving.',
  },
  {
    year: '2020',
    title: 'SSLC, Class X',
    org: 'Govt. Higher Secondary School',
    desc: 'Foundational academics with strong scores in mathematics and science.',
  },
];

/* ============ CURSOR ============ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  function tick() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

    requestAnimationFrame(tick);
  }
  tick();

  document.querySelectorAll('a, button, .work-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ============ NAV ============ */
function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Scroll class
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    mobileNav.classList.toggle('open');
    mobileNav.setAttribute('aria-hidden', expanded);
  });

  // Close on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ============ HERO CANVAS ============ */
function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.2 + 0.4;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
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

  // Connect nearby particles
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
    if (entries[0].isIntersecting) {
      animate();
    } else {
      cancelAnimationFrame(frame);
    }
  }, { threshold: 0 });
  observer.observe(canvas);

  resize();
  initParticles();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      initParticles();
    }, 200);
  }, { passive: true });

  // Honour reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cancelAnimationFrame(frame);
    canvas.style.display = 'none';
  }
}

/* ============ SCROLL REVEAL ============ */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => io.observe(el));
}

/* ============ TIMELINE REVEAL ============ */
function initTimeline() {
  const nodes = document.querySelectorAll('.timeline-node');
  if (!nodes.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  nodes.forEach(node => io.observe(node));
}

/* ============ WORKS BENTO ============ */
function buildWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = `work-card ${p.span} reveal-up`;
    card.style.setProperty('--d', i % 3);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${p.title}`);

    const thumbHTML = p.thumb
      ? `<img src="${p.thumb}" alt="${p.title}" class="work-thumb" loading="lazy">`
      : `<div class="work-thumb-placeholder"><span class="work-thumb-label">${p.category}</span></div>`;

    card.innerHTML = `
      ${thumbHTML}
      <div class="work-body">
        <span class="work-category">${p.category}</span>
        <h3 class="work-title">${p.title}</h3>
        <p class="work-desc">${p.desc}</p>
        <div class="work-tags">
          ${p.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(p));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(p); });
    grid.appendChild(card);
  });

  // Init reveal for dynamically added cards
  initReveal();
}

/* ============ MODAL ============ */
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

function openModal(project) {
  const modal = document.getElementById('project-modal');
  const category = document.getElementById('modal-category');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const tagsEl = document.getElementById('modal-tags');
  const link = document.getElementById('modal-link');
  const imgEl = document.getElementById('modal-img');

  category.textContent = project.category;
  title.textContent = project.title;
  desc.textContent = project.longDesc || project.desc;
  link.href = project.github;
  imgEl.src = project.thumb || '';
  imgEl.alt = project.title;
  imgEl.style.display = project.thumb ? 'block' : 'none';

  tagsEl.innerHTML = project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

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

/* ============ SKILLS ============ */
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

/* ============ JOURNEY ============ */
function buildJourney() {
  const container = document.getElementById('timeline');
  if (!container) return;

  JOURNEY.forEach(item => {
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.innerHTML = `
      <div class="timeline-dot" aria-hidden="true"></div>
      <p class="timeline-year">${item.year}</p>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-org">${item.org}</p>
      <p class="timeline-desc">${item.desc}</p>
    `;
    container.appendChild(node);
  });

  initTimeline();
}

/* ============ BACK TO TOP ============ */
function initBackTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============ HERO NAME ANIMATION ============ */
function initHeroName() {
  const titleLines = document.querySelectorAll('.hero-name-line');
  if (!titleLines.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  titleLines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(40px) skewX(-4deg)';
    line.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.12}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.12}s`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0) skewX(0)';
      });
    });
  });
}

/* ============ SMOOTH ANCHOR SCROLL ============ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initCanvas();
  initReveal();
  initSmoothScroll();
  buildWorks();
  buildSkills();
  buildJourney();
  initModal();
  initBackTop();
  initHeroName();
});
