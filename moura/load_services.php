<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db-moura";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta SQL para selecionar os serviços
$sql = "SELECT id, image, description, value, unit FROM services";
$result = $conn->query($sql);

$services = array();

if ($result->num_rows > 0) {
    // Output dos dados de cada linha
    while ($row = $result->fetch_assoc()) {
        $services[] = $row;
    }
} else {
    echo "0 resultados";
}

// Retorna os serviços como JSON
header('Content-Type: application/json');
echo json_encode($services);

// Fecha a conexão
$conn->close();
