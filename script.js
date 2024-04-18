const bannerSection = document.querySelector('.banner');
const directoryUrl = 'https://moura-grafica.vercel.app/img/'; // URL do diretório das imagens
let images = []; // Array para armazenar as URLs das imagens
let currentIndex = 0; // Índice da imagem atual

// Função para carregar a lista de imagens do diretório
function loadImagesFromDirectory() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', directoryUrl, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            images = xhr.response.split('\n').filter(url => url.trim() !== ''); // Separando as URLs por quebra de linha
            console.log('URLs das imagens carregadas:', images);
            startImageSlideshow();
        } else {
            console.error('Falha ao carregar imagens do diretório.');
        }
    };

    xhr.send();
}

// Função para exibir as imagens sequencialmente a cada 3 segundos
function startImageSlideshow() {
    setInterval(() => {
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex]; // Alteração para acessar diretamente o array de URLs das imagens
        imgElement.alt = 'Banner';
        bannerSection.innerHTML = '';
        bannerSection.appendChild(imgElement);

        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);
}

// Chamar a função para carregar as imagens do diretório
loadImagesFromDirectory();