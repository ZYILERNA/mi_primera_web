// ===================== PRÁCTICA 12: FORMULARIOS I =====================

const form = document.getElementById('form-inscripcion');
const msgOk = document.getElementById('p12-msg-ok');

form.addEventListener('submit', function (event) {
    // Siempre interceptamos para validar antes de enviar
    event.preventDefault();

    const nombre     = document.getElementById('p12-nombre').value.trim();
    const email      = document.getElementById('p12-email').value.trim();
    const password   = document.getElementById('p12-password').value;
    const lenguaje   = document.getElementById('p12-lenguaje').value;
    const motivacion = document.getElementById('p12-motivacion').value.trim();

    // Validación: contraseña mínimo 8 caracteres
    if (password.length < 8) {
        alert('⚠️ La contraseña debe tener al menos 8 caracteres.');
        document.getElementById('p12-password').focus();
        return; // Detiene el envío
    }

    // Todo correcto → mensaje de bienvenida en consola
    console.log(`✅ Bienvenido/a, ${nombre}!`);
    console.log(`📧 Email: ${email}`);
    console.log(`💻 Lenguaje favorito: ${lenguaje}`);
    console.log(`💬 Motivación: ${motivacion}`);

    // Mostrar mensaje de éxito en la página
    msgOk.style.display = 'block';
    msgOk.textContent = `✅ ¡Bienvenido/a, ${nombre}! Tu inscripción se ha registrado correctamente.`;

    // Reiniciar formulario tras medio segundo
    setTimeout(() => form.reset(), 500);
});

// ⚠️ Nota: aunque validamos en JS, en producción siempre
//    hay que volver a validar en el servidor.
// ======================================================================
