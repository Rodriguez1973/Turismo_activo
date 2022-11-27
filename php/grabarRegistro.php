<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include('conexionBd.php');

$contenido = $_POST['Todo'];

$cadena= str_replace("{", "", $contenido);
$cadena2= str_replace("}","", $cadena);
$contenido= str_replace("\\","", $contenido);
 $array = json_decode($contenido, true);

$cadena="";

$tmpArray = array();

foreach ($array as $dato){
	$tmpArray[]=$dato;
}
if ($connect->connect_errno) {
		echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	} else{
        //Consulta de inserción en la base de datos.										
		$query = "INSERT INTO Interes_turistico(nombre,direccion,descripcion,tipo,latitud,longitud,fechaConstruccion,fechaRehabilitacion) VALUES ('$tmpArray[0]','$tmpArray[1]','$tmpArray[2]','$tmpArray[3]','$tmpArray[4]','$tmpArray[5]','$tmpArray[6]','$tmpArray[7]')";
		
		if(mysqli_query($connect,$query)){
        	echo "Registro grabado correctamente: ".$query ;
		}else{
			echo "Error al grabar el registro: ".$query ;
		}
		$connect->close();
	}
?>