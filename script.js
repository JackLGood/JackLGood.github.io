/* Global resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styling */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #fafafa;
  color: #333;
}

/* Navigation bar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
}

nav .logo {
  font-weight: bold;
  font-size: 1.5rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

/* Hero section */
.hero {
  display: flex;
  align-items: center;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.profile-pic {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
}

.hero-text h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.hero-text h2 {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.hero-text p a {
  margin-right: 1rem;
  text-decoration: none;
  color: #0066cc;
  font-weight: 500;
}

/* About section */
.about, .placeholder {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.about h2, .placeholder h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.about p, .placeholder p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Basic placeholder sections (publications, experiences, personal) */
.placeholder {
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #ddd;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .profile-pic {
    margin: 0 0 1rem 0;
  }
  
  .hero-text h1 {
    font-size: 1.5rem;
  }

  .hero-text h2 {
    font-size: 1rem;
  }
  
  nav ul {
    gap: 0.5rem;
  }
}
