
const imageDirectory = 'https://moura-grafica.vercel.app/img/'; // Diretório onde estão as imagens
const bannerElement = document.getElementById('banner-img');
let currentImageIndex = 0;
let bannerImages = [];

// Função para carregar as imagens do diretório
function loadImages() {
    fetch(imageDirectory)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(text, 'text/html');
            const images = htmlDoc.getElementsByTagName('a');

            for (let image of images) {
                if (image.href.endsWith('.png') || image.href.endsWith('.jpg')) {
                    bannerImages.push(imageDirectory + image.getAttribute('href'));
                }
            }

            setInterval(changeImage, 2000); // Troca de imagem a cada 2 segundos
        });
}

// Função para trocar a imagem
function changeImage() {
    bannerElement.src = bannerImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

loadImages(); // Carrega as imagens ao carregar a página
