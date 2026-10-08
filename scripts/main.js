document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("main-nav");

  // Sticky header with transparent-to-solid transition
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Simple animated counters (placeholder values left empty by design)
  const counters = document.querySelectorAll(".count");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((c, i) => {
            if (c.dataset.started) return;
            c.dataset.started = true;
            // Example subtle animation (no numeric claim) — show a dash then label
            c.textContent = "—";
            setTimeout(() => {
              c.textContent = "—";
            }, 400);
          });
        }
      });
    },
    { threshold: 0.2 },
  );
  counters.forEach((c) => counterObserver.observe(c));

  // Hero cinematic subtle scale animation
  const heroMedia = document.querySelector(".hero-media");
  let scaleDir = 1;
  setInterval(() => {
    const now = Date.now();
    const s = 1 + Math.sin(now / 18000) * 0.01; // very subtle slow zoom
    if (heroMedia) heroMedia.style.transform = `scale(${s})`;
  }, 80);
});
