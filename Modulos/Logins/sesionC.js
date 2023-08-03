function ir() {
    let c = "admonC";
    let u = "admonC";
    let password = document.getElementById("password").value;
    let login = document.getElementById("login").value;

    if (password === c && login === u) {
        window.location = "../Central.html";
    } else {
        alert("Por favor ingrese el usuario y contraseña correctos.");
    }
}

function admonS() {
    const cas = "admonS";
    const uas = "admonS";
    let passwordAdms = document.getElementById("passwordAdms").value;
    let loginAdms = document.getElementById("loginAdms").value;

    if (passwordAdms === cas && loginAdms === uas) {
        alert("Bienvenido a SICEFA SUCURSAL");
        window.location = "../Sucursal.html";
    } else {
        alert("Por favor ingrese el usuario y contraseña correctos.");
    }
}

function emps() {
    const ce = "empsS";
    const ue = "empsS";
    let passwordEmps = document.getElementById("passwordEmps").value;
    let loginEmps = document.getElementById("loginEmps").value;

    if (passwordEmps === ce && loginEmps === ue) {
        alert("Bienvenido a SICEFA SUCURSAL");
        window.location = "../Empleados.html";
    } else {
        alert("Por favor ingrese el usuario y contraseña correctos.");
    }
}

Swal.fire('Bienvenido');
