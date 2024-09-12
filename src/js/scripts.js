
const hamburguerMenu = document.getElementById('hamburguer-menu');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

hamburguerMenu.addEventListener('click', () => {
  mobileNavMenu.classList.toggle('hidden');
});
