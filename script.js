
const bannerSection = document.querySelector('.banner');

// Lista de URLs das imagens
const images = [
    'https://moura-grafica.vercel.app/img/moura1.png',
    'https://moura-grafica.vercel.app/img/moura2.png',
    'https://moura-grafica.vercel.app/img/moura3.png'
];

let index = 0;

function displayImage() {
    const imgElement = document.createElement('img');
    imgElement.src = images[index];
    imgElement.alt = 'Banner';
    bannerSection.innerHTML = '';
    bannerSection.appendChild(imgElement);
    
    index = (index + 1) % images.length;
}

// Exibir a primeira imagem imediatamente
displayImage();

// Exibir as imagens a cada 3 segundos
setInterval(displayImage, 3000);