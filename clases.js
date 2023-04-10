
let idAutoGenerado = 0;

class perfilUsuario{
    constructor(pNombre, pUsuario, pContraseña, pId, pEstado, pFoto){

        let listaDeViajesDeBuque = [];
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.contraseña = pContraseña;
        this.id = pId;
        this.estado = pEstado;
        this.foto = pFoto;
        this.viajesBuques = listaDeViajesDeBuque;
        this.cantidad = 0;
        
        if(this.id == undefined){
            this.id = "I" + idAutoGenerado;
            idAutoGenerado++;
            this.estado = "Habilitado";
            let listaSolicitudesDeCarga = [];
            this.solicitudes = listaSolicitudesDeCarga;
            this.totalCancelaciones = 0;
            this.arrayEmpresasCantEnvios = new Array();
        }
    }
}

//numero auto generado para cada solicitud nueva de carga
let numAutoGen=1;
class solicitudDeCarga{
    constructor(pTipoMercaderia,pDescripcion,pPuertoOrigen,pCantContenedores,pIdEmpresa, pIdUsuarioLogueado, pNombreUsuarioLogueado, pEstadoSolicitud){

        this.TipoMercaderia = pTipoMercaderia;
        this.Descripcion = pDescripcion;
        this.PuertoOrigen = pPuertoOrigen;
        this.CantContenedores = pCantContenedores;
        this.IdEmpresa = pIdEmpresa;
        this.IdImportador = pIdUsuarioLogueado;
        this.nombreImportador = pNombreUsuarioLogueado;
        this.estadoSolicitud = pEstadoSolicitud; //puede ser ignorada o cancelada
        this.fechaDeLlegada = "no corresponde"; //la fecha de llegada corresponde unicamente cuando la solicitud es confirmada por una empresa.
        this.buqueAsignado = "sin asignar";
        if(this.estadoSolicitud == undefined){
            this.estadoSolicitud = "pendiente";
        
        }else if(this.estadoSolicitud == "confirmada"){
            this.fechaDeLlegada = "20230315";
            this.buqueAsignado = "Francisco I";     
        } 
        
        this.NumeroDeSolicitud = numAutoGen;
        numAutoGen++;
    }
}

let idDeViajeAuto = 1;
class nuevoViajeDeBuque{
    constructor(pNombre, pCantMaxDeContenedores, pFechaDeLlegada, pIdEmpresa){
        
        let ArrayViajesAsignados = [];
        this.nombre = pNombre;
        this.cantidadDeContenedores = pCantMaxDeContenedores;
        this.fechaDeLlegada = pFechaDeLlegada;
        this.idEmpresa = pIdEmpresa;
        this.cantidadMaxDeContenedores = pCantMaxDeContenedores;
        this.idViaje = idDeViajeAuto;
        //cambiar a solicitudesAsignadas
        this.solicitudesAsignadas = ArrayViajesAsignados;
        idDeViajeAuto++;
    }
}