const navOnScroll = document.querySelector('.nav-on-scroll');

document.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navOnScroll.classList.remove('-translate-y-full'); // Remove the translate class
  } else {
    navOnScroll.classList.add('-translate-y-full');
  }
});
