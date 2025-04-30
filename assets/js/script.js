// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});



AOS.init({
   duration: 1000, // durasi animasi dalam ms
   once: true // animasi hanya terjadi sekali
});



// Toggle Dark Mode
// const darkToggle = document.getElementById('dark-toggle');
// const html = document.documentElement;

// darkToggle.addEventListener('change', () => {
//   if (darkToggle.checked) {
//     html.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     html.classList.remove('dark');
//     localStorage.setItem('theme', 'light');
//   }
// });

// On load: check localStorage
// window.addEventListener('DOMContentLoaded', () => {
//   const theme = localStorage.getItem('theme');
//   if (theme === 'dark') {
//     html.classList.add('dark');
//     darkToggle.checked = true;
//   }
// });
