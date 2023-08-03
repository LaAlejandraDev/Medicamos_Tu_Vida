console.log("Hola desde JavaScript PRODUCTOS")

let indexProductoSeleccionado;
let productos = [];

fetch("productos/dataProductos.json")
        .then(response =>{
            return response.json();
        })
        .then(function(jsondata){
                productos = jsondata;
                console.log(productos);
                loadTabla();
            }            
        );
export function addProductos(){
            let idProducto,
                nombre,
                nombreGene,
                formaFarma,
                unidadMe,
                presenta,
                princiInca,
                contraIndi,
                concentra,
                unidades,
                precio,
                foto,
                ruta,
                codigoBarras,
                estatus;
    
            idProducto = document.getElementById("txtProduId").value;
            nombre = document.getElementById("txtNombre").value;
            nombreGene = document.getElementById("txtNombreGe").value;
            formaFarma = document.getElementById("txtFormaFarma").value;
            unidadMe = document.getElementById("txtUnidadMe").value;
            presenta = document.getElementById("txtPresenta").value;
            princiInca = document.getElementById("txtPrinciIn").value;
            contraIndi = document.getElementById("txtContra").value;
            concentra = document.getElementById("txtConcentra").value;
            unidades = document.getElementById("txtUnidadesEn").value;
            precio = document.getElementById("txtPrecioUni").value;
            foto = document.getElementById("imgAdd").value;
            ruta = document.getElementById("txtRutaFo").value;
            codigoBarras = document.getElementById("txtCodigoBa").value;
            
            
            let producto = {};
            producto.idVenta=  "RF03";
            producto.nombre = nombre;
            producto.nombreGene = nombreGene;
            producto.formaFarma = formaFarma;
            producto.unidadMe = unidadMe;
            producto.presenta = presenta;
            producto.princiInca = princiInca;
            producto.contraIndi = contraIndi;
            producto.concentra = concentra;
            producto.unidades = unidades;
            producto.precio = precio;
            producto.foto = foto;
            producto.ruta = ruta;
            producto.codigoBarras = codigoBarras;
            producto.estatus = "Activo";
            productos.push(producto);
            clean();
            loadTabla();
}
export function loadTabla(){
    let cuerpo = "";
    productos.forEach(function (producto){
        let registro =  
                '<tr onclick="moduloProductos.selectProductos('+ productos.indexOf(producto) +');">'+
                '<td>' + producto.nombre + '</td>' +
                '<td>' + producto.nombreGene + '</td>' +
                '<td>' + producto.formaFarma + '</td>' +
                '<td>' + producto.unidadMe + '</td>' +
                '<td>' + producto.presenta + '</td>' +
                '<td>' + producto.princiInca + '</td>' +
                '<td>' + producto.contraIndi + '</td>' +
                '<td>' + producto.concentra + '</td>' +
                '<td>' + producto.unidades + '</td>' +
                '<td>' + producto.precio + '</td>' +
                '<td>' + producto.foto + '</td>' +
                '<td>' + producto.ruta + '</td>' +
                '<td>' + producto.codigoBarras + '</td>'+
                '<td>' + producto.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
    
}
export function selectProductos(index){
    document.getElementById("txtProduId").value = productos[index].idProducto;
    document.getElementById("txtNombre").value = productos[index].nombre;
    document.getElementById("txtNombreGe").value = productos[index].nombreGene;
    document.getElementById("txtFormaFarma").value = productos[index].formaFarma;
    document.getElementById("txtUnidadMe").value = productos[index].unidadMe;
    document.getElementById("txtPresenta").value = productos[index].presenta;
    document.getElementById("txtPrinciIn").value = productos[index].princiInca;
    document.getElementById("txtContra").value = productos[index].contraIndi;
    document.getElementById("txtConcentra").value = productos[index].concentra;
    document.getElementById("txtUnidadesEn").value = productos[index].unidades;
    document.getElementById("txtPrecioUni").value = productos[index].precio;
    document.getElementById("imgAdd").value = productos[index].foto;
    document.getElementById("txtRutaFo").value = productos[index].ruta;
    document.getElementById("txtCodigoBa").value = productos[index].codigoBarras;
            
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductoSeleccionado = index;
}

export function clean(){
    document.getElementById("txtProduId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtNombreGe").value = "";
    document.getElementById("txtFormaFarma").value = "";
    document.getElementById("txtUnidadMe").value = "";
    document.getElementById("txtPresenta").value = "";
    document.getElementById("txtPrinciIn").value = "";
    document.getElementById("txtContra").value = "";
    document.getElementById("txtConcentra").value = "";
    document.getElementById("txtUnidadesEn").value = "";
    document.getElementById("txtPrecioUni").value = "";
    document.getElementById("imgAdd").value = "";
    document.getElementById("txtRutaFo").value = "";
    document.getElementById("txtCodigoBa").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

export function updateProductos(){
    let idProducto,
                nombre,
                nombreGene,
                formaFarma,
                unidadMe,
                presenta,
                princiInca,
                contraIndi,
                concentra,
                unidades,
                precio,
                foto,
                ruta,
                codigoBarras,
                estatus;
    
            idProducto = document.getElementById("txtProduId").value;
            nombre = document.getElementById("txtNombre").value;
            nombreGene = document.getElementById("txtNombreGe").value;
            formaFarma = document.getElementById("txtFormaFarma").value;
            unidadMe = document.getElementById("txtUnidadMe").value;
            presenta = document.getElementById("txtPresenta").value;
            princiInca = document.getElementById("txtPrinciIn").value;
            contraIndi = document.getElementById("txtContra").value;
            concentra = document.getElementById("txtConcentra").value;
            unidades = document.getElementById("txtUnidadesEn").value;
            precio = document.getElementById("txtPrecioUni").value;
            foto = document.getElementById("imgAdd").value;
            ruta = document.getElementById("txtRutaFo").value;
            codigoBarras = document.getElementById("txtCodigoBa").value;
            
            
            let producto = {};
            producto.idVenta=  "RF03";
            producto.nombre = nombre;
            producto.nombreGene = nombreGene;
            producto.formaFarma = formaFarma;
            producto.unidadMe = unidadMe;
            producto.presenta = presenta;
            producto.princiInca = princiInca;
            producto.contraIndi = contraIndi;
            producto.concentra = concentra;
            producto.unidades = unidades;
            producto.precio = precio;
            producto.foto = foto;
            producto.ruta = ruta;
            producto.codigoBarras = codigoBarras;
            producto.estatus = "Activo";
            productos[indexProductoSeleccionado] = producto;
            clean();
            loadTabla();
}        

export function deleteProductos(){
    productos[indexProductoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}