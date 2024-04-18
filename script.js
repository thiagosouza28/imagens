
const imageDirectory = 'https://moura-grafica.vercel.app/img/'; // Diretório onde estão as imagens
const galleryElement = document.getElementById('gallery');

// Função para carregar e exibir as imagens do diretório
function loadImages() {
    fetch(imageDirectory)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(text, 'text/html');
            const images = htmlDoc.getElementsByTagName('a');

            for (let image of images) {
                if (image.href.endsWith('.png') || image.href.endsWith('.jpg')) {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageDirectory + image.getAttribute('href');
                    imgElement.style.maxWidth = '100%';
                    galleryElement.appendChild(imgElement);
                }
            }
        });
}

loadImages(); // Carrega e exibe as imagens ao carregar a página