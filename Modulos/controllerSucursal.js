let moduloPedidos;
let moduloVentas;
let moduloEmpleados;
let moduloProductos;
let moduloClientes;

console.log("Hola desde Controller Sucursal")

function cargarModuloVentas(){
    fetch("SUCURSAL/ventas/viewVentas.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../Modulos/ventas/controllerVentas.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}

function cargarModuloEmpleados(){
    fetch("SUCURSAL/empleados/requerimiento7.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../Modulos/CENTRAL/gestSucursal/JS/controlRequerimiento.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}

function cargarModuloClientes(){
    fetch("SUCURSAL/clientes/rf10.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../Modulos/SUCURSAL/clientes/rf10.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}


function cargarModuloProductos(){
    fetch("../Modulos/SUCURSAL/productos/gestProductos.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../Modulos/productos/gestProductos.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}









window.onload = inicializar;
function inicializar() {
    document.getElementById("enlace").addEventListener("click", permitirOCancelar, false);
}
function permitirOCancelar() {
    let enlace = document.getElementById("enlace");
    let valor = confirm("¿Estás seguro de cerrar sesión?");
    if (valor) {
        enlace.href = "Logins/LoginSucursal.html";
    }
}


