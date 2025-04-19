const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  menuToggle.classList.remove('active');
  overlay.classList.remove('active');
});


// JS (paste before </body>)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".how-1").forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

