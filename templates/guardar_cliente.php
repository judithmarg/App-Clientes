<?php

$server = 'LAPTOP-DP5KPM1T';
$connectionOptions = array(
    "Database" => "TALLER-FINAL",
    "Authentication" => SQLSRV_SQL_AUTHENTICATION_WINDOWS
);

$ciCliente = $_POST['ciCliente'];
$nombreCliente = $_POST['nombreCliente'];
$nroHijos = $_POST['nroHijos'];
$estadoCivil = $_POST['estadoCivil'];
$correoCliente = $_POST['correoCliente'];
$tieneTrabajo = $_POST['tieneTrabajo'];
$direccionCliente = $_POST['direccionCliente'];



$conn = new PDO("odbc:Driver={ODBC Driver 17 for SQL Server};Server=$server;Database=$database", $username, $password);

$query = "INSERT INTO CLIENTE (ciCliente, nombreCliente, nroHijos, estadoCivil, correoCliente, tieneTrabajo, direccionCliente) VALUES ($ciCliente, $nombreCliente, $nroHijos, $estadoCivil, $correoCliente, $tieneTrabajo, $direccionCliente)";
$stmt = $conn->prepare($query);
$stmt->execute([$ciCliente, $nombreCliente, $nroHijos, $estadoCivil, $correoCliente, $tieneTrabajo, $direccionCliente]);

// Cerrar la conexión con la base de datos
$conn = null;

echo "Datos del cliente guardados correctamente.";
?>
