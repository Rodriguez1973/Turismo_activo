/*
Proyecto realizado por: José A. Rodríguez López-->
Fecha: 26/11/2022
*/

//--------------------------------------------------------------------------------------------------
//Función que graba un registro en la base de datos.
function grabarRegistro(evt) {
  if (validarDatos(evt)) {
    //Acondicionamos la fecha para escribirla en el formato de la base de datos.
    let fechaContruccion = iFechaConstruccion.value.split('-')
    fechaContruccion =
      fechaContruccion[2] +
      '-' +
      fechaContruccion[1] +
      '-' +
      fechaContruccion[0]
    let fechaRehabilitacion = iFechaRehabilitacion.value.split('-')
    fechaRehabilitacion =
      fechaRehabilitacion[2] +
      '-' +
      fechaRehabilitacion[1] +
      '-' +
      fechaRehabilitacion[0]

    let elementoTuristicoJSON =
      '{"' +
      'Nombre' +
      '":' +
      '"' +
      iNombre.value +
      '",' +
      '"' +
      'Direccion' +
      '":' +
      '"' +
      iDireccion.value +
      '",' +
      '"' +
      'Descripcion' +
      '":' +
      '"' +
      iDescripcion.value +
      '",' +
      '"' +
      'Tipo' +
      '":' +
      '"' +
      sTipo.value +
      '",' +
      '"' +
      'Latitud' +
      '":' +
      '"' +
      iLatitud.value +
      '",' +
      '"' +
      'Longitud' +
      '":' +
      '"' +
      iLongitud.value +
      '",' +
      '"' +
      'FechaConstruccion' +
      '":' +
      '"' +
      fechaContruccion +
      '",' +
      '"' +
      'FechaRehabilitacion' +
      '":' +
      '"' +
      fechaRehabilitacion +
      '"}'
   
    //Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. XMLHttpRequest es ampliamente usado en la programación AJAX.
    //A pesar de su nombre, XMLHttpRequest puede ser usado para recibir cualquier tipo de dato, no solo XML, y admite otros formatos además de HTTP (incluyendo file y ftp).
    let ajaxrequest = new XMLHttpRequest()
    let envio = 'Todo=' + elementoTuristicoJSON

    //Inicializa una solicitud recién creada o reinicializa una existente.
    ajaxrequest.open(
      'POST',
      'http://www.informaticasc.com/curso22_23/Rodriguez/php/grabarRegistro.php',
      true,
    )

    //Establece el valor encabezado de una solicitud HTTP. Al usarse, debe llamarse después de llamar a open(), pero antes de llamar a send(). Si se llama a este método varias veces con el mismo encabezado, los valores se combinan en un único encabezado de solicitud.setRequestHeader()
    ajaxrequest.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded',
    )
    //Cambio de estado a listo,
    ajaxrequest.onreadystatechange = function () {
      //alert(ajaxrequest.readyState + '--' + ajaxrequest.status)
      if (ajaxrequest.readyState === 4 && ajaxrequest.status === 200) {
        let datosLeidos = ajaxrequest.responseText
        //console.log('Datos Recibidos: ' + datosLeidos)
      }
    }

    ajaxrequest.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded',
    )
    //alert(envio)
    //Envía la solicitud al servidor.
    ajaxrequest.send(envio)
  }
}