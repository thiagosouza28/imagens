const bannerSection = document.querySelector(".banner");
const directoryUrl = "https://moura-grafica.vercel.app/img/"; // URL do diretório das imagens
let images = []; // Array para armazenar as URLs das imagens
let currentIndex = 0; // Índice da imagem atual

// Função para carregar a lista de imagens do diretório
function loadImagesFromDirectory() {
  // Loop para carregar todas as imagens de 01.png a 99.png
  for (let i = 1; i <= 99; i++) {
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
      if (i === 99) {
        startImageSlideshow();
      }
    });
  }
}

// Função para verificar se uma imagem existe
function imageExists(url, callback) {
  const img = new Image();
  img.onload = function () {
    callback(true);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = url;
}

// Função para exibir a próxima imagem na seção de banner
function displayNextImage() {
  const imgElement = document.createElement("img");
  imgElement.src = images[currentIndex];
  imgElement.alt = "Banner";
  bannerSection.innerHTML = ""; // Limpar o conteúdo anterior
  bannerSection.appendChild(imgElement);

  currentIndex = (currentIndex + 1) % images.length;
}

// Função para iniciar o slideshow de imagens
function startImageSlideshow() {
  // Exibir a primeira imagem imediatamente
  displayNextImage();

  // Configurar intervalo para exibir imagens subsequentes a cada 3 segundos
  setInterval(function () {
    // Exibir a próxima imagem
    displayNextImage();
  }, 3000);
}

// Chamar a função para carregar as imagens do diretório
loadImagesFromDirectory();

// Adicionar evento de clique ao botão do menu
document.querySelector(".menu-toggle").addEventListener("click", function () {
  // Alternar a classe 'open' no menu para exibi-lo ou ocultá-lo
  document.querySelector(".nav-links").classList.toggle("open");

  // Calcular a altura necessária para o contêiner do menu-content
  const navLinksHeight = document.querySelector(".nav-links").offsetHeight;
  document.querySelector(".menu-content").style.height = navLinksHeight + "px";

  // Alternar a classe 'open' no menu-content para exibi-lo ou ocultá-lo
  document.querySelector(".menu-content").classList.toggle("open");
});
