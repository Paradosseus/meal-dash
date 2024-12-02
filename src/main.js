document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#nav-menu-button');
  const menu = document.querySelector('#nav-menu');
  const closeMenuButton = document.querySelector('#close-menu-button'); 

  function hideNavMenuOnResize() {
    if(window.innerWidth >= 1140) {
      menu.classList.remove('active');
     }
  }
  window.addEventListener('resize', hideNavMenuOnResize);

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('open')
  });

  closeMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('close');
  })



});