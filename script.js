// script.js
// Add scroll listener to toggle white navbar background
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Track external link clicks (example)
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Outgoing: ${link.href}`);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projects    = document.querySelectorAll('.projects-grid .project-card');
  const showMoreBtn = document.getElementById('show-more-btn');
  const initialCount = 4;

  // 1) hide everything after the first 4
  projects.forEach((card, idx) => {
    if (idx >= initialCount) card.style.display = 'none';
  });

  // 2) on click, reveal the hidden cards and hide the button
  showMoreBtn.addEventListener('click', () => {
    projects.forEach((card, idx) => {
      if (idx >= initialCount) card.style.display = 'block';
    });
    showMoreBtn.style.display = 'none';
  });
});
