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
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(xhr.responseText, 'text/html');

            // Extrair as URLs das imagens
            const imgElements = htmlDocument.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');
            images = Array.from(imgElements).map(element => directoryUrl + element.getAttribute('href'));

            console.log('URLs das imagens carregadas:', images);
            startImageSlideshow();
        } else {
            console.error('Falha ao carregar imagens do diretório.');
        }
    };

    xhr.send();
}

// Função para exibir a próxima imagem na seção de banner
function displayNextImage() {
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Banner';
    bannerSection.innerHTML = ''; // Limpar o conteúdo anterior
    bannerSection.appendChild(imgElement);

    currentIndex = (currentIndex + 1) % images.length;
}

// Função para iniciar o slideshow de imagens
function startImageSlideshow() {
    // Exibir a primeira imagem imediatamente
    displayNextImage();

    // Configurar intervalo para exibir imagens subsequentes a cada 3 segundos
    setInterval(displayNextImage, 3000);
}

// Chamar a função para carregar as imagens do diretório
loadImagesFromDirectory();
