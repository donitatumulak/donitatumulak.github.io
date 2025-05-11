//SCRIPT TO LINK BUTTONS TO DESIGNATED SECTIONS OR PAGES
document.getElementById("browseButton").addEventListener("click", function() {
  window.location.href = "browse.html"; 
});

document.addEventListener("DOMContentLoaded", function () {
  const adoptionForm = document.getElementById("adoptionForm");
  const inputs = adoptionForm.querySelectorAll("input, textarea");

  //Script to handle adoption form
  const savedData = JSON.parse(localStorage.getItem("adoptionFormData"));
  if (savedData) {
    inputs.forEach((input) => {
      const key = input.placeholder || input.name || input.type;

      if (input.type === "radio") {
        if (savedData[key] === input.value) input.checked = true;
      } else {
        input.value = savedData[key] || "";
      }

      if (input.classList.contains("auto-expand")) {
        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";
      }
    });
  }

  // Live input validation and auto-saving to localStorage
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.placeholder || input.name || input.type;
      const formData = JSON.parse(localStorage.getItem("adoptionFormData")) || {};

      if (input.type === "radio") {
        const radios = adoptionForm.querySelectorAll(`input[name="${input.name}"]`);
        radios.forEach((r) => {
          if (r.checked) formData[key] = r.value;
        });
      } else {
        formData[key] = input.value;
      }

      localStorage.setItem("adoptionFormData", JSON.stringify(formData));

      if (input.hasAttribute("required") && input.value.trim() === "") {
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });
  });

  // Form submit handler
  adoptionForm.addEventListener("submit", function (e) {
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
      alert("Please complete all required fields.");
      return;
    }

    console.log("Adoption Form Submitted:", formData);
    alert("Thank you! Your adoption form has been submitted.");
    localStorage.removeItem("adoptionFormData");
    adoptionForm.reset();
  });

  const textarea = adoptionForm.querySelector(".auto-expand");
  if (textarea) {
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }
});


