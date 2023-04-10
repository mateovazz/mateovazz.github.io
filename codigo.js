window.addEventListener("load", inicio);

function inicio(){
    precargarDatos();
    ocultarTodo();
    cargarIdEmpresas();

    //------------------PUSHEAMOS ALGUNOS DATOS PARA QUE LA PRECARGA SEA COHERENTE Y EFICIENTE-----------------//

    // Pushea en los array de viajesBuques de los distintos usuarios los buques en cuestion
    arrayUsuarios[0].viajesBuques.push(arrayViajesBuques[0]);
    arrayUsuarios[0].viajesBuques.push(arrayViajesBuques[4]);
    arrayUsuarios[1].viajesBuques.push(arrayViajesBuques[1]);
    arrayUsuarios[2].viajesBuques.push(arrayViajesBuques[2]);
    arrayUsuarios[3].viajesBuques.push(arrayViajesBuques[3]);
    
    // Pushea en el array de solicitudesAsignadas de los distintos buques las solicitudes en cuestion.
    arrayViajesBuques[0].solicitudesAsignadas.push(arraySolicitudesDeCarga[4]);
    arrayViajesBuques[3].solicitudesAsignadas.push(arraySolicitudesDeCarga[2]);

    // Pushea en el array arrayEmpresasCantEnvios dentro del usuario en cuestion el id de la empresa que le confirmo el viaje.
    arrayUsuarios[8].arrayEmpresasCantEnvios.push("E1");

    //------------------PUSHEAMOS ALGUNOS DATOS PARA QUE LA PRECARGA SEA COHERENTE Y EFICIENTE-----------------//

    // BOTONES
    document.querySelector("#btnIrRegistro").addEventListener("click",irRegistro);
    document.querySelector("#btnRegistro").addEventListener("click",RegistroUsuario);
    document.querySelector("#btnIngresarLogin").addEventListener("click", iniciarSesion);
    document.querySelector("#btnLogout").addEventListener("click", cerrarSesion);
    document.querySelector("#btnSolicitudCarga").addEventListener("click", menuSolicitudCarga);
    document.querySelector("#btnCrearSolicitud").addEventListener("click", crearSolicitudCarga);
    document.querySelector("#btnSolicitudesPendientes").addEventListener("click", pasajeParametroVacio);
    document.querySelector("#btnBuscarCarga").addEventListener("click", busquedaDeSolicitud);
    document.querySelector("#btnCancelarSolicitudMenu").addEventListener("click", cargarSelectSolicitudesACancelar);
    document.querySelector("#btnCancelarSolicitud").addEventListener("click", cancelarSolicitud);
    document.querySelector("#btnCrearViajeMenu").addEventListener("click", mostrarDivDeCrearViaje);
    document.querySelector("#btnCrearViaje").addEventListener("click", crearViajeBuque);
    document.querySelector("#btnAsignarSolicitudMenu").addEventListener("click", mostrarDivAsignarSolicitudAViaje);
    document.querySelector("#btnAsginarSolicitudABuque").addEventListener("click", asignarSolicitudABuque);
    document.querySelector("#btnHabilitarImportadorMenu").addEventListener("click", mostrarDivHabilitarImportadores);
    document.querySelector("#btnHabilitarImportadores").addEventListener("click", habilitarImportador)
    document.querySelector("#btnListaCargaPeligrosaMenu").addEventListener("click", mostrarDivListaDeCargaPeligrosa);
    document.querySelector("#btnCargasPeligrosas").addEventListener("click", cargaPeligrosas);
    document.querySelector("#btnEstadisticasMenu").addEventListener("click", mostrarDivEstadisticas);
    document.querySelector("#btnManifiestoDeCargaMenu").addEventListener("click", mostrarDivManifiestoDeCarga);
    document.querySelector("#btnManifiestoSelect").addEventListener("click", manifiestoDeCarga);
    document.querySelector("#btnRolloverMenu").addEventListener("click", mostrarDivRollover);
    document.querySelector("#btnRollover").addEventListener("click", rollover);
    
}


//================= PROCEDIMIENTOS =================//

function precargarDatos(){
    // usuarios empresa
    arrayUsuarios.push(new perfilUsuario("CHOLO TRANSPORTES", "cholo_transportes", "Cholo123", "E1"));
    arrayUsuarios.push(new perfilUsuario("FRANCO LOGISTICA", "franco_logistica", "Franco123", "E2"));
    arrayUsuarios.push(new perfilUsuario("MATEO IMPORTACIONES", "mateo_importaciones", "Mateo123", "E3"));
    arrayUsuarios.push(new perfilUsuario("DE SOSA SA", "desosa_sa", "DeSosa123", "E4"));
    // usuarios importadores
    arrayUsuarios.push(new perfilUsuario("PepeContenedores", "pepe12", "Pepe1234"));
    arrayUsuarios.push(new perfilUsuario("ErnestoContenedores", "ernesto12", "Ernesto1234"));
    arrayUsuarios.push(new perfilUsuario("JuanContenedores", "juan12", "Juan1234"));
    arrayUsuarios.push(new perfilUsuario("AgustinContenedores", "agustin12", "Agustin1234"));
    arrayUsuarios.push(new perfilUsuario("LeoMatiolli", "leo12", "Leo1234"));
    // Viajes de buque
    arrayViajesBuques.push(new nuevoViajeDeBuque("Francisco I", 50, "20230315", "E1"));
    arrayViajesBuques.push(new nuevoViajeDeBuque("Francisco II", 20, "20230214", "E2"));
    arrayViajesBuques.push(new nuevoViajeDeBuque("Francisco III", 4, "20230518", "E3"));
    arrayViajesBuques.push(new nuevoViajeDeBuque("Francisco II", 20, "20230427", "E4"));
    arrayViajesBuques.push(new nuevoViajeDeBuque("Francisco III", 4, "20230120", "E1"));
    // Solicitudes de carga
    arraySolicitudesDeCarga.push(new solicitudDeCarga("CARGA GENERAL", "ropa", "Shan", 25, "E1", "I0", "PepeContenedores", "pendiente"));
    arraySolicitudesDeCarga.push(new solicitudDeCarga("REFRIGERADO", "carne", "BsAs", 2, "E2", "I1", "ErnestoContenedores", "cancelada"));
    arraySolicitudesDeCarga.push(new solicitudDeCarga("CARGA PELIGROSA", "alcohol inflamable", "Sao", 7, "E4", "I2", "JuanContenedores", "pendiente"));
    arraySolicitudesDeCarga.push(new solicitudDeCarga("CARGA GENERAL", "juguetes", "Syd", 4, "E3", "I3", "AgustinContenedores", "ignorada"));
    arraySolicitudesDeCarga.push(new solicitudDeCarga("REFRIGERADO", "pollo", "BsAs", 2, "E1", "I4", "LeoMatiolli", "confirmada"));
    arraySolicitudesDeCarga.push(new solicitudDeCarga("CARGA GENERAL", "juguetes", "Shan", 50, "E1", "I0", "PepeContenedores", "pendiente"));
}



function cerrarSesion(){
    document.querySelector("#LoginDiv").style.display = "block";
    document.querySelector("#btnLogout").style.display = "none";
    document.querySelector("#descripcionSolicitud").value = "";
    document.querySelector("#cantidadContenedores").value = "";
    document.querySelector("#parrafoSolicitudCarga").innerHTML = "";
    usuarioLogueado = null;
    ocultarBotonesMenuImportador();
    ocultarDivsMenuImportador();
    ocultarBotonesMenuEmpresa();
    ocultarDivsMenuEmpresa();
}

function menuSolicitudCarga(){
    ocultarDivsMenuImportador();
    ocultarMensajesMenuImportador();
    document.querySelector("#SolicitudDeCargaDiv").style.display = "block";
    
    if(usuarioLogueado.totalCancelaciones >= 3){
        document.querySelector("#btnCrearSolicitud").disabled=true;
    
    }else{
        document.querySelector("#btnCrearSolicitud").disabled=false;
    }
}

function ocultarTodo(){
    document.querySelector("#RegistroDiv").style.display = "none";
    document.querySelector("#btnLogout").style.display = "none";
    document.querySelector("#SolicitudDeCargaDiv").style.display = "none";
    document.querySelector("#btnSolicitudCarga").style.display = "none";
    document.querySelector("#btnSolicitudesPendientes").style.display = "none";
    document.querySelector("#solicitudesPendientesDiv").style.display = "none";
    document.querySelector("#buscarCargaDiv").style.display = "none";
    document.querySelector("#btnCancelarSolicitudMenu").style.display = "none";
    document.querySelector("#cancelarSolicitudDiv").style.display = "none";
    document.querySelector("#btnCrearViajeMenu").style.display = "none";
    document.querySelector("#crearViajeBuqueDiv").style.display = "none";
    document.querySelector("#btnAsignarSolicitudMenu").style.display = "none";
    document.querySelector("#asignarSolicitudABuqueDiv").style.display = "none";
    document.querySelector("#btnHabilitarImportadorMenu").style.display = "none";
    document.querySelector("#habilitarImportadoresDiv").style.display = "none";
    document.querySelector("#cargaPeligrosaDiv").style.display = "none";
    document.querySelector("#btnListaCargaPeligrosaMenu").style.display = "none";
    document.querySelector("#btnEstadisticasMenu").style.display = "none";
    document.querySelector("#estadisticasDiv").style.display = "none";
    document.querySelector("#btnManifiestoDeCargaMenu").style.display ="none";
    document.querySelector("#manifiestoDeCargaDiv").style.display = "none";
    document.querySelector("#btnRolloverMenu").style.display = "none";
    document.querySelector("#rolloverDiv").style.display = "none";
}

function menuImportador(){
    document.querySelector("#btnLogout").style.display = "block";
    document.querySelector("#btnSolicitudCarga").style.display = "block";
    document.querySelector("#btnSolicitudesPendientes").style.display = "block";
    document.querySelector("#btnCancelarSolicitudMenu").style.display = "block";
    document.querySelector("#btnEstadisticasMenu").style.display = "block";
}

function ocultarBotonesMenuImportador(){
    document.querySelector("#btnSolicitudCarga").style.display = "none";
    document.querySelector("#btnSolicitudesPendientes").style.display = "none";
    document.querySelector("#btnCancelarSolicitudMenu").style.display = "none";
    document.querySelector("#btnEstadisticasMenu").style.display = "none";
}

function ocultarDivsMenuImportador(){
    document.querySelector("#SolicitudDeCargaDiv").style.display = "none";
    document.querySelector("#solicitudesPendientesDiv").style.display = "none";
    document.querySelector("#buscarCargaDiv").style.display = "none";
    document.querySelector("#cancelarSolicitudDiv").style.display = "none";
    document.querySelector("#estadisticasDiv").style.display = "none";
}

function ocultarMensajesMenuImportador(){
    document.querySelector("#parrafoSolicitudCarga").innerHTML = "";
    document.querySelector("#parrafoCancelarSolicitud").innerHTML = "";
    document.querySelector("#parrafoEstadistica").innerHTML = "";
    document.querySelector("#parrafoEstadistica2").innerHTML = "";
    document.querySelector("#parrafoCancelarSolicitud").innerHTML = "";
}

function menuEmpresa(){
    document.querySelector("#btnLogout").style.display = "block";
    document.querySelector("#btnCrearViajeMenu").style.display = "block"
    document.querySelector("#btnAsignarSolicitudMenu").style.display = "block";
    document.querySelector("#btnHabilitarImportadorMenu").style.display = "block";
    document.querySelector("#btnListaCargaPeligrosaMenu").style.display = "block";
    document.querySelector("#btnManifiestoDeCargaMenu").style.display ="block";
    document.querySelector("#btnRolloverMenu").style.display = "block";
}

function ocultarBotonesMenuEmpresa(){
    document.querySelector("#btnCrearViajeMenu").style.display = "none";
    document.querySelector("#btnAsignarSolicitudMenu").style.display = "none";
    document.querySelector("#btnHabilitarImportadorMenu").style.display = "none";
    document.querySelector("#btnListaCargaPeligrosaMenu").style.display = "none";
    document.querySelector("#btnManifiestoDeCargaMenu").style.display ="none";
    document.querySelector("#btnRolloverMenu").style.display = "none";    
}

function ocultarDivsMenuEmpresa(){
    document.querySelector("#crearViajeBuqueDiv").style.display = "none";
    document.querySelector("#asignarSolicitudABuqueDiv").style.display = "none";
    document.querySelector("#habilitarImportadoresDiv").style.display = "none";
    document.querySelector("#cargaPeligrosaDiv").style.display = "none";
    document.querySelector("#manifiestoDeCargaDiv").style.display = "none";
    document.querySelector("#rolloverDiv").style.display = "none";
}

function ocultarMensajesMenuEmpresa(){
    document.querySelector("#parrafoCrearViajeBuque").innerHTML = "";
    document.querySelector("#parrafoAsignarViaje").innerHTML = "";
    document.querySelector("#parrafoHabilitarImportador").innerHTML = "";
    document.querySelector("#ParrafoRollover").innerHTML = "";
    
}

function irRegistro(){
    document.querySelector("#RegistroDiv").style.display = "block";
    document.querySelector("#LoginDiv").style.display = "none";
    document.querySelector("#txtUsuarioLogin").value = "";
    document.querySelector("#txtContraseñaLogin").value = "";
}

//-----------------ESTA FUNCION CARGA LOS SELECTS DEL MENU ROLLOVER - EMPRESA-----------------//
function mostrarDivRollover(){
    ocultarMensajesMenuEmpresa();
    ocultarDivsMenuEmpresa();
    document.querySelector("#rolloverDiv").style.display = "block";

    let selectSolicitudesConfirmadas = document.querySelector("#solicitudesConfirmadas");
    selectSolicitudesConfirmadas.innerHTML = "";

    for(let pos = 0; pos < arraySolicitudesDeCarga.length; pos++){

        if(arraySolicitudesDeCarga[pos].IdEmpresa == usuarioLogueado.id && arraySolicitudesDeCarga[pos].estadoSolicitud == "confirmada"){

            let objSolicitud = arraySolicitudesDeCarga[pos];
            selectSolicitudesConfirmadas.innerHTML += "<option value = '" + pos + "'>" + objSolicitud.Descripcion + " - Cantidad de contenedores: " + objSolicitud.CantContenedores + "</option>";
        }
    }

    let selectBuques = document.querySelector("#BuquesDisponibles");
    selectBuques.innerHTML = "";

    for(let pos2 = 0; pos2 < arrayViajesBuques.length; pos2++){

        if(arrayViajesBuques[pos2].idEmpresa == usuarioLogueado.id && arrayViajesBuques[pos2].cantidadDeContenedores > 0){
            
            let objBuque = arrayViajesBuques[pos2];
            selectBuques.innerHTML += "<option value = '" + pos2 + "'>" + objBuque.nombre + " - Cantidad de contenedores: " + objBuque.cantidadDeContenedores + "</option>";
        }
    }
}

//-----------------ESTA FUNCION CARGA EL SELECT DEL MENU MANIFIESTO DE CARGA - EMPRESA-----------------//
function mostrarDivManifiestoDeCarga(){
    ocultarMensajesMenuEmpresa();
    ocultarDivsMenuEmpresa();
    document.querySelector("#manifiestoDeCargaDiv").style.display = "block";

    let miSelect = document.querySelector("#manifiestoSelect");
    miSelect.innerHTML = "";

    for(let pos = 0; pos < usuarioLogueado.viajesBuques.length; pos++){

        let objetoBuque = usuarioLogueado.viajesBuques[pos];
        miSelect.innerHTML += "<option value = '" + pos + "'>" + objetoBuque.nombre + " - Cantidad de contenedores: " + objetoBuque.cantidadDeContenedores + "</option>";
    }
}

//-----------------ESTA FUNCION CARGA LA TABLA MENU MANIFIESTO DE CARGA A PARTIR DEL BUQUE SELECCIONADO - EMPRESA-----------------//
function manifiestoDeCarga(){
    let posSelectBuque = document.querySelector("#manifiestoSelect").value;
    let objBuque = usuarioLogueado.viajesBuques[posSelectBuque];

    let tabla = "<table>";
    tabla += "<tr><th>Origen</th><th>Cantidad de contenedores</th><th>Importador</th><th>Descripción</th><th>Tipo de mercadería</th></tr>";

    for(let pos = 0; pos < objBuque.solicitudesAsignadas.length; pos++){

        tabla += "<tr><td>"+ objBuque.solicitudesAsignadas[pos].PuertoOrigen +"</td><td>"+ objBuque.solicitudesAsignadas[pos].CantContenedores +"</td><td>"+ objBuque.solicitudesAsignadas[pos].nombreImportador +"</td><td>"+ objBuque.solicitudesAsignadas[pos].Descripcion +"</td><td>"+ objBuque.solicitudesAsignadas[pos].TipoMercaderia +"</td></tr>";
    }
    
    document.querySelector("#manifiestoTabla").innerHTML = tabla;
}

//-----------------ESTA FUNCION MUESTRA EL CONTENIDO DEL DIV DEL MENU CREAR VIAJE - IMPORTADOR-----------------//
function mostrarDivDeCrearViaje(){
    ocultarDivsMenuEmpresa();
    ocultarMensajesMenuEmpresa();
    document.querySelector("#crearViajeBuqueDiv").style.display = "block";
}

//-----------------ESTA FUNCION CARGA LOS SELECTS DEL MENU ASIGNAR SOLICITUD A VIAJE - EMPRESA-----------------//
function mostrarDivAsignarSolicitudAViaje(){
    ocultarMensajesMenuEmpresa();
    ocultarDivsMenuEmpresa();
    document.querySelector("#asignarSolicitudABuqueDiv").style.display = "block";

    let selectSolicitudes = document.querySelector("#cargarSolicitudesSelect");
    selectSolicitudes.innerHTML = "";

    for(let pos = 0; pos < arraySolicitudesDeCarga.length; pos++){
        let posDeSolicitud = pos;

        if(arraySolicitudesDeCarga[pos].IdEmpresa == usuarioLogueado.id && arraySolicitudesDeCarga[pos].estadoSolicitud == "pendiente"){
            selectSolicitudes.innerHTML += "<option value = '" + posDeSolicitud + "'>" + arraySolicitudesDeCarga[pos].Descripcion + " - Numero de contenedores: " + arraySolicitudesDeCarga[pos].CantContenedores + "</option>";
        }
    }

    let selectViajes = document.querySelector("#cargarViajesDeBuqueSelect");
    selectViajes.innerHTML = "";

    for(let posA = 0; posA < arrayViajesBuques.length; posA++){
        
        let objetoViajes = arrayViajesBuques[posA];
        let posDeSolicitudDos = posA;

        if(arrayViajesBuques[posA].idEmpresa == usuarioLogueado.id){

            selectViajes.innerHTML += "<option value = '" + posDeSolicitudDos + "'>" + objetoViajes.nombre + " - Contenedores disponibles: " + objetoViajes.cantidadDeContenedores + "</option>";
        }

    }
}

//-----------------ESTA FUNCION CARGA EL SELECT DEL MENU HABILITAR IMPORTADORES - EMPRESA-----------------//
function mostrarDivHabilitarImportadores(){
    ocultarMensajesMenuEmpresa();
    ocultarDivsMenuEmpresa();
    document.querySelector("#habilitarImportadoresDiv").style.display = "block";

    let miSelect = document.querySelector("#habilitarImportadoresSelect");
    miSelect.innerHTML = "";

    for(let pos = 0; pos < arrayImportadoresDeshabilitados.length; pos++){

        let objetoImportador = arrayImportadoresDeshabilitados[pos];
        miSelect.innerHTML += "<option value = '" + pos + "'>" + objetoImportador.nombre + " - Usuario: " + objetoImportador.usuario + "</option>";
    }
}

//-----------------ESTA FUNCION CARGA EL SELECT DEL MENU LISTA DE CARGA PELIGROSA - EMPRESA-----------------//
function mostrarDivListaDeCargaPeligrosa(){
    ocultarMensajesMenuEmpresa();
    ocultarDivsMenuEmpresa();
    document.querySelector("#cargaPeligrosaDiv").style.display = "block";

    let miSelect = document.querySelector("#viajesDeBuquesSelect");
    miSelect.innerHTML = "";

    for(let pos = 0; pos < usuarioLogueado.viajesBuques.length; pos++){

        let objetoBuque = usuarioLogueado.viajesBuques[pos];

        miSelect.innerHTML += "<option value = '" + pos + "'>" + objetoBuque.nombre + " - Cantidad de contenedores: " + objetoBuque.cantidadDeContenedores + "</option>";
    }
}

//-----------------ESTA FUNCION CARGA EL ESTADO DE LA SOLICITUD A IGNORADA-----------------//
function cambiarEstadoAIgnorada(idImportador){

    for(let pos = 0; pos < arraySolicitudesDeCarga.length; pos++){

        if(arraySolicitudesDeCarga[pos].IdImportador == arrayImportadoresDeshabilitados[idImportador].id){
            arraySolicitudesDeCarga[pos].estadoSolicitud = "ignorada";
        }
    }
}

//================= ARRAYS & VARIABLES GLOBALES =================//

// Arrays
let arrayUsuarios = [];
let arraySolicitudesDeCarga = [];
let arrayViajesBuques = [];
let arrayImportadoresDeshabilitados = [];

// Variables globales
let usuarioLogueado = null;

//================= FUNCIONES QUE VALIDAN DATOS =================//

//-----------------ESTA FUNCION VERIFICA SI EL USUARIO INGRESADO EXISTE O NO-----------------//
function existeUsuario(usuarioIngresado){
    let existe= false;
    
    // Recorre el array y verifica que el usuario a ingresar no este en la lista.
    for(let pos=0;pos<arrayUsuarios.length&& !existe;pos++){
        if(arrayUsuarios[pos].usuario == usuarioIngresado){
            existe= true;
        }
    }
    return existe;
}

//-----------------ESTA FUNCION VERIFICA SI EL USUARIO INGRESADO EXISTE O NO Y SI LA CONTRASENA ES VALIDA PARA REGISTRAR AL USUARIO-----------------//
function agregarUsuario(nombre, usuario, contraseña, tipo){
    let ok = false;

    // Si el usuario no existe, lo agrega.
    if(!existeUsuario(usuario) && contraseñaValida(contraseña)){
        arrayUsuarios.push(new perfilUsuario(nombre, usuario, contraseña, tipo));
        ok = true;
    }
    return ok;
}

//-----------------ESTA FUNCION VERIFICA SI LA CONTRASENA ES VALIDA Y CUMPLE LOS REQUISITOS-----------------//
function contraseñaValida(contraseña){
    let ok = false;
    let mayus=0
    let minus=0
    let num=0
    
    // Verifica que la contraseña cumpla con los requisitos.
    if(contraseña.length >= 5){
        for(let pos=0; pos<contraseña.length;pos++){
            let caracter= contraseña.charAt(pos)
            
            if(caracter.charCodeAt() >= 65 && caracter.charCodeAt()<=90){
                mayus++;
            
            }else if(caracter.charCodeAt() >=97 && caracter.charCodeAt()<=122){
                minus++; 
            
            }else if(caracter.charCodeAt()>=48 && caracter.charCodeAt()<=57){
                num++;
            }
        }
    }
    if(mayus>=1 && minus>=1 && num>=1){
        ok=true
    }
    return ok
}

//-----------------ESTA FUNCION RETORNA LA POSICION DEL USUARIO BUSCADO-----------------//
function buscarUsuario(usuarioIngresado){
    let posBuscada = -1;
 
    // Nos retorna la posicion del usuario buscado, si retorna -1 no se encuentra en la lista.
    for(let i = 0; i < arrayUsuarios.length; i++){

        if(arrayUsuarios[i].usuario == usuarioIngresado){
            posBuscada = i;
        }
    }
    return posBuscada;
}

//-----------------ESTA FUNCION RETORNA SI EL USUARIO ES DE TIPO I(IMPORTADOR) O DE TIPO E(EMPRESA)-----------------//
function tipoDeUsuario(usuarioIngresado){
    let tipoUsuario = "I";
    //Nos retorna el tipo de usuario a traves de la letra I = importador o E = Empresa
    if(arrayUsuarios[buscarUsuario(usuarioIngresado)].id.includes("E")){
        tipoUsuario = "E";
    }
    return tipoUsuario;
}


// Esta funcion innvoca y le pasa como parametro un vacio cuando se hace click en el boton del menu: solicitudes pendientes; a la funcion consultarSolicitudesPendientes().
function pasajeParametroVacio(){
    ocultarMensajesMenuImportador();
    consultarSolicitudesPendientes("");
}

// Esta funcion innvoca y le pasa como parametro lo que ingrese el usuario al buscar la solicitud; a la funcion consultarSolicitudesPendientes().
function busquedaDeSolicitud(){
    let palabraClave = document.querySelector("#palabraClave").value;
    consultarSolicitudesPendientes(palabraClave);
}

// Esta funcion se encarga de armar la tabla con las solicitudes pendientes.
function consultarSolicitudesPendientes(filtro){
    ocultarDivsMenuImportador();
    document.querySelector("#buscarCargaDiv").style.display = "block";
    document.querySelector("#solicitudesPendientesDiv").style.display = "block";
    document.querySelector("#parrafoSolicitudCarga").innerHTML = "";
    
    let tablaSolicitudes = "<table>";
    tablaSolicitudes += "<tr><th>Tipo de mercaderia</th><th>Descripcion</th><th>Puerto de origen</th><th>Cantidad de contenedores</th><th>Id empresa</th><th>Numero de solicitud</th></tr>";

    for(let pos = 0; pos < arraySolicitudesDeCarga.length; pos++){
        let objetoSolicitud = arraySolicitudesDeCarga[pos];
        
        if(objetoSolicitud.Descripcion.includes(filtro)){

            if(arraySolicitudesDeCarga[pos].IdImportador == usuarioLogueado.id && objetoSolicitud.estadoSolicitud == "pendiente"){
                
                tablaSolicitudes += "<tr><td>"+ objetoSolicitud.TipoMercaderia +"</td><td>"+ objetoSolicitud.Descripcion +"</td><td>"+ objetoSolicitud.PuertoOrigen +"</td><td>"+ objetoSolicitud.CantContenedores +"</td><td>"+ objetoSolicitud.IdEmpresa +"</td><td>"+ objetoSolicitud.NumeroDeSolicitud +"</td></tr>";
            }
        }
    }
    document.querySelector("#solicitudesPendientesDiv").innerHTML = tablaSolicitudes;
}

// Esta funcion carga los id de las empresas en el select que se encuentra dentro de crear solicitud.
function cargarIdEmpresas(){
    let miSelect = document.querySelector("#idEmpresa");

    for(let pos = 0; pos < arrayUsuarios.length; pos++){
        
        if(tipoDeUsuario(arrayUsuarios[pos].usuario) == "E"){
            let id = arrayUsuarios[pos].id;
            miSelect.innerHTML += "<option value = '" + id + "'>" + arrayUsuarios[pos].nombre + "</option>"
        }
    }
}

// Esta funcion carga el select de solicitudes disponibles a cancelar cuando se clickea el boton cancelar solicitudes en el menu.
function cargarSelectSolicitudesACancelar(){
    ocultarMensajesMenuImportador();
    ocultarDivsMenuImportador();
    document.querySelector("#cancelarSolicitudDiv").style.display = "block";
    document.querySelector("#parrafoSolicitudCarga").innerHTML = "";

    let miSelect = document.querySelector("#selectCancelarSolicitud");
    miSelect.innerHTML = "";
    
    for(let pos = 0; pos < arraySolicitudesDeCarga.length; pos++){
        
        if(arraySolicitudesDeCarga[pos].IdImportador == usuarioLogueado.id){

            if(arraySolicitudesDeCarga[pos].estadoSolicitud == "pendiente"){

                let objetoSolicitud = arraySolicitudesDeCarga[pos];
                let posSolicitudEnArray = pos;
                miSelect.innerHTML += "<option value = '" + posSolicitudEnArray + "'>" + objetoSolicitud.Descripcion + " - Numero de contenedores: " + objetoSolicitud.CantContenedores + "</option>"
            }
        }
    }
}

//-----------------ESTA FUNCION MUESTRA LAS ESTADISTICAS CORRESPONDIENTES AL USUARIO LOGUEADO-----------------//
function mostrarDivEstadisticas(){
    ocultarMensajesMenuImportador();
    ocultarDivsMenuImportador();
    tablaDeArribos();
    document.querySelector("#estadisticasDiv").style.display = "block";
    let mensaje = "";
    let mensaje2 = "";
    let totalSolicitudes = 0;
    let totalCanceladas = 0;
    let porcentajeDeCancelacion = 0;

    for(pos = 0; pos < arraySolicitudesDeCarga.length; pos++){

        if(arraySolicitudesDeCarga[pos].IdImportador == usuarioLogueado.id){

            if(arraySolicitudesDeCarga[pos].estadoSolicitud == "cancelada"){
                totalCanceladas++;
                totalSolicitudes++;
            }else{
                totalSolicitudes++;
            }
        }
    }
    porcentajeDeCancelacion = totalCanceladas * 100 / totalSolicitudes;

    if(porcentajeDeCancelacion >= 0){
        mensaje = `El porcentaje de cancelaciones contra el total de solicitudes es de: ${porcentajeDeCancelacion.toFixed(1)}%`;
        
    }else{
        mensaje = `No existen datos para realizar estadisticas`;
    }

    // Recorremos el array arrayEmpresasCantEnvios del usuario logueado(importador) para ver los id de las empresa con las que trabajo
    for(let pos2 = 0; pos2 < arrayUsuarios.length; pos2++){
            
            let cantEnvios = 0;
            let totalConfirmadas = 0;
            let porcentajeConfirmadas = 0;

        if(arrayUsuarios[pos2].id.includes("E")){
            let idEmpresa = arrayUsuarios[pos2].id;
            cantEnvios = enviosPorEmpresa(idEmpresa);
            totalConfirmadas = totalConfirmadasPorEmpresa();
            porcentajeConfirmadas = cantEnvios * 100 / totalConfirmadas;
            
            if(cantEnvios >= 1){

                mensaje2 += `La cantidad de envios con la empresa ${arrayUsuarios[pos2].nombre} es de: %${porcentajeConfirmadas.toFixed(1)}` + `<br>`;
            }
            if(mensaje2 == ""){
                mensaje2 = `No existen datos para realizar estadisticas`;
            }
        }
    }
    document.querySelector("#parrafoEstadistica").innerHTML = mensaje;
    document.querySelector("#parrafoEstadistica2").innerHTML = mensaje2;
}

// va a mostrar en orden todos los proximos arribos con la mercaderia de ese importador
function tablaDeArribos(){
    
    let tabla = "<table>";
    tabla += "<tr><th>Buque</th><th>Mercadería</th><th>Puerto de origen</th><th>Cantidad de contenedores</th><th>Fecha de llegada</th></tr>";

    arraySolicitudesDeCarga.sort(criterioPorFecha);
    
    for(pos = 0; pos < arraySolicitudesDeCarga.length; pos++){

        if(arraySolicitudesDeCarga[pos].IdImportador == usuarioLogueado.id && arraySolicitudesDeCarga[pos].estadoSolicitud == "confirmada"){


            let objSolicitud = arraySolicitudesDeCarga[pos];
            
            tabla += "<tr><td>"+ objSolicitud.buqueAsignado +"</td><td>"+ objSolicitud.Descripcion +"</td><td>"+ objSolicitud.PuertoOrigen +"</td><td>"+ objSolicitud.CantContenedores +"</td><td>"+ objSolicitud.fechaDeLlegada +"</td></tr>";
        }
    }
    document.querySelector("#tablaDeArribosDiv").innerHTML = tabla;
}

//-----------------ESTA FUNCION ORDENA LAS FECHAS DESDE LA MAS CERCANA A LA MAS LEJANA-----------------//
function criterioPorFecha(fecha1, fecha2){
    
    if(fecha1.fechaDeLlegada < fecha2.fechaDeLlegada){
        return -1;
    
    }else if(fecha1.fechaDeLlegada > fecha2.fechaDeLlegada){
        return 1;
    
    }else{
        return 0;
    }
}

//-----------------ESTA FUNCION CUENTA LA CANTIDAD TOTAL DE SOLICITUDES CONFIRMADAS DEL USUARIO LOGUEADO-----------------//
function totalConfirmadasPorEmpresa(){
    //este array recorre del importador logueado 
    let totalConfirmadas = 0

    for(pos = 0; pos < arraySolicitudesDeCarga.length; pos++){

        if(arraySolicitudesDeCarga[pos].IdImportador == usuarioLogueado.id && arraySolicitudesDeCarga[pos].estadoSolicitud == "confirmada"){
            totalConfirmadas++
            //tengo que conseguir el nombre de la empresa que me hizo la confirmacion, asi puedo sumar el envio a esa empresa 
        }
    }
    return totalConfirmadas;
}

//-----------------ESTA FUNCION CUENTA LA CANTIDAD DE ENVIOS CONFIRMADOS POR CADA EMPRESA PARA CADA USUARIO-----------------//
function enviosPorEmpresa(idEmpresa){
//id E1 por parametro
//usuarioLogueado.arrayEmpresasCantEnvios cada vez que el id E1 aparezca vas a sumar 1 al contador
    let cantEnvios = 0;

    for(let pos = 0; pos < usuarioLogueado.arrayEmpresasCantEnvios.length; pos++){

        if(idEmpresa == usuarioLogueado.arrayEmpresasCantEnvios[pos]){
            cantEnvios++;
        }
    }
    return cantEnvios;
}

//================= FUNCIONES DE INTERACCION CON EL USUARIO =================//

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE REGISTRARSE-----------------//
function RegistroUsuario(){
    let nombre = document.querySelector("#txtNombreRegistro").value;
    let usuario = document.querySelector("#txtUsuarioRegistro").value;
    let contraseña = document.querySelector("#txtContraseñaRegistro").value;
    let mensaje = "";

    if(nombre == "" || usuario == "" || contraseña == ""){
        mensaje = `Error: Se deben completar todos los campos.`
    }
    else if(agregarUsuario(nombre, usuario, contraseña)){
        //mensaje = "Registro exitoso."
        ocultarTodo();
        document.querySelector("#LoginDiv").style.display = "block";
        document.querySelector("#txtNombreRegistro").value = "";
        document.querySelector("#txtUsuarioRegistro").value = "";
        document.querySelector("#txtContraseñaRegistro").value = "";

    }
    else if(existeUsuario(usuario)){
        mensaje = "Error: Usuario existente, ingrese otro nombre de usuario."
        document.querySelector("#txtUsuarioRegistro").value = "";
    }

    else if(!contraseñaValida(contraseña)){
        mensaje = "Error: La contraseña debe contar con al menos: <br> - 5 caracteres <br> - 1 mayuscula <br> - 1 minuscula <br> - 1 numero"
        document.querySelector("#txtContraseñaRegistro").value = "";
    }

    document.querySelector("#parrafoRegistro").innerHTML = mensaje;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE INICIAR SESION-----------------//
function iniciarSesion(){
    let usuario = document.querySelector("#txtUsuarioLogin").value;
    let contraseñaIngresada = document.querySelector("#txtContraseñaLogin").value;
    let mensaje = "";

    if(usuario == "" || contraseñaIngresada == ""){
        mensaje = `Error: Se deben completar todos los campos.`
    
    }
    else if(existeUsuario(usuario) && arrayUsuarios[buscarUsuario(usuario)].contraseña == contraseñaIngresada){
        document.querySelector("#txtUsuarioLogin").value = "";
        document.querySelector("#txtContraseñaLogin").value = "";
        document.querySelector("#LoginDiv").style.display = "none";

        //una vez verificado que el usuario existe y ademas esta correctamente logueado nos quedamos con el usuario logueado en una variable global
        usuarioLogueado = arrayUsuarios[buscarUsuario(usuario)];

        if(tipoDeUsuario(usuario) == "I"){
            menuImportador();
        
        }else{
            menuEmpresa();
        }
        
    }
    else{
        mensaje = `Usuario y/o contraseña incorrecto.`
    }
    document.querySelector("#parrafoLogin").innerHTML = mensaje;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE CREAR UNA SOLICITUD DE CARGA-----------------//
function crearSolicitudCarga(){
    let tipoMercaderia = document.querySelector("#selectMercaderia").value;
    let descripcion = document.querySelector("#descripcionSolicitud").value;
    let puertoOrigen = document.querySelector("#puertosDeOrigen").value;
    let cantContenedores = Number(document.querySelector("#cantidadContenedores").value);
    let idEmpresa = document.querySelector("#idEmpresa").value;
    let idImportador = usuarioLogueado.id;
    let nombreImportador = usuarioLogueado.nombre;
    let mensaje = "";
    
    if(descripcion == "" || cantContenedores == "" || tipoMercaderia == ""){
        mensaje = "Debe completar todos los campos."
    
    }else{
        arraySolicitudesDeCarga.push(new solicitudDeCarga(tipoMercaderia, descripcion, puertoOrigen, cantContenedores, idEmpresa, idImportador, nombreImportador));
        usuarioLogueado.solicitudes.push(new solicitudDeCarga(tipoMercaderia, descripcion, puertoOrigen, cantContenedores, idEmpresa, idImportador, nombreImportador));
        mensaje = "Solicitud realizada con exito."
        document.querySelector("#descripcionSolicitud").value = "";
        document.querySelector("#cantidadContenedores").value = "";
        document.querySelector("#selectMercaderia").value = "";
    }
    document.querySelector("#parrafoSolicitudCarga").innerHTML = mensaje;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE CANCELAR UNA SOLICITUD DE CARGA-----------------//
function cancelarSolicitud(){
 
    let posDeSolicitud = document.querySelector("#selectCancelarSolicitud").value;
    arraySolicitudesDeCarga[posDeSolicitud].estadoSolicitud = "cancelada";
    let mensaje = `Solicitud cancelada con exito.`

    usuarioLogueado.totalCancelaciones++;

    if(usuarioLogueado.totalCancelaciones >= 3){

        if(usuarioLogueado.estado == "Habilitado"){
            
            usuarioLogueado.estado = "Deshabilitado";
            arrayImportadoresDeshabilitados.push(usuarioLogueado);
        }
    }
    document.querySelector("#parrafoCancelarSolicitud").innerHTML = mensaje;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE CREAR EL VIAJE DE UN BUQUE-----------------//
function crearViajeBuque(){
    let nombreDelBuque = document.querySelector("#txtNombreBuque").value;
    let cantContenedores = Number(document.querySelector("#txtCantidadMaxContenedores").value);
    let fechaDeLlegada = document.querySelector("#txtFechaLlegada").value;
    let mensaje = "";

    if(nombreDelBuque == "" || cantContenedores == "" || fechaDeLlegada == ""){
        mensaje = "Debe completar todos los campos."
    
    }else{
        arrayViajesBuques.push(new nuevoViajeDeBuque(nombreDelBuque, cantContenedores, fechaDeLlegada, usuarioLogueado.id));
        usuarioLogueado.viajesBuques.push(arrayViajesBuques[arrayViajesBuques.length - 1]);
        //usuarioLogueado.viajesBuques.push(new nuevoViajeDeBuque(nombreDelBuque, cantContenedores, fechaDeLlegada, usuarioLogueado.id));
        document.querySelector("#txtNombreBuque").value = "";
        document.querySelector("#txtCantidadMaxContenedores").value = "";
        document.querySelector("#txtFechaLlegada").value = "";
        document.querySelector("#txtFechaLlegada").value = "";
        
        mensaje = "Viaje creado con exito."
    }
    document.querySelector("#parrafoCrearViajeBuque").innerHTML = mensaje;
}

function buscarPosImportador(id){
    let posBuscada = -1;

    for(let pos = 0; pos < arrayUsuarios.length; pos++){

        if(arrayUsuarios[pos].id == id){
            posBuscada = pos;
        }
    }
    return posBuscada;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE ASIGNAR UNA SOLICITUD A UN BUQUE-----------------//
function asignarSolicitudABuque(){
    let posSelectSolicitudes = document.querySelector("#cargarSolicitudesSelect").value;
    let posSelectBuques = document.querySelector("#cargarViajesDeBuqueSelect").value;

    let mensaje = "";

    let contenedoresDisponibles = arrayViajesBuques[posSelectBuques].cantidadDeContenedores;
    let contenedoresSolicitud = arraySolicitudesDeCarga[posSelectSolicitudes].CantContenedores;
    
    if(contenedoresSolicitud <= contenedoresDisponibles && arrayUsuarios[buscarPosImportador(arraySolicitudesDeCarga[posSelectSolicitudes].IdImportador)].estado == "Habilitado"){
        
        let objetoSolicitud = arraySolicitudesDeCarga[posSelectSolicitudes];

        //  Asignacion la solicitud al array general del objeto viaje
        arrayViajesBuques[posSelectBuques].solicitudesAsignadas.push(objetoSolicitud);

        // Resta la cantidad de contendedores de la solicitud a la cantidad disponible
        arrayViajesBuques[posSelectBuques].cantidadDeContenedores -= arraySolicitudesDeCarga[posSelectSolicitudes].CantContenedores;
        
        // Cambia el estado de la solicitud a confirmada
        arraySolicitudesDeCarga[posSelectSolicitudes].estadoSolicitud = "confirmada";

        // Le agrega a la solicitud la misma fecha de llegada del buque
        let fechaOriginal = arrayViajesBuques[posSelectBuques].fechaDeLlegada;

        let fechaSinGuiones = fechaOriginal.replaceAll("-", "");

        // Asigna la fecha de llegada del buque a la solicitud de carga
        arraySolicitudesDeCarga[posSelectSolicitudes].fechaDeLlegada = fechaSinGuiones;

        arraySolicitudesDeCarga[posSelectSolicitudes].buqueAsignado = arrayViajesBuques[posSelectBuques].nombre;

        let IdImportadorSolicitud = arraySolicitudesDeCarga[posSelectSolicitudes].IdImportador;
        let IdEmpresaSolicitud = arraySolicitudesDeCarga[posSelectSolicitudes].IdEmpresa;
        
        
        // Agrega al arrayEmpresasCantEnvios del importador, el id de la empresa que confirmo la solicitud, cada vez que aparezca el id de la empresa en el array, significa
        // un envio realizado por la misma.
        for(let pos = 0; pos < arrayUsuarios.length; pos++){

            if(arrayUsuarios[pos].id == IdImportadorSolicitud){

                arrayUsuarios[pos].arrayEmpresasCantEnvios.push(IdEmpresaSolicitud);
            }
        }
        
        mensaje = "Solicitud asignada con exito."

    }else{
        mensaje = "La cantidad solicitada es mayor a la capacidad disponible en el buque. Porfavor busque otro buque con capacidad disponible o importador deshabilitado."
    }
    document.querySelector("#parrafoAsignarViaje").innerHTML = mensaje;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE HABILITAR UN IMPORTADOR-----------------//
function habilitarImportador(){
    let posImportadorDeshabilitado = document.querySelector("#habilitarImportadoresSelect").value;
    let mensaje = "";

    arrayImportadoresDeshabilitados[posImportadorDeshabilitado].estado = "Habilitado";
    arrayImportadoresDeshabilitados[posImportadorDeshabilitado].totalCancelaciones = 0;
    cambiarEstadoAIgnorada(posImportadorDeshabilitado);

    if(posImportadorDeshabilitado == 0){
        arrayImportadoresDeshabilitados.shift();
        mensaje = "Importador habilitado con exito."
    }else{
        arrayImportadoresDeshabilitados.splice(posImportadorDeshabilitado, posImportadorDeshabilitado);
        mensaje = "Importador habilitado con exito."
    }

    document.querySelector("#parrafoHabilitarImportador").innerHTML = mensaje;
}

//-----------------ESTA CARGA LA LISTA DE CARGAS PELIGROSAS A PARTIR DEL BUQUE SELECCIONADO EN EL SELECT-----------------//
function cargaPeligrosas(){
    let posDeBuque = document.querySelector("#viajesDeBuquesSelect").value;

    let objetoBuque = usuarioLogueado.viajesBuques[posDeBuque];

    let tablaCargaPeligrosa = "<table>";
    tablaCargaPeligrosa += "<tr><th>Tipo de mercaderia</th><th>Descripcion</th><th>Puerto de origen</th><th>Cantidad de contenedores</th><th>Id empresa</th><th>Numero de solicitud</th></tr>";

    for (pos=0; pos< objetoBuque.solicitudesAsignadas.length ; pos++){
        let objetoSolicitud= objetoBuque.solicitudesAsignadas[pos];
        
        if(objetoSolicitud.TipoMercaderia == "CARGA PELIGROSA"){
            tablaCargaPeligrosa += "<tr><td>"+ objetoSolicitud.TipoMercaderia +"</td><td>"+ objetoSolicitud.Descripcion +"</td><td>"+ objetoSolicitud.PuertoOrigen +"</td><td>"+ objetoSolicitud.CantContenedores +"</td><td>"+ objetoSolicitud.IdEmpresa +"</td><td>"+ objetoSolicitud.NumeroDeSolicitud +"</td></tr>";
        }
    }

    document.querySelector("#tablaCargaPeligrosaDiv").innerHTML = tablaCargaPeligrosa;
}

function buscarPosSolicitud(numeroDeSolicitud){
    let posBuscada = -1;
    let posBuque = document.querySelector("#BuquesDisponibles").value;

    for(let pos = 0; pos < arrayViajesBuques[posBuque].solicitudesAsignadas.length; pos++){

        if(arrayViajesBuques[posBuque].solicitudesAsignadas[pos].NumeroDeSolicitud == numeroDeSolicitud){
            posBuscada = pos;
        }
    }
    return posBuscada;
}

//-----------------ESTA FUNCION ES EL DIV MOSTRADO A LA HORA DE REASIGNAR UNA SOLICITUD A OTRO BUQUE-----------------//
function rollover(){
    let posBuque = document.querySelector("#BuquesDisponibles").value;
    let posSolicitud = document.querySelector("#solicitudesConfirmadas").value;
    let objBuque = arrayViajesBuques[posBuque];
    let objSolicitud = arraySolicitudesDeCarga[posSolicitud];
    let mensaje = "";
    
    if(buscarPosSolicitud(objSolicitud.NumeroDeSolicitud) != -1){

        if(objSolicitud.NumeroDeSolicitud == objBuque.solicitudesAsignadas[buscarPosSolicitud(objSolicitud.NumeroDeSolicitud)].NumeroDeSolicitud){
            mensaje = `La solicitud ya pertenece al buque seleccionado, por favor seleccione otro buque.`
    }

    }else if(objSolicitud.CantContenedores <= objBuque.cantidadDeContenedores){
        
        // ahora recorro el array de solicitudes asignadas en el objeto buque y le borro la que tenga mismo id que el objeto solicitud
        for(pos = 0; pos < arrayViajesBuques.length; pos++){
            let buqueRobado = arrayViajesBuques[pos];

            for(let pos2 = 0; pos2 < buqueRobado.solicitudesAsignadas.length; pos2++){

                if(buqueRobado.solicitudesAsignadas[pos2].NumeroDeSolicitud == arraySolicitudesDeCarga[posSolicitud].NumeroDeSolicitud){

                    if(pos2 == 0){
                        buqueRobado.cantidadDeContenedores += buqueRobado.solicitudesAsignadas[pos2].CantContenedores;
                        buqueRobado.solicitudesAsignadas.shift();
                    }else{
                        buqueRobado.cantidadDeContenedores += buqueRobado.solicitudesAsignadas[pos2].CantContenedores;
                        buqueRobado.solicitudesAsignadas.splice(pos2, pos2);
                    }
                }
            }
        }
        objBuque.solicitudesAsignadas.push(objSolicitud);
        objBuque.cantidadDeContenedores -= arraySolicitudesDeCarga[posSolicitud].CantContenedores;
        mensaje = "Solicitud reasignada con éxito"
    
    }else{
        mensaje = `La cantidad de contenedores es mayor al limite disponible.`
    }
    document.querySelector("#ParrafoRollover").innerHTML = mensaje;
}