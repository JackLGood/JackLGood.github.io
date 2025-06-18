// script.js
// Minimal JS — scroll-behavior is handled by CSS
document.addEventListener("DOMContentLoaded", () => {
  // Track external link clicks (example)
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Outgoing: ${link.href}`);
    });
  });
});
