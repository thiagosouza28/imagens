

const imageDirectory = 'https://moura-grafica.vercel.app/img/'; // Diretório onde estão as imagens
const galleryElement = document.getElementById('gallery');

// Função para carregar e exibir as imagens do diretório
function loadImages() {
    fetch(imageDirectory)
        .then(response => response.blob())
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.style.maxWidth = '100%';
            galleryElement.appendChild(imgElement);
        });
}

loadImages(); // Carrega e exibe as imagens ao carregar a página
