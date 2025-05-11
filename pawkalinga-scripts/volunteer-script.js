//SCRIPT TO LINK BUTTONS TO DESIGNATED SECTIONS OR PAGES
  document.getElementById("viewContact").addEventListener("click", function() {
    window.location.href = "about-us.html#contact-info";
  });

  document.getElementById("viewAddress").addEventListener("click", function() {
    window.location.href = "about-us.html#shelterAddress";
  });

//Script to handle volunteer form
document.addEventListener("DOMContentLoaded", function () {
  const volunteerForm = document.querySelector(".volunteer-adoption-form");
  const inputs = volunteerForm.querySelectorAll("input, textarea");

  const savedData = JSON.parse(localStorage.getItem("volunteerFormData"));
  if (savedData) {
    inputs.forEach((input) => {
      const key = input.placeholder || input.name || input.type;
      if (savedData[key] !== undefined) {
        if (input.type === "radio") {
          input.checked = input.value === savedData[key];
        } else {
          input.value = savedData[key];
        }
      }
    });
  }

  // Live input validation and save to localStorage
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.placeholder || input.name || input.type;
      const formData = JSON.parse(localStorage.getItem("volunteerFormData")) || {};

      if (input.type === "radio") {
        const radios = volunteerForm.querySelectorAll(`input[name="${input.name}"]`);
        radios.forEach((r) => {
          if (r.checked) formData[key] = r.value;
        });
      } else {
        formData[key] = input.value;
      }

      localStorage.setItem("volunteerFormData", JSON.stringify(formData));

      if (input.hasAttribute("required") && input.value.trim() === "") {
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });
  });

  //Handles submit
  volunteerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {};
    let formValid = true;

    inputs.forEach((input) => {
      const key = input.placeholder || input.name || input.type;

      if (input.type === "radio") {
        if (input.checked) formData[key] = input.value;
      } else {
        formData[key] = input.value;
      }

      if (input.hasAttribute("required") && input.value.trim() === "") {
        input.style.borderColor = "red";
        formValid = false;
      }
    });

    if (!formValid) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("Volunteer Form Submitted:", formData);
    alert("Thank you for volunteering! Your form has been submitted.");
    localStorage.removeItem("volunteerFormData");
    volunteerForm.reset();
  });

  const textarea = volunteerForm.querySelector(".auto-expand");
  if (textarea) {
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }
});
