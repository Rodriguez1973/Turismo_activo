<?php
$host_name = 'localhost';
$database = 's022045b_Rodriguez_2223';
$user_name = 's022045b_Rodriguez';
$password = 'Madri11828613';

//Conexión a la base da datos.
$connect = mysqli_connect($host_name, $user_name, $password, $database);
//Si existe un error al conectar con la base de datos.
if (mysqli_connect_errno()) {
    echo '<p>"Error: Fallo al conectarse a MySQL debido a: ' .
        mysqli_connect_error() .
        '</p>';
}
?>