const bannerSection = document.querySelector(".card-container");
const directoryUrl = "https://moura-grafica.vercel.app/img/"; // URL do diretório das imagens
let images = []; // Array para armazenar as URLs das imagens
let currentIndex = 0; // Índice da imagem atual

// Função para carregar a lista de imagens do diretório
function loadImagesFromDirectory() {
  // Loop para carregar todas as imagens de 99.png a 01.png
  for (let i = 99; i >= 1; i--) {
    // Formatar o número com zero à esquerda se necessário
    const paddedNumber = String(i).padStart(2, "0");
    // Construir a URL da imagem
    const imageUrl = directoryUrl + paddedNumber + ".png";
    // Verificar se a imagem existe
    imageExists(imageUrl, function (exists) {
      if (exists) {
        // Adicionar a URL da imagem ao array se ela existir
        images.push(imageUrl);
      }
      // Se chegarmos ao final do loop e não houver mais imagens, iniciar o slideshow
      if (i === 1) {
        startImageSlideshow();
      }
    });
  }
}

// script.js

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.querySelector(".card-image").style.transform = "scale(1.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.querySelector(".card-image").style.transform = "scale(1)";
  });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const contactButtons = document.querySelectorAll(".contact-btn");

  contactButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const serviceName = this.getAttribute("data-service");
      const message = encodeURIComponent(
        `Olá! Estou interessado no serviço ${serviceName}.`
      );
      const whatsappURL = `https://wa.me/5591992895453?text=${message}`;
      window.open(whatsappURL, "_blank");
    });
  });
});
