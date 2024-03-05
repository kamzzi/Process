/* HAMBURGER MENU */

const hamburgerButton = document.querySelector(".btn--hamburger");
const header = document.querySelector(".header");

const toggleMenu = () => {
  header?.classList.toggle("open");
};

hamburgerButton?.addEventListener("click", toggleMenu);

/* SMOOTH SCROLLING */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("link--navigation"))
      header.classList.toggle("open");
  });
});

/* STICKY */

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
