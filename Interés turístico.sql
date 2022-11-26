use s022045b_Rodriguez_2223;
drop table if exists Interes_turistico;
create table Interes_turistico(
	id int(10) AUTO_INCREMENT PRIMARY KEY,
	nombre varchar(50) not null,
    direccion varchar(300),
	descripcion varchar(2000),
    tipo varchar(15) not null,
    latitud varchar(20) not null,
    longitud varchar(20) not null,
    fechaConstruccion date not null,
    fechaRehabilitacion date not null
);