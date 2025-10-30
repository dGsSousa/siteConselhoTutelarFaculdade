// Animação de scroll

function revealOnScroll(){
   const reveals = document.querySelectorAll('.reveal');

   reveals.forEach(element =>{
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint){
         element.classList.add('active');
      }
   });
}

// Executa ao carregar a página
window.addEventListener('load', revealOnScroll);

// Executa ao scrollar
window.addEventListener('scroll', revealOnScroll);



// Indicador de seção ativa na nav
function updateActiveNav(){
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('nav a');

   let currentSection = '';

   sections.forEach(section =>{
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= (sectionTop - 200)){
         currentSection = section.getAttribute('id');
      }
   });

   navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
         link.classList.add('active');
      }
   });
}

// Executa ao carregar
window.addEventListener('load', updateActiveNav);

// Executa ao scrollar
window.addEventListener('scroll', updateActiveNav);


// Menu Hamburguer mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Abrir/fechar menu ao clicar no botao
menuToggle.addEventListener('click', ()=>{
   menuToggle.classList.toggle('active');
   nav.classList.toggle('active');
});

// Fechar menu ao clicar em link
navLinks.forEach(link =>{
   link.addEventListener('click', ()=>{
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
   });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
   if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
   }
});