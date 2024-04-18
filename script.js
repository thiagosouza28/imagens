const imagens = [
  'https://moura-grafica.vercel.app/img/',
];
let index = 0;
const intervalo = 2000; // 2 segundos

exibirProximaImagem();
setInterval(exibirProximaImagem, intervalo);

function exibirProximaImagem() {
  const imagemElement = document.getElementById('imagem');
  imagemElement.src = imagens[index];
  index = (index + 1) % imagens.length;
}
</script>
