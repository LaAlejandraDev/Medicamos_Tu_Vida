let clientes = [];
let indexClienteSeleccionado;

fetch("SUCURSAL/clientes/rf10.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        clientes = jsondata;
        console.log(clientes);
        loadTabla();
    });

export function addClientes() {
    let nombre,
        txtApt,
        txtAmt,
        txtgn,
        txtFnac,
        txtRFC,
        txtCURP,
        txtDmc,
        txtCP,
        txtCiu,
        txtEDO,
        txtTel,
        imgAdd;

    nombre = document.getElementById("txtNombre").value;
    txtApt = document.getElementById("txtApt").value;
    txtAmt = document.getElementById("txtAmt").value;
    txtgn = document.getElementById("txtgn").value;
    txtFnac = document.getElementById("txtFnac").value;
    txtRFC = document.getElementById("txtRFC").value;
    txtCURP = document.getElementById("txtCURP").value;
    txtDmc = document.getElementById("txtDmc").value;
    txtCP = document.getElementById("txtCP").value;
    txtCiu = document.getElementById("txtCiu").value;
    txtEDO = document.getElementById("txtEDO").value;
    txtTel = document.getElementById("txtTel").value;
    imgAdd = document.getElementById("imgAdd").value;

    let nuevoCliente = {
        idRegistro: "RF10",
        txtNombre: nombre,
        txtApt: txtApt,
        txtAmt: txtAmt,
        txtgn: txtgn,
        txtFnac: txtFnac,
        txtRFC: txtRFC,
        txtCURP: txtCURP,
        txtDmc: txtDmc,
        txtCP: txtCP,
        txtCiu: txtCiu,
        txtEDO: txtEDO,
        txtTel: txtTel,
        imgAdd: imgAdd
    };

    clientes.push(nuevoCliente);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        let registro =
            '<tr onclick="selectClientes(' +
            clientes.indexOf(cliente) +
            ');">' +
            "<td>" +
            cliente.txtNombre +
            "</td>" +
            "<td>" +
            cliente.txtApt +
            "</td>" +
            "<td>" +
            cliente.txtAmt +
            "</td>" +
            "<td>" +
            cliente.txtgn +
            "</td>" +
            "<td>" +
            cliente.txtFnac +
            "</td>" +
            "<td>" +
            cliente.txtRFC +
            "</td>" +
            "<td>" +
            cliente.txtCURP +
            "</td>" +
            "<td>" +
            cliente.txtDmc +
            "</td>" +
            "<td>" +
            cliente.txtCP +
            "</td>" +
            "<td>" +
            cliente.txtCiu +
            "</td>" +
            "<td>" +
            cliente.txtEDO +
            "</td>" +
            "<td>" +
            cliente.txtTel +
            "</td>" +
            "<td>" +
            cliente.imgAdd +
            "</td></tr>";
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

export function selectClientes(index) {
    document.getElementById("txtNombre").value = clientes[index].txtNombre;
    document.getElementById("txtApt").value = clientes[index].txtApt;
    document.getElementById("txtAmt").value = clientes[index].txtAmt;
    document.getElementById("txtgn").value = clientes[index].txtgn;
    document.getElementById("txtFnac").value = clientes[index].txtFnac;
    document.getElementById("txtRFC").value = clientes[index].txtRFC;
    document.getElementById("txtCURP").value = clientes[index].txtCURP;
    document.getElementById("txtDmc").value = clientes[index].txtDmc;
    document.getElementById("txtCP").value = clientes[index].txtCP;
    document.getElementById("txtCiu").value = clientes[index].txtCiu;
    document.getElementById("txtEDO").value = clientes[index].txtEDO;
    document.getElementById("txtTel").value = clientes[index].txtTel;
    document.getElementById("imgAdd").value = clientes[index].imgAdd;

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}

export function clean() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApt").value = "";
    document.getElementById("txtAmt").value = "";
    document.getElementById("txtgn").value = "";
    document.getElementById("txtFnac").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtCURP").value = "";
    document.getElementById("txtDmc").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtCiu").value = "";
    document.getElementById("txtEDO").value = "";
    document.getElementById("txtTel").value = "";
    document.getElementById("imgAdd").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateClientes() {
    let nombre,
        txtApt,
        txtAmt,
        txtgn,
        txtFnac,
        txtRFC,
        txtCURP,
        txtDmc,
        txtCP,
        txtCiu,
        txtEDO,
        txtTel,
        imgAdd;

    nombre = document.getElementById("txtNombre").value;
    txtApt = document.getElementById("txtApt").value;
    txtAmt = document.getElementById("txtAmt").value;
    txtgn = document.getElementById("txtgn").value;
    txtFnac = document.getElementById("txtFnac").value;
    txtRFC = document.getElementById("txtRFC").value;
    txtCURP = document.getElementById("txtCURP").value;
    txtDmc = document.getElementById("txtDmc").value;
    txtCP = document.getElementById("txtCP").value;
    txtCiu = document.getElementById("txtCiu").value;
    txtEDO = document.getElementById("txtEDO").value;
    txtTel = document.getElementById("txtTel").value;
    imgAdd = document.getElementById("imgAdd").value;

    let clienteActualizado = {
        idRegistro: "RF10",
        txtNombre: nombre,
        txtApt: txtApt,
        txtAmt: txtAmt,
        txtgn: txtgn,
        txtFnac: txtFnac,
        txtRFC: txtRFC,
        txtCURP: txtCURP,
        txtDmc: txtDmc,
        txtCP: txtCP,
        txtCiu: txtCiu,
        txtEDO: txtEDO,
        txtTel: txtTel,
        imgAdd: imgAdd
    };

    clientes[indexClienteSeleccionado] = clienteActualizado;
    clean();
    loadTabla();
}

export function deleteCliente() {
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}
