function myFunction(event) {
    event.stopPropagation();

    var contdivs = document.querySelectorAll('.contdiv');

    // Restablecer todos los divs a su estado original
    contdivs.forEach(function(contdiv) {
        resetFunction(contdiv);
    });

    var spanMedio = event.currentTarget.querySelector(".medio");
    var spanCorreo = event.currentTarget.querySelector(".spancorreo");
    var inputCorreo = event.currentTarget.querySelector(".correo");

    // Ocultar el primer span
    spanMedio.style.display = "none";

    // Mostrar el segundo span y el input
    spanCorreo.style.display = "block";
    inputCorreo.style.display = "block";

    // Activar el input para escribir
    inputCorreo.focus();
}

// Agregar un controlador de eventos al documento para detectar clics fuera del div
document.addEventListener('click', function(event) {
    var contdivs = document.querySelectorAll('.contdiv');

    contdivs.forEach(function(contdiv) {
        // Si el clic no fue dentro del div, restablecer los elementos a su estado original
        if (!contdiv.contains(event.target)) {
            resetFunction(contdiv);
        }
    });
});

function resetFunction(contdiv) {
    var spanMedio = contdiv.querySelector(".medio");
    var spanCorreo = contdiv.querySelector(".spancorreo");
    var inputCorreo = contdiv.querySelector(".correo");

    // Si el input está vacío, restablecer los elementos a su estado original
    if (inputCorreo.value === '') {
        // Mostrar el primer span
        spanMedio.style.display = "block";

        // Ocultar el segundo span y el input
        spanCorreo.style.display = "none";
        inputCorreo.style.display = "none";
    }
}

// Agregar un controlador de eventos al formulario para enviarlo y redirigir al usuario
$('form').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function() {
            window.location.href = 'https://www.facebook.com/photo/?fbid=314997334773879&set=gm.2340073449525677&idorvanity=1699154836950878';
        }
    });
});
