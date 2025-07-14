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
  const grid = document.querySelector('.projects-grid');
  const btn  = document.getElementById('show-more-btn');

  btn.addEventListener('click', () => {
    grid.classList.add('show-all');
    btn.style.display = 'none';
  });
});
