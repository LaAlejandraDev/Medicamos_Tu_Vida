let moduloPedidos;
let moduloVentas;
let moduloProductos;

console.log("Hola desde Controller Central")

if (password === c && login === u) {
    Swal.fire('Bienvenido a SICEFA CENTRAL');
    window.location = "../Central.html";
}

function cargarModuloProductos() {
    fetch("CENTRAL/productos/viewProductos.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../Modulos/CENTRAL/productos/controllerProductos.js").then(
                    function (controller) {
                        moduloProductos = controller;
                    }
                );
            }
        );
}

function cargarModuloClientes() {
    fetch("CENTRAL/gestSucursal/gestionSuc.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../Modulos/CENTRAL/JS/ControlSucursal.js").then(
                    function (controller) {
                        moduloProductos = controller;
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
        enlace.href = "Logins/LoginCentral.html";
    }
}


