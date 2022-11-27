/*
Proyecto realizado por: José A. Rodríguez López-->
Fecha: 26/11/2022
*/

let elementosTuristicos = new Array() //Crea un array para registrar los elementos turísticos.
let editor=null //Declaración del objeto del editor de texto.

//-------------------------------------------------------------------------------------------------
//Se crean las referencias de los objetos del formulario.
const bGrabar = document.getElementById('bGrabar')
const bPdf = document.getElementById('bPdf')
const bEditor = document.getElementById('bEditor')
const iNombre = document.getElementById('iNombre')
const iDireccion = document.getElementById('iDireccion')
const iDescripcion = document.getElementById('iDescripcion')
const sTipo = document.getElementById('sTipo')
const iLatitud = document.getElementById('iLatitud')
const iLongitud = document.getElementById('iLongitud')
const iFechaConstruccion = document.getElementById('iFechaConstruccion')
const iFechaRehabilitacion = document.getElementById('iFechaRehabilitacion')

//--------------------------------------------------------------------------------------------------
//Definición de eventos de los objetos.
bGrabar.addEventListener('click', grabarRegistro, false) //Evento click sobre el botón Grabar datos.
bPdf.addEventListener('click', crearPdf, false) //Evento click sobre el botón Crear PDF.
bEditor.addEventListener('click', activarEditor, false) //Evento click sobre el botón Editor On/Off.
iNombre.addEventListener('blur', validarDatos, false) //Evento blur dobre el input iNombre.
iDireccion.addEventListener('blur', validarDatos, false) //Evento blur sobre el input iDescripcion.
iDescripcion.addEventListener('blur', validarDatos, false) //Evento blur sobre el input iDescripcion.
iLatitud.addEventListener('blur', validarDatos, false) //Evento blur sobre el input iLatitud.
iLongitud.addEventListener('blur', validarDatos, false) //Evento blur sobre el input iLongitud.
iFechaConstruccion.addEventListener('blur', validarDatos, false) //Evento blur sobre el input iFechaConstruccion.
iFechaRehabilitacion.addEventListener('blur', validarDatos, false) //Evento blur dobre el input iFechaRehabilitacion.
iNombre.addEventListener(
  'focus',
  () => {
    iNombre.select()
  },
  false,
) //Selecciona todo el contenido de iNombre al tomar el foco.
iDireccion.addEventListener(
  'focus',
  () => {
    iDireccion.select()
  },
  false,
) //Selecciona todo el contenido de iDireccion al tomar el foco.
iLatitud.addEventListener(
  'focus',
  () => {
    iLatitud.select()
  },
  false,
) //Selecciona todo el contenido de iLatitud al tomar el foco.
iLongitud.addEventListener(
  'focus',
  () => {
    iLongitud.select()
  },
  false,
) //Selecciona todo el contenido de iLongitud al tomar el foco.
iFechaConstruccion.addEventListener(
  'focus',
  () => {
    iFechaConstruccion.select()
  },
  false,
) //Selecciona todo el contenido de iFechaConstruccion al tomar el foco.
iFechaRehabilitacion.addEventListener(
  'focus',
  () => {
    iFechaRehabilitacion.select()
  },
  false,
) //Selecciona todo el contenido de iFechaRehabilitacion al tomar el foco.

//--------------------------------------------------------------------------------------------------
//Clase que modela los objetos de tipo elementoTuristico.
class elementoTuristico {
  //Constructor de objetos tipo elementoTuristico.
  constructor(
    nombre,
    direccion,
    descripcion,
    tipo,
    latitud,
    longitud,
    fechaConstruccion,
    fechaRehabilitacion,
  ) {
    validarDatos(
      nombre,
      direccion,
      descripcion,
      tipo,
      latitud,
      longitud,
      fechaConstruccion,
      fechaRehabilitacion,
    )
    this.nombre = nombre
    this.direccion = direccion
    this.descripcion = descripcion
    this.tipo = tipo
    this.latitud = latitud
    this.longitud = longitud
    this.fechaConstruccion = fechaConstruccion
    this.fechaRehabilitacion = fechaRehabilitacion
  }
}

//--------------------------------------------------------------------------------------------------
//Función que evalua que lo elementos sean válidosel patrón
function validarDatos(evt) {
  let validado = true
  console.log(evt.target.id)
  //Valida el nombre.
  if (evt.target.id === 'iNombre' || evt.target.id === 'bGrabar') {
    let patron = /(?=^.{1,50}$)[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+/
    let resultado = patron.test(iNombre.value.trim())
    console.log('Resutado Chequeo:' + resultado)
    if (!resultado) {
      document.getElementById('iNombre').style.color = 'red'
      document.getElementById('iNombre').style.borderColor = 'red'
      document.getElementById('iNombre').focus()
      validado = false
    } else {
      document.getElementById('iNombre').style.color = 'black'
      document.getElementById('iNombre').style.borderColor = 'black'
    }
  }

  //Valida el tipo.
  if (evt.target.id === 'bGrabar') {
    if (sTipo.value === '') {
      document.getElementById('sTipo').style.color = 'red'
      document.getElementById('sTipo').style.borderColor = 'red'
      document.getElementById('sTipo').focus()
      validado = false
    } else {
      document.getElementById('sTipo').style.color = 'black'
      document.getElementById('sTipo').style.borderColor = 'black'
    }
  }

  //Valida la latitud.
  if (evt.target.id === 'iLatitud' || evt.target.id === 'bGrabar') {
    var patron = /^[-]?\d+[\.]?\d*$/
    var resultado = patron.test(iLatitud.value.trim())
    console.log('Resultado Chequeo:' + resultado)
    if (!resultado || iLatitud.value < -90 || iLatitud.value > 90) {
      document.getElementById('iLatitud').style.color = 'red'
      document.getElementById('iLatitud').style.borderColor = 'red'
      document.getElementById('iLatitud').focus()
      validado = false
    } else {
      document.getElementById('iLatitud').style.color = 'black'
      document.getElementById('iLatitud').style.borderColor = 'black'
    }
  }

  //Valida la longitud.
  if (evt.target.id === 'iLongitud' || evt.target.id === 'bGrabar') {
    var patron = /^[-]?\d+[\.]?\d*$/
    var resultado = patron.test(iLongitud.value.trim())
    console.log('Resultado Chequeo:' + resultado)
    if (!resultado || iLongitud.value < -180 || iLongitud.value > 180) {
      document.getElementById('iLongitud').style.color = 'red'
      document.getElementById('iLongitud').style.borderColor = 'red'
      document.getElementById('iLongitud').focus()
      validado = false
    } else {
      document.getElementById('iLongitud').style.color = 'black'
      document.getElementById('iLongitud').style.borderColor = 'black'
    }
  }

  //Valida la fecha de construccion
  if (evt.target.id === 'iFechaConstruccion' || evt.target.id === 'bGrabar') {
    var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/
    var resultado = patron.test(iFechaConstruccion.value.trim())
    console.log('Resultado Chequeo:' + resultado)
    //Procesa fecha para comprobar que es menor o igual a la actual.
    let fechaConstruccion = iFechaConstruccion.value.replaceAll('-', '')
    fechaConstruccion =
      fechaConstruccion.substring(4) +
      fechaConstruccion.substring(2, 4) +
      fechaConstruccion.substring(0, 2)
    if (
      !resultado ||
      fechaConstruccion > obtenerFechaActual().replaceAll('-', '')
    ) {
      console.log(fechaConstruccion)
      console.log(obtenerFechaActual())
      document.getElementById('iFechaConstruccion').style.color = 'red'
      document.getElementById('iFechaConstruccion').style.borderColor = 'red'
      document.getElementById('iFechaConstruccion').focus()
      validado = false
    } else {
      document.getElementById('iFechaConstruccion').style.color = 'black'
      document.getElementById('iFechaConstruccion').style.borderColor = 'black'
    }
  }

  //Valida la fecha de rehabilitación.
  if (evt.target.id === 'iFechaRehabilitacion' || evt.target.id === 'bGrabar') {
    var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/
    var resultado = patron.test(iFechaRehabilitacion.value.trim())
    console.log('Resultado Chequeo:' + resultado)
    //Procesa fecha para comprobar que es menor o igual a la actual.
    let fechaRehabilitacion = iFechaRehabilitacion.value.replaceAll('-', '')
    fechaRehabilitacion =
      fechaRehabilitacion.substring(4) +
      fechaRehabilitacion.substring(2, 4) +
      fechaRehabilitacion.substring(0, 2)
    if (
      !resultado ||
      fechaRehabilitacion > obtenerFechaActual().replaceAll('-', '')
    ) {
      document.getElementById('iFechaRehabilitacion').style.color = 'red'
      document.getElementById('iFechaRehabilitacion').style.borderColor = 'red'
      document.getElementById('iFechaRehabilitacion').focus()
      validado = false
    } else {
      document.getElementById('iFechaRehabilitacion').style.color = 'black'
      document.getElementById('iFechaRehabilitacion').style.borderColor =
        'black'
    }
  }
  return validado
}

//-------------------------------------------------------------------------------------------------
//Función para obtener la fecha actual.
function obtenerFechaActual() {
  let fecha = new Date() //Fecha actual
  let mes = fecha.getMonth() + 1 //Obtiene el mes
  let dia = fecha.getDate() //Obtiene el día.
  let ano = fecha.getFullYear() //Obtiene el año.
  if (dia < 10) dia = '0' + dia //Agrega cero si el menor de 10
  if (mes < 10) mes = '0' + mes //Agrega cero si el menor de 10
  return ano + '-' + mes + '-' + dia
}

//--------------------------------------------------------------------------------------------------
//Función que crea un PDF con los registros en la base de datos.
function crearPdf() {}

//--------------------------------------------------------------------------------------------------
//Función que abre o cierra el editor.
function activarEditor() {
    if (!editor) {
        editor = new nicEditor({fullPanel: true}).panelInstance('iDescripcion');
    } else {
        editor.removeInstance('iDescripcion');
        editor=null;
    }
}