const bannerImages = ['https://moura-grafica.vercel.app/img/moura1.png', 'https://moura-grafica.vercel.app/img/moura2.png']; // Adicione mais imagens conforme necessário
let currentImageIndex = 0;
const bannerElement = document.getElementById('banner-img');

function changeImage() {
  bannerElement.src = bannerImages[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

setInterval(changeImage, 3000); // Troca de imagem a cada 3 segundos
