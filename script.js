let slideIndex = 1; // inicializa no primeiro slide
showSlides(slideIndex); // chama a função para mostrar o primeiro slide ao carregar a página

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Ajusta o slideIndex se exceder o número de slides
  if (n > slides.length) {
    slideIndex = 1; // volta ao primeiro slide
  }
  if (n < 1) {
    slideIndex = slides.length; // vai para o último slide
  }

  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe "active" de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra o slide atual e define o ponto correspondente como "active"
  slides[slideIndex - 1].style.display = "flex"; 
  dots[slideIndex - 1].className += " active";
}