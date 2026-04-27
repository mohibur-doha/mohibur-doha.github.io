// Toggle mobile menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple form handler
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (You can connect this to a backend)");
});
