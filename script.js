// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fade-in and Skills Animation on Scroll
const sections = document.querySelectorAll("section");
const skillsSection = document.querySelector("#skills");
const skills = document.querySelectorAll(".skills-list li");
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      if (entry.target === skillsSection) {
        skills.forEach((skill) => skill.classList.add("animate"));
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  section.classList.add("fade-out");
  observer.observe(section);
});

// Dynamically add data-name attribute for hover tooltip
skills.forEach((skill) => {
  const name = skill.querySelector(".skill-name").textContent;
  skill.setAttribute("data-name", name);
});

// Add this to styles.css for fade effect
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        .fade-out { opacity: 0; transition: opacity 0.5s; }
        .fade-in { opacity: 1; }
        .skills-list .icon-circle.animate { animation-play-state: running; }
    </style>
`
);
