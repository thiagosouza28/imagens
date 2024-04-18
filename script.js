const bannerSection = document.querySelector('.banner');

// URL do diretório onde as imagens estão localizadas
const directoryUrl = 'https://moura-grafica.vercel.app/img/';

let currentIndex = 0;
let imageUrls = [];

// Função para carregar e exibir todas as imagens do diretório
async function displayImagesFromDirectory() {
    try {
        const response = await fetch(directoryUrl);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const links = Array.from(doc.querySelectorAll('a'));
        imageUrls = links.map(link => link.href)
                         .filter(href => href.endsWith('.png') || href.endsWith('.jpg') || href.endsWith('.jpeg'));
    } catch (error) {
        console.error('Erro ao carregar imagens:', error);
    }
}

// Função para exibir a próxima imagem a cada 3 segundos
function displayNextImage() {
    const imageUrl = imageUrls[currentIndex];

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Banner';

    bannerSection.innerHTML = '';
    bannerSection.appendChild(imgElement);

    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Função inicial para carregar as imagens do diretório e iniciar a exibição
async function startImageRotation() {
    await displayImagesFromDirectory();
    displayNextImage();

    setInterval(() => {
        displayNextImage();
    }, 3000); // Atualiza a imagem a cada 3 segundos
}

// Chamar a função para iniciar a rotação das imagens
startImageRotation();