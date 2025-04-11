// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('show');
  menuBtn.textContent = nav.classList.contains('active') ? '✖' : '☰';
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('show');
  menuBtn.textContent = '☰';
});

// Scroll animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

  const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');

    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      overlay.classList.toggle('show');
      menuBtn.textContent = nav.classList.contains('active') ? '✖' : '☰';
    });

    overlay.addEventListener('click', () => {
      nav.classList.remove('active');
      overlay.classList.remove('show');
      menuBtn.textContent = '☰';
    });

    //successfully pop up 

    function showSuccess() {
    const msg = document.getElementById('successMsg');
    msg.style.display = 'block';

    // Auto-hide after 4s
    setTimeout(() => {
      msg.style.display = 'none';
    }, 4000);
  }