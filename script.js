const bannerSection = document.querySelector('.banner');

// Lista de URLs das imagens
const images = [
    'https://moura-grafica.vercel.app/img/moura1.png',
    'https://moura-grafica.vercel.app/img/moura2.png',
    'https://moura-grafica.vercel.app/img/moura3.png'
];

// Para cada imagem na lista, cria um elemento de imagem e adiciona à seção de banner
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Banner';
    bannerSection.appendChild(imgElement);
});