<?php
// Conectar ao banco de dados (substitua os valores com os seus)
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'db-moura';

$conexao = mysqli_connect($host, $user, $password, $database);

// Verificar a conexão
if (!$conexao) {
    die("Erro ao conectar ao banco de dados: " . mysqli_connect_error());
}

// Executar a consulta SQL
$query = "SELECT * FROM services";
$resultado = mysqli_query($conexao, $query);

// Criar o layout do card e exibir os resultados
while ($row = mysqli_fetch_assoc($resultado)) {
    echo "<div class='card'>";
    echo "<img src='" . $row['image'] . "' alt='Imagem do serviço'>";
    echo "<h2>" . $row['description'] . "</h2>";
    echo "<p>Valor: R$" . $row['value'] . " por " . $row['unit'] . "</p>";
    echo "</div>";
}

// Fechar a conexão
mysqli_close($conexao);
