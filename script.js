window.onload = function() {
  const imagensContainer = document.getElementById('imagens');

  fetch('https://moura-grafica.vercel.app/img')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao carregar as imagens');
    })
    .then(data => {
      data.forEach(imagemUrl => {
        const img = document.createElement('img');
        img.src = imagemUrl;
        img.style.marginRight = '10px';
        imagensContainer.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
};
