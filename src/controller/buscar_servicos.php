<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db-moura";

// Estabelecer a conexão
$conn = new mysqli($servername, $username, $password, $dbname);
// Verificar se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Query para selecionar os serviços do banco de dados
$sql = "SELECT * FROM services";
$result = $conn->query($sql);

// Exibir os serviços na página
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Aqui você deve ajustar de acordo com os nomes das colunas no seu banco de dados
        echo "
            <div class='card'>
                <img src='" . $row["image"] . "' alt='Imagem " . $row['card_code'] . "' class='card-img'>
                <div class='card-info'>
                    <p class='card-code'>" . $row['card_code'] . "</p>
                    <h2 class='card-name'>" . $row['description'] . "</h2>
                    <p class='card-value'>R$ " . $row['value'] . " " . $row['unit'] . "</p>
                </div>
            </div>
        ";
    }
} else {
    echo "Nenhum serviço encontrado.";
}

// Fechar a conexão com o banco de dados
$conn->close();
