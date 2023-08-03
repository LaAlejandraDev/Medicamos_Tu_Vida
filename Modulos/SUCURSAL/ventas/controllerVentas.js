console.log("Hola desde JavaScript VENTAS")

let indexVentaSeleccionado;
let ventas = [];

fetch("ventas/dataVentas.json")
        .then(response =>{
            return response.json();
        })
        .then(function(jsondata){
                ventas = jsondata;
                console.log(ventas);
                loadTabla();
            }            
        );

export function addVentas(){
    let idVenta,
        producto,
        cantidad,
        precio,
        fecha,
        hora,
        empleado,
        cliente;

    idVenta = document.getElementById("txtVentaId").value;
    producto = document.getElementById("txtProducto").value;
    cantidad = document.getElementById("txtCanti").value;
    precio = document.getElementById("txtPrecio").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    empleado = document.getElementById("txtEmpleado").value;
    cliente = document.getElementById("txtCliente").value;
    
    let venta = {};
    venta.idVenta=  "RF06";
    venta.producto = producto;
    venta.cantidad = cantidad;
    venta.precio = precio;
    venta.fecha = fecha;
    venta.hora = hora;
    venta.empleado = empleado;
    venta.cliente = cliente;
    venta.estatus = "Activo";
    ventas.push(venta);
    clean();
    loadTabla();
}

export function loadTabla(){
    let cuerpo = "";
    ventas.forEach(function (venta){
        let registro =  
                '<tr onclick="moduloVentas.selectVentas('+ ventas.indexOf(venta) +');">'+
                '<td>' + venta.producto + '</td>' +
                '<td>' + venta.cantidad + '</td>' +
                '<td>' + venta.precio + '</td>' +
                '<td>' + venta.fecha + '</td>' +
                '<td>' + venta.hora + '</td>' +
                '<td>' + venta.empleado + '</td>'+
                '<td>' + venta.cliente + '</td>'+
                '<td>' + venta.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
    
}

export function selectVentas(index){
    document.getElementById("txtVentaId").value = ventas[index].idVenta;
    document.getElementById("txtProducto").value = ventas[index].producto;
    document.getElementById("txtCanti").value = ventas[index].cantidad;
    document.getElementById("txtPrecio").value = ventas[index].precio;
    document.getElementById("txtFecha").value = ventas[index].fecha;
    document.getElementById("txtHora").value = ventas[index].hora;
    document.getElementById("txtEmpleado").value = ventas[index].empleado;
    document.getElementById("txtCliente").value = ventas[index].cliente;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexVentaSeleccionado = index;
}

export function clean(){
    document.getElementById("txtVentaId").value = "";
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCanti").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtFecha").value = "";
    document.getElementById("txtHora").value = "";
    document.getElementById("txtEmpleado").value = "";
    document.getElementById("txtCliente").value = "";
    
    document.getElementById("txtProducto").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexVentaSeleccionado = 0;
}

export function updateVentas(){
    let idVenta,
        producto,
        cantidad,
        precio,
        fecha,
        hora,
        empleado,
        cliente;

    idVenta = document.getElementById("txtVentaId").value;
    producto = document.getElementById("txtProducto").value;
    cantidad = document.getElementById("txtCanti").value;
    precio = document.getElementById("txtPrecio").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    empleado = document.getElementById("txtEmpleado").value;
    cliente = document.getElementById("txtCliente").value;
    
    let venta = {};
    venta.idVenta=  "RF06";
    venta.producto = producto;
    venta.cantidad = cantidad;
    venta.precio = precio;
    venta.fecha = fecha;
    venta.hora = hora;
    venta.empleado = empleado;
    venta.cliente = cliente;
    venta.estatus = "Activo";
    ventas[indexVentaSeleccionado] = venta;
    clean();
    loadTabla();
}

export function deleteVentas(){
    ventas[indexVentaSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

