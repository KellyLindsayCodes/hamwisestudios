import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; 
import { Intersection } from '@splidejs/splide-extension-intersection';

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
  mobileMenu.classList.toggle('show-menu');
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('show-menu');
});

document.addEventListener('DOMContentLoaded', function () {
  var carousels = document.getElementsByClassName('splide');

  for (var i = 0; i < carousels.length; i++) {
    var options = {
      perPage: window.innerWidth < 840 ? 1 : 3,
      pagination: false,
      perMove: 1,
      gap: 1, 
      type: 'loop',
    };

    new Splide(carousels[i], options).mount();
  }
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

