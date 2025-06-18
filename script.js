// script.js
// (kept minimal — no JS needed for smooth scroll or basic interactions)

document.addEventListener('DOMContentLoaded', function() {
  // Example: track external link clicks, etc.
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Outgoing: ${link.href}`);
    });
  });
});
