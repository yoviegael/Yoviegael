document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "#555";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "#333";
    });
  });
});