import './splide/splide.min.css';
import Splide from './splide/splide.min.js';
import { AutoScroll } from './splide/splide-extension-auto-scroll.min.js'; 
import { Intersection } from './splide/splide-extension-intersection.min.js';


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
      type: 'loop',
      perPage: 3,
      pagination: false,
    };

    if (i === 0) {
      options.arrows = false;
      options.drag = 'free';
      options.focus = 'center';
      options.breakpoints = {
        640: {
          perPage: 1,
        },
      };
      options.extensions = [AutoScroll, Intersection];
      options.autoScroll = {
        speed: 1
      };
      options.intersection = {
        inView: {
          autoplay: true,
        },
        outView: {
          autoplay: false,
        },
      };
    }
    else {
      options.gap = 20;
      options.autoplay = true;
      options.interval = 3000;
      options.breakpoints = {
        640: {
          perPage: 1,
        },
      };
    }

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



