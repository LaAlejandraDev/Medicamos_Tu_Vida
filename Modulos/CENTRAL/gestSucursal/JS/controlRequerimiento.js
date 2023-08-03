let clientes = [];
let selectClientes;

let moduloCliente = {

    // Función para agregar un cliente
    addCliente: function () {
        let codigo_unico_cliente,
                nombre,
                apellidoP,
                apellidoM,
                nacimiento,
                telefono,
                codigoP,
                Direccion,
                curp,
                correo_electronico;

        codigo_unico_cliente = document.getElementById("txtCodigoCliente").value;
        nombre = document.getElementById("txtNom").value;
        apellidoP = document.getElementById("txtApP").value;
        apellidoM = document.getElementById("txtApM").value;
        nacimiento = document.getElementById("txtNac").value;
        telefono = document.getElementById("txtTel").value;
        codigoP = document.getElementById("txtCP").value;
        correo_electronico = document.getElementById("txtEmail").value;
        curp = document.getElementById("txtCurp").value;
        Direccion = document.getElementById("txtDic").value;


        let cliente = {};
        cliente.codigo_unico_cliente = "RF01";
        cliente.nombre = nombre;
        cliente.apellidoP = apellidoP;
        cliente.apellidoM = apellidoM;
        cliente.telefono = telefono;
        cliente.correo_electronico = correo_electronico;
        cliente.Direccion = Direccion;
        cliente.codigoP = codigoP;
        cliente.curp = curp;
        cliente.estatus = "Activo";
        clientes.push(cliente);
        moduloCliente.clean(); // Llama a la función clean() usando la referencia al objeto
        moduloCliente.loadTabla();
    },

    // Función para cargar la tabla con los clientes
    loadTabla: function () {
        let cuerpo = "";
        clientes.forEach(function (cliente) {
            let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellidoP + ' ' + cliente.apellidoM + '</td>' +
                '<td>' + cliente.nacimiento + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.codigoP + '</td>' +
                '<td>' + cliente.curp + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
            cuerpo += registro;
        });
        console.log(cuerpo);
        document.getElementById("tblClientes").innerHTML = cuerpo;
    },

    // Función para seleccionar un cliente
    selectCliente: function (index) {
        document.getElementById("txtCodigoCliente").value = clientes[index].codigo_unico_cliente;
        document.getElementById("txtNom").value = clientes[index].nombre;
        document.getElementById("txtApP").value = clientes[index].apellidoP;
        document.getElementById("txtApM").value = clientes[index].apellidoM;
        document.getElementById("txtTel").value = clientes[index].telefono;
        document.getElementById("txtCP").value = clientes[index].codigoP;
        document.getElementById("txtNac").value = clientes[index].nacimiento;
        document.getElementById("txtEmail").value = clientes[index].correo_electronico;
        document.getElementById("txtCurp").value = clientes[index].curp;
        document.getElementById("txtDic").value = clientes[index].Direccion;

        document.getElementById("btnEli").classList.remove("disabled");
        document.getElementById("btnMod").classList.remove("disabled");
        document.getElementById("btnAgr").classList.add("disabled");
        clienteSelect = index;
    },

    // Función para modificar un cliente existente
    modificarCliente: function () {
        if (clienteSelect !== undefined && clienteSelect >= 0 && clienteSelect < clientes.length) {
            let codigo_unico_cliente,
                    nombre,
                    apellidoP,
                    apellidoM,
                    nacimiento,
                    telefono,
                    codigoP,
                    Direccion,
                    curp,
                    correo_electronico;

            codigo_unico_cliente = document.getElementById("txtCodigoCliente").value;
            nombre = document.getElementById("txtNom").value;
            apellidoP = document.getElementById("txtApP").value;
            apellidoM = document.getElementById("txtApM").value;
            nacimiento = document.getElementById("txtNac").value;
            telefono = document.getElementById("txtTel").value;
            codigoP = document.getElementById("txtCP").value;
            correo_electronico = document.getElementById("txtEmail").value;
            curp = document.getElementById("txtCurp").value;
            Direccion = document.getElementById("txtDic").value;

            clientes[clienteSelect].codigo_unico_cliente = codigo_unico_cliente;
            clientes[clienteSelect].nombre = nombre;
            clientes[clienteSelect].apellidoP = apellidoP;
            clientes[clienteSelect].apellidoM = apellidoM;
            clientes[clienteSelect].telefono = telefono;
            clientes[clienteSelect].correo_electronico = correo_electronico;
            clientes[clienteSelect].Direccion = Direccion;
            clientes[clienteSelect].codigoP = codigoP;
            clientes[clienteSelect].curp = curp;


            this.loadTabla();
            this.clean();
        }
    },

    // Función para eliminar clientes
    eliminarCliente: function () {
        clientes[clienteSelect].estatus = "Inactivo";
        this.loadTabla();
        this.clean();
    },

    // Función para limpiar los campos del formulario
    clean: function () {
        codigo_unico_cliente = document.getElementById("txtCodigoCliente").value = "";
        nombre = document.getElementById("txtNom").value = "";
        apellidoP = document.getElementById("txtApP").value = "";
        apellidoM = document.getElementById("txtApM").value = "";
        nacimiento = document.getElementById("txtNac").value = "";
        telefono = document.getElementById("txtTel").value = "";
        codigoP = document.getElementById("txtCP").value = "";
        correo_electronico = document.getElementById("txtEmail").value = "";
        curp = document.getElementById("txtCurp").value = "";
        Direccion = document.getElementById("txtDic").value = "";

        document.getElementById("btnEli").classList.remove("disabled");
        document.getElementById("btnMod").classList.remove("disabled");
        document.getElementById("btnAgr").classList.add("disabled");
    }
};

fetch("../json/dataRequerimiento.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        clientes = jsondata;
        console.log(clientes);
        moduloCliente.loadTabla(); // Llama a la función loadTabla() usando la referencia al objeto moduloSucursal
    });
