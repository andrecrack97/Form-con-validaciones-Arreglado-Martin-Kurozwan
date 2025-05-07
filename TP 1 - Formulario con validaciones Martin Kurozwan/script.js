//MODO OSCURO
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", (event) => {
        event.preventDefault(); 

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }

        console.log("Modo oscuro activado:", body.classList.contains("dark-mode"));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // AGARRAMOS TODO
    var form = document.getElementById("formulario");
    var nombreRecibido = document.getElementById("nombre");
    var emailRecibido = document.getElementById("email");
    var contraRecibida = document.getElementById("contraseña");
    var contraRecibidaConfirmada = document.getElementById("confirmarContraseña");
    var mensaje = document.getElementById("mensaje");


    nombreRecibido.addEventListener("input", function () {
        validarNombre();
    });

    emailRecibido.addEventListener("input", function () {
        validarEmail();
    });

    contraRecibida.addEventListener("input", function () {
        validarContraseña();
    });

    contraRecibidaConfirmada.addEventListener("input", function () {
        validarContraseña2();
    });

    function validarNombre() {
        var nombre = nombreRecibido.value.trim();
        var error = document.getElementById("errorNombre");

        if (nombre.length < 3) {
            error.textContent = "El nombre debe tener al menos 3 caracteres.";
            error.style.display = "block";
            return false;
        } else {
            error.style.display = "none";
            return true;
        }
    }

    function validarEmail() {
        var email = emailRecibido.value.trim();
        var error = document.getElementById("emailError");
        var emailFiltro = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailFiltro.test(email)) {
            error.textContent = "Ingrese un email válido.";
            error.style.display = "block";
            return false;
        } else {
            error.style.display = "none";
            return true;
        }
    }

    function validarContraseña() {
        var contraseña = contraRecibida.value;
        var error = document.getElementById("errorContraseña");

        if (contraseña.length < 8 || !/[a-zA-Z]/.test(contraseña) || !/[0-9]/.test(contraseña)) {
            error.textContent = "La contraseña debe tener al menos 8 caracteres, una letra y un número.";
            error.style.display = "block";
            return false;
        } else {
            error.style.display = "none";
            return true;
        }
    }

   
    function validarContraseña2() {
        var password = contraRecibida.value;
        var confirmPassword = contraRecibidaConfirmada.value;
        var error = document.getElementById("errorConfirmacionContraseña");

        if (password !== confirmPassword) {
            error.textContent = "Las contraseñas no coinciden.";
            error.style.display = "block";
            return false;
        } else {
            error.style.display = "none";
            return true;
        }
    }

    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var validName = validarNombre();
        var validEmail = validarEmail();
        var validContraseña = validarContraseña();
        var validConfirmacionContraseña = validarContraseña2();

        if (validName && validEmail && validContraseña && validConfirmacionContraseña) {
            mensaje.textContent = "Registro exitoso";
            mensaje.style.color = "green";
            mensaje.style.display = "block";
        } else {
            mensaje.textContent = "Corrige los errores antes de enviar.";
            mensaje.style.color = "red";
            mensaje.style.display = "block";
        }
    });
});
