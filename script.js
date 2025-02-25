// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  section.classList.add("fade-out");
  observer.observe(section);
});

// Add this to styles.css for fade effect
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        .fade-out { opacity: 0; transition: opacity 0.5s; }
        .fade-in { opacity: 1; }
    </style>
`
);
