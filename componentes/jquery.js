/*
 * Misiones completadas: Selección por etiqueta HTML (p. ej. $("h2"), $("li")) con cambio visual visible.
 * Misiones completadas: 1, 2, 3, 4, 5 + Bonus
 * Bloque 1: Manipulación inicial del DOM con selectores.
 * Bloque 2: Gestión de carrito (Añadir/Eliminar elementos).
 * Bloque 3: Eventos de interacción y feedback visual.
 * Bloque 4: Animaciones de visualización de producto.
 * Bloque 5: Integración de Datepicker para reservas de showroom.
 */

$(document).ready(function() {

    // --- 1. SELECCIÓN POR ETIQUETA ---
    $("h2").css({
        "color": "#8d5524", 
        "font-weight": "700",
        "border-left": "5px solid #d35400",
        "padding-left": "15px",
        "transition": "all 0.4s ease"
    });

    // --- 2. SELECCIÓN POR CLASE ---
    $(".card").css({
        "border": "none",
        "border-radius": "15px",
        "box-shadow": "0 10px 20px rgba(0,0,0,0.05)",
        "background-color": "#fffcf9"
    });

    // --- 3. SELECCIÓN POR ID ---
    $("#titulo-principal").css({
        "color": "#5d4037",
        "font-weight": "bold",
        "text-shadow": "2px 2px 0px #f5deb3",
        "transform": "scale(1.05)"
    });

    // --- 4. SELECTOR AVANZADO (:odd - Impares) ---
    $(".nav-link:odd").css({
        "background-color": "rgba(211, 84, 0, 0.1)",
        "border-radius": "8px",
        "color": "#d35400"
    });

// --- MISIÓN 2: Adición y Supresión del DOM ---
    
    // 1. FUNCIONALIDAD: AÑADIR (.append)
    $(".btn-agregar").on("click", function() {
        // Obtenemos el nombre del producto del atributo data o del título de la tarjeta
        let nombreProducto = $(this).data("nombre");
        
        // Ocultamos el mensaje de "carrito vacío"
        $("#carrito-vacio").hide();

        // Creamos el nuevo elemento de lista con un diseño bonito
        let nuevoItem = $(`
            <li class="list-group-item d-flex justify-content-between align-items-center bg-white" style="display:none;">
                <span><i class="fas fa-bread-slice me-2 text-warning"></i> ${nombreProducto}</span>
                <button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button>
            </li>
        `);

        // Lo añadimos a la lista y le damos un efecto de entrada
        $("#lista-carrito").append(nuevoItem);
        nuevoItem.fadeIn(400); 
    });

    // 2. FUNCIONALIDAD: ELIMINAR (.remove) + PUNTO BONUS (Evento delegado)
    // Usamos el evento delegado seleccionando el padre (#lista-carrito) 
    // para que funcione con elementos creados después de cargar la página.
    $("#lista-carrito").on("click", ".btn-eliminar", function() {
        let elementoAEliminar = $(this).parent();

        // Efecto de salida antes de borrarlo del DOM
        elementoAEliminar.fadeOut(300, function() {
            $(this).remove();
            
            // Si ya no quedan elementos, volvemos a mostrar el mensaje de "vacío"
            if ($("#lista-carrito children()").length === 0) {
                $("#carrito-vacio").fadeIn();
            }
        });
    });
    // --- MISIÓN 3: Gestión de Eventos .on() ---

    // A. EVENTO DE RATÓN: Hover sobre las imágenes de las tarjetas (0,5 pts)
    // Cuando el usuario pasa el ratón, la imagen se destaca
    $(".card-img-top").on("mouseenter", function() {
        $(this).css({
            "transform": "scale(1.05)",
            "filter": "brightness(1.1)",
            "transition": "all 0.3s ease"
        });
    }).on("mouseleave", function() {
        // Usamos $(this) para referenciar la imagen exacta que el ratón abandonó
        $(this).css({
            "transform": "scale(1)",
            "filter": "brightness(1)"
        });
    });

    // B. EVENTO DE TECLADO: Feedback en tiempo real en el buscador (0,75 pts)
    // Detectamos cuando el usuario suelta una tecla al escribir
    $("#buscador-pan").on("keyup", function() {
        let texto = $(this).val(); // Obtenemos lo que está escribiendo
        if (texto.length > 0) {
            $("#feedback-teclado").html("Buscando: <strong>" + texto + "</strong>...");
        } else {
            $("#feedback-teclado").text("");
        }
    });

    // C. TERCER EVENTO: Formulario (Submit) (0,5 pts)
    // Evitamos que la página se recargue y damos un mensaje visual elegante
    $("#contacto-form").on("submit", function(evento) {
        evento.preventDefault(); // Evita el refresco de pantalla
        
        // Feedback visual: Ocultamos el formulario y mostramos mensaje
        $(this).fadeOut(400, function() {
            $(this).before(`
                <div class="alert alert-success text-center">
                    <i class="fas fa-check-circle"></i> 
                    ¡Gracias por contactar! Te responderemos con el aroma del pan recién hecho.
                </div>
            `);
        });
    });
    // --- MISIÓN 4: Animaciones y Transiciones ---

    // A. Uso de .fadeIn() y .fadeOut() (0,5 pts)
    // Mostramos el banner de oferta con un efecto suave al cargar la página (tras 1 segundo)
    setTimeout(function() {
        $("#banner-oferta").fadeIn(1000);
    }, 1000);

    $("#cerrar-oferta").on("click", function() {
        $("#banner-oferta").fadeOut(500);
    });

    // B. Uso de .slideDown() y .slideUp() (0,5 pts)
    // El panel de horarios se desliza elegantemente
    $("#btn-animar-horarios").on("click", function() {
        $("#info-horarios").slideToggle(600); // Alterna entre slideDown y slideUp
    });

    // C. Uso de .animate() con propiedades CSS personalizadas (0,75 pts)
    // Vamos a hacer que el logo o un botón haga un movimiento "especial"
    $("#titulo-principal").on("click", function() {
        $(this).animate({
            fontSize: "4rem",      // Propiedad 1: Tamaño de fuente
            letterSpacing: "15px",  // Propiedad 2: Espaciado de letras
            opacity: 0.5            // Propiedad 3: Transparencia
        }, 800)
        .animate({
            fontSize: "3.5rem",
            letterSpacing: "3px",
            opacity: 1
        }, 800); // Volvemos a la normalidad
    });

    // Extra: Animación de las tarjetas al hacer scroll o click
    $(".card").on("click", function() {
        $(this).animate({
            marginTop: "-20px" // Efecto de elevación
        }, 200).animate({
            marginTop: "0px"   // Vuelve a su sitio
        }, 200);
    });
    // --- MISIÓN 5: Conectores (Plug-in jQuery UI) ---

    // Implementación de Datepicker (0,25 pts por inclusión + 1 pt por funcionamiento)
    // Configuramos el calendario para que sea intuitivo
    $("#fecha-recogida").datepicker({
        dateFormat: "dd/mm/yy",    // Formato europeo
        minDate: 0,                // No permite elegir días pasados
        firstDay: 1,               // La semana empieza en lunes
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        
        // Efecto visual al seleccionar (Sentido estético 0,75 pts)
        onSelect: function(dateText) {
            $("#feedback-teclado").html(`
                <div class="alert alert-info mt-2">
                    <i class="fas fa-calendar-check"></i> 
                    Has seleccionado el <strong>${dateText}</strong> para recoger tu pedido.
                </div>
            `).fadeIn();
        }
    });

    // Plus: Hacer que el campo brille cuando se activa
    $("#fecha-recogida").on("focus", function() {
        $(this).animate({
            borderColor: "#d35400",
            boxShadow: "0 0 10px rgba(211, 84, 0, 0.5)"
        }, 300);
    });
});
