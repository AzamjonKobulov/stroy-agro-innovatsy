const navOnScroll = document.querySelector('.nav-on-scroll');

document.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navOnScroll.classList.remove('-translate-y-full'); // Remove the translate class
  } else {
    navOnScroll.classList.add('-translate-y-full');
  }
});

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach((content) => content.classList.remove('active'));
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

// Change stroke color of SVG buttons based on slide navigation
swiper.on('slideChange', function () {
  const isBeginning = swiper.isBeginning; // Check if the first slide is reached
  const isEnd = swiper.isEnd; // Check if the last slide is reached
  const prevPath = document.querySelectorAll('.prev-path');
  const nextPath = document.querySelectorAll('.next-path');

  // Update stroke colors based on slide navigation direction
  if (isBeginning) {
    prevPath.forEach((path) => path.setAttribute('stroke', '#B6B6B6'));
    nextPath.forEach((path) => path.setAttribute('stroke', 'black'));
  } else if (isEnd) {
    prevPath.forEach((path) => path.setAttribute('stroke', 'black'));
    nextPath.forEach((path) => path.setAttribute('stroke', '#B6B6B6'));
  } else {
    prevPath.forEach((path) => path.setAttribute('stroke', 'black'));
    nextPath.forEach((path) => path.setAttribute('stroke', 'black'));
  }
});
