let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }
  lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});
//navbar script end