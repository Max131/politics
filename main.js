'use strict';
const d = document,
      showMenu = d.querySelector('nav ul'),
      navlinks = document.querySelectorAll('nav a');

document.addEventListener('DOMContentLoaded', () => {
  
  d.querySelector('.menu').addEventListener('click', () => {
    showMenu.classList.toggle('active');
  });

  navlinks.forEach(link => {
    link.addEventListener('click', () => {
      showMenu.classList.toggle('active');
    })
  })

});
