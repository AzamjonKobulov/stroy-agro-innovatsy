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
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove('active'));
    // Show the corresponding tab content
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});
