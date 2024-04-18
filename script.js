window.onload = function() {
  const imagem = document.getElementById('imagem');

  fetch('https://moura-grafica.vercel.app/img')
    .then(response => {
      if (response.ok) {
        return response.blob();
      }
      throw new Error('Erro ao carregar a imagem');
    })
    .then(blob => {
      const imgUrl = URL.createObjectURL(blob);
      imagem.src = imgUrl;
    })
    .catch(error => {
      console.error(error);
    });
};
