const imagens = [];
let index = 0;
const intervalo = 2000; // 2 segundos

// Carrega a lista de imagens do diretório
fetch('https://moura-grafica.vercel.app/img')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Erro ao carregar as imagens');
  })
  .then(data => {
    imagens.push(...data);
    exibirProximaImagem();
    setInterval(exibirProximaImagem, intervalo);
  })
  .catch(error => {
    console.error(error);
  });

function exibirProximaImagem() {
  const imagemElement = document.getElementById('imagem');
  imagemElement.src = imagens[index];
  index = (index + 1) % imagens.length;
}
