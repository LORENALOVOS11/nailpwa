function mostrarReserva() {
    document.getElementById("reserva").scrollIntoView({
        behavior: "smooth"
    });
}

function seleccionarServicio(servicio) {

    document.getElementById("servicio").value = servicio;

    document.getElementById("reserva").scrollIntoView({
        behavior: "smooth"
    });
}

function confirmarCita(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const telefono = document.getElementById("telefono").value;

    const mensaje = `
        <strong>Cliente:</strong> ${nombre}<br>
        <strong>Servicio:</strong> ${servicio}<br>
        <strong>Fecha:</strong> ${fecha}<br>
        <strong>Hora:</strong> ${hora}<br>
        <strong>Teléfono:</strong> ${telefono}
    `;

    document.getElementById("mensajeCita").innerHTML = mensaje;

    document.getElementById("reserva").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";

    document.getElementById("confirmacion").scrollIntoView({
        behavior: "smooth"
    });
}

function volverInicio() {

    document.getElementById("confirmacion").style.display = "none";
    document.getElementById("reserva").style.display = "block";

    document.getElementById("nombre").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("telefono").value = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}