//Script for the mobile menu (hamburger icon)
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("mobileMenu");
  const navList = document.querySelector(".nav-list");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});

//Script to handle the back to top button
  const backToTopButton = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

document.addEventListener("DOMContentLoaded", function () {
  const sectionsToAnimate = [
    document.getElementById("browseIntro"),
    document.getElementById("browseIntro"),
    document.querySelector(".adoption-steps"),
    document.querySelector(".browse-step"),
    document.querySelector(".section-introduction"),
    document.querySelector(".about-us"),        
    document.querySelector(".our-mission"),
    document.querySelector(".faq-section")
  ];

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sectionsToAnimate.forEach((section) => {
    if (section) observer.observe(section);
  });
});
