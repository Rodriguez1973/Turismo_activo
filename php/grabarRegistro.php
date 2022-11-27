<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include('conexionBd.php');
//Recibe el array con los datos JSON.
$contenido = $_POST['Todo'];
//Acondicionamiento de la cadena para ser tratada.
$contenido= str_replace("\\","", $contenido);
//Se decodifican los datos JSON.
$array = json_decode($contenido, true);
//Extracción de los datos.
$tmpArray = array();
foreach ($array as $dato){
	$tmpArray[]=$dato;
}
//Si hay error en la conexión.
if ($connect->connect_errno) {
		echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	//Si no hay error en la conexión.
	} else{
        //Consulta de inserción en la base de datos.										
		$query = "INSERT INTO Interes_turistico(nombre,direccion,descripcion,tipo,latitud,longitud,fechaConstruccion,fechaRehabilitacion) VALUES ('$tmpArray[0]','$tmpArray[1]','$tmpArray[2]','$tmpArray[3]','$tmpArray[4]','$tmpArray[5]','$tmpArray[6]','$tmpArray[7]')";
		//Si la consulta se ha realizado correctamente.
		if(mysqli_query($connect,$query)){
        	echo "Registro grabado correctamente. ".$query ;
			//Si la consulta no se ha realizado correctamente.
		}else{
			echo "Error al grabar el registro. ".$query ;
		}
		$connect->close();
	}
?>