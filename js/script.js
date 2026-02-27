// ============================================
//   TEJES RAJU INGOLE — PORTFOLIO JAVASCRIPT
//   File: js/script.js
// ============================================


// ── 1. TYPING ANIMATION — ROLE ──
const roles = [
  "Jr.Data Scientist",
  "Data Analyst",
  "AI/ML Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const current = roles[roleIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// ── 2. STICKY NAVBAR ──
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(10,10,15,0.99)";
    navbar.style.borderBottomColor = "rgba(59,130,246,0.3)";
    navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(10,10,15,0.95)";
    navbar.style.borderBottomColor = "#1e1e2e";
    navbar.style.boxShadow = "none";
  }
});


// ── 3. SCROLL REVEAL ──
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

revealEls.forEach(el => revealObserver.observe(el));


// ── 4. SKILL BAR ANIMATION ──
const bars = document.querySelectorAll(".bar-fill");

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("data-width") + "%";
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => barObserver.observe(bar));


// ── 5. HAMBURGER MENU ──
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


// ── 6. ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });
  navItems.forEach(link => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#3b82f6";
    }
  });
});
