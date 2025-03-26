document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-target]");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
