// Animação de scroll

function revealOnScroll(){
   const reveals = document.querySelectorAll('.reveal');

   reveals.forEach(element =>{
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

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

// Accordion mobile para atribuições
function initAccordion() {
   const cards = document.querySelectorAll('.card-atribuicao');
   
   cards.forEach(card => {
      card.addEventListener('click', function() {
         // Só funciona no mobile (largura <= 768px)
         if (window.innerWidth <= 768) {
            // Se o card clicado já está ativo, apenas fecha ele
            const isActive = this.classList.contains('active');
            
            // Fecha todos os cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Se não estava ativo, abre o clicado
            if (!isActive) {
               this.classList.add('active');
            }
         }
      });
   });
}

// Inicializa ao carregar
window.addEventListener('load', initAccordion);

// Reinicializa ao redimensionar (opcional)
window.addEventListener('resize', () => {
   const cards = document.querySelectorAll('.card-atribuicao');
   if (window.innerWidth > 768) {
      cards.forEach(card => card.classList.remove('active'));
   }
});

// Slider automático simples
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
   slides.forEach(slide => slide.classList.remove('active'));
   slides[index].classList.add('active');
}

function nextSlide() {
   currentSlide = (currentSlide + 1) % totalSlides;
   showSlide(currentSlide);
}

// Inicia o slider se existirem slides
if (slides.length > 0) {
   setInterval(nextSlide, 3000); // troca a cada 4 segundos
}