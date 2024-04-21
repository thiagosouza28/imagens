// Script para carregar os serviços do banco de dados

// Função para fazer uma requisição AJAX e carregar os serviços
function loadServices() {
  // Cria uma instância do objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Define o tipo de requisição e o URL do arquivo PHP
  xhr.open("GET", "buscar_servicos.php", true);

  // Define a função a ser executada quando a requisição for concluída
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Converte a resposta JSON em objetos JavaScript
      var services = JSON.parse(xhr.responseText);

      // Adiciona os serviços ao contêiner
      var container = document.getElementById("services-container");
      services.forEach(function (service) {
        var card = `
          <div class="card">
            <h2 class="card-name">${service.nome}</h2>
            <p class="card-description">${service.descricao}</p>
            <p class="card-value">R$ ${service.valor}</p>
          </div>
        `;
        container.innerHTML += card;
      });
    } else {
      console.error(
        "Erro ao carregar serviços. Status da requisição:",
        xhr.status
      );
    }
  };

  // Envia a requisição
  xhr.send();
}

// Chama a função para carregar os serviços quando a página carregar
window.onload = function () {
  loadServices();
};
