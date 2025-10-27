// Theme Management (using JS variable instead of localStorage)
let currentTheme = "dark";

// Initialize theme
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

// Toggle theme
function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
}

// Typing animation for tagline
const taglineText =
  "Backend Developer | Algorithmic Trading Enthusiast | AI/ML Explorer";
let taglineIndex = 0;

function typeTagline() {
  const taglineElement = document.getElementById("tagline");
  if (taglineIndex < taglineText.length) {
    taglineElement.textContent += taglineText.charAt(taglineIndex);
    taglineIndex++;
    setTimeout(typeTagline, 50);
  }
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        document.getElementById("navMenu").classList.remove("active");
      }
    });
  });
}

// Active navigation link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll(".section, .hero");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Mobile menu toggle
function setupMobileMenu() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Theme toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", toggleTheme);
}

// Toggle expand/collapse for experience items
function toggleExpand(button) {
  const achievements = button.nextElementSibling;
  achievements.classList.toggle("expanded");

  if (achievements.classList.contains("expanded")) {
    button.textContent = "Show less";
  } else {
    button.textContent = "Show more";
  }
}

// Back to top button
function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Project data
const projects = [
  {
    id: "project0",
    icon: "💹",
    title: "Algorithmic Stock Bot",
    status: "In Progress",
    description:
      "A system for algorithmic trading on the CFD market with MetaTrader 5 integration. The project combines backend (FastAPI), middleware (ExpressTS) and frontend (Vue3) into a multi-layer trading architecture.",
    tech: ["FastAPI", "ExpressTS", "Vue3", "MetaTrader 5", "Python"],
    features: [
      "Trading API with MT5 integration",
      "Logic of multi-horizon strategy with analysis of multiple time intervals",
      "Vue3 visual dashboard for position monitoring",
      "Real-time market data support",
      "Volume filter and risk engine for capital management",
      "Multi-layer architecture for scalability",
    ],
    goal: "Building a multi-layer bot based on data and trading rules",
  },
  {
    id: "project1",
    icon: "🗺️",
    title: "Pathfinding Visualizer",
    status: "Completed",
    description:
      "Interactive visualization of pathfinding algorithms - Dijkstra and A*. The application allows you to compare the performance of algorithms in real time.",
    tech: ["C++", "SFML"],
    features: [
      "Visualization of Dijkstra and A* algorithms step by step",
      "Comparison of execution time and performance of algorithms",
      "Generating random mazes and obstacles",
      "Interactive user interface",
      "Possibility to draw your own obstacles",
    ],
  },
  {
    id: "project2",
    icon: "🧠",
    title: "Neural Network for NLP",
    status: "Completed",
    description:
      "A neural network for natural language processing built from scratch without the use of ready-made ML frameworks. An educational project aimed at deep understanding of how neural networks work.",
    tech: ["Python", "NumPy"],
    features: [
      "Implementation of a neural network from scratch",
      "Teaching on text sequences",
      "Your own training pipeline",
      "Backpropagation and gradient descent implemented manually",
      "Analysis and visualization of the learning process",
    ],
  },
  {
    id: "project3",
    icon: "🏠",
    title: "Full Stack App – Otodom Clone",
    status: "In Progress",
    description:
      "A clone of the Otodom platform - a full-stack application for managing real estate advertisements. As the leader of the backend team, I was responsible for the REST API architecture.",
    tech: ["Flask", "MySQL", "REST API"],
    features: [
      "Own REST API architecture",
      "User authorization and authentication system",
      "CRUD operations for real estate advertisements",
      "Advanced filtering and search",
      "Role: Backend team leader",
    ],
  },
  {
    id: "project5",
    icon: "✋",
    title: "Hand Movement Recognition AI",
    status: "Completed",
    description:
      "An artificial intelligence model for recognizing hand gestures in real time using computer vision and deep learning.",
    tech: ["Python", "Keras", "TensorFlow"],
    features: [
      "Implementation of computer vision for hand detection",
      "Real-time gesture recognition",
      "Deep learning model training",
      "Image preprocessing and data augmentation",
      "High recognition accuracy",
    ],
  },
];

// Open project modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  const statusClass =
    project.status === "Completed" ? "completed" : "in-progress";
  const statusText = project.status === "Completed" ? "Ukończony" : "W trakcie";

  modalBody.innerHTML = `
    <div class="modal-project-icon">${project.icon}</div>
    <span class="status-badge ${statusClass}">${statusText}</span>
    <h2 class="modal-project-title">${project.title}</h2>
    <p class="modal-project-description">${project.description}</p>
    
    <div class="modal-section">
      <h3>Technologies</h3>
      <div class="modal-tech-tags">
        ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
      </div>
    </div>
    
    <div class="modal-section">
      <h3>Key features</h3>
      <ul class="modal-features">
        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>
    
    ${
      project.goal
        ? `
      <div class="modal-section">
        <h3>Project goal</h3>
        <p style="color: var(--text-secondary); line-height: 1.6;">${project.goal}</p>
      </div>
    `
        : ""
    }
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal on outside click
window.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Download CV function
function downloadCV() {
  const fileUrl = "/Kamil_Uchwat2.pdf";

  fetch(fileUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("CV not found on server.");
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Kamil_Uchwat_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => {
      alert(
        "PDF CV available on request.\n\nContact me:\nEmail: kamil.uchwat19@gmail.com\nPhone: +48 534 380 081\n\nWhat can I prepare for you:\n✓ Current CV in PDF format\n✓ Project portfolio\n"
      );
    });
}


// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme
  initTheme();

  // Start typing animation
  setTimeout(typeTagline, 500);

  // Setup event listeners
  setupSmoothScroll();
  setupMobileMenu();
  setupThemeToggle();
  setupBackToTop();

  // Setup scroll listeners
  window.addEventListener("scroll", () => {
    handleNavbarScroll();
    updateActiveNavLink();
  });

  // Initialize scroll animations
  animateOnScroll();

  // Initial check for navbar
  handleNavbarScroll();
});
