const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
  mobileMenu.classList.toggle('show-menu');
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('show-menu');
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


