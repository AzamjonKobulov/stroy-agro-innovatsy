document.addEventListener('DOMContentLoaded', function () {
  const secNav = document.querySelector('.secondary-navbar');
  const header = document.querySelector('.header');
  const blackBlock = document.querySelector('.black-block');
  const btnDownload = document.querySelector('.btn-download');
  const iconPhone = document.querySelector('.icon-phone');
  const iconMessage = document.querySelector('.icon-message');

  document.body.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      blackBlock.classList.toggle('hidden');
    }
  });

  window.addEventListener('scroll', function () {
    // Adjust the scroll condition based on your requirements
    if (window.scrollY > 100) {
      secNav.classList.add(
        'w-full',
        'fixed',
        'top-24',
        'left-0',
        'bg-white',
        '!text-brand-dark',
        'z-50',
        'shadow',
        'transition-all',
        'duration-500',
        'rounded-b-20'
      );
      header.classList.add('lg:-translate-y-full', 'shadow');
      btnDownload.classList.add('!bg-brand-primary', 'text-white');
      iconPhone.classList.add('stroke-brand-dark');
      iconMessage.classList.add('fill-brand-dark');
    } else {
      secNav.classList.remove(
        'w-full',
        'fixed',
        'top-24',
        'left-0',
        'bg-white',
        '!text-brand-dark',
        'transition-all',
        'duration-500',
        'z-50',
        'shadow',
        'rounded-b-20'
      );

      header.classList.remove('lg:-translate-y-full', 'shadow');
      btnDownload.classList.remove('!bg-brand-primary', 'text-white');
      iconPhone.classList.add('stroke-brand-dark');
      iconMessage.classList.add('fill-brand-dark');
    }
  });
});
