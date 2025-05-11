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
