<?php

$server = 'nombre_servidor';
$database = 'nombre_base_datos';
$username = 'nombre_usuario';
$password = 'contraseña';

$ciCliente = $_POST['ciCliente'];
$nombreCliente = $_POST['nombreCliente'];
$nroHijos = $_POST['nroHijos'];
$estadoCivil = $_POST['estadoCivil'];
$correoCliente = $_POST['correoCliente'];
$tieneTrabajo = $_POST['tieneTrabajo'];
$direccionCliente = $_POST['direccionCliente'];



$conn = new PDO("odbc:Driver={ODBC Driver 17 for SQL Server};Server=$server;Database=$database", $username, $password);

$query = "INSERT INTO CLIENTE (ciCliente, nombreCliente, nroHijos, estadoCivil, correoCliente, tieneTrabajo, direccionCliente) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->execute([$ciCliente, $nombreCliente, $nroHijos, $estadoCivil, $correoCliente, $tieneTrabajo, $direccionCliente]);

// Cerrar la conexión con la base de datos
$conn = null;

echo "Datos del cliente guardados correctamente.";
?>
