## Estrategia elegida
Hemos usado una estrategia Mobile First porque permite optimizar la experiencia de usuario en dispositivos móviles, que son los más utilizados actualmente. 
Los estilos base están pensados para pantallas pequeñas, y usamos media queries para ampliar el diseño a tabletas y escritorio.

## Estrategias adaptativas implementadas

1. **Menú hamburguesa en móviles:** El menú de navegación se oculta tras un icono ☰ y se despliega al hacer clic.
2. **Diseño flexible de columnas:** En escritorio, la sección de contacto muestra el formulario y la información uno al lado del otro; en móvil, en una sola columna.
3. **Reorganización y ajuste visual:** Las tarjetas de producto se ajustan de 100% ancho en móvil a 45% o 30% en tablet y escritorio, manteniendo coherencia y legibilidad.



# Panadería Artesanal - Práctica de Interactividad Web (jQuery)

Este proyecto implementa interactividad avanzada sobre el sitio web de la Panadería Artesanal utilizando la biblioteca **jQuery** y componentes de **jQuery UI**. Se ha priorizado la separación de capas (HTML/JS), el rendimiento mediante delegación de eventos y la experiencia de usuario (UX) con animaciones fluidas.

---

## Tecnologías e Integración
Para cumplir con los estándares de la práctica, se han integrado:
* **Librerías:** jQuery 3.7.1 y jQuery UI 1.13.2 (vía CDN).
* **Estilos UI:** Tema "base" de jQuery UI para el Datepicker.
* **Separación de Lógica:** Todo el código reside exclusivamente en `jquery.js`.

---

## Misiones Completadas (Desglose Técnico)

### 1. Selección de Elementos
Se demuestra el dominio de selectores para manipular el diseño sin tocar el archivo CSS:
* **Etiqueta (`h2`, `li`):** Aplicación de bordes dinámicos y estilos de fuente corporativos.
* **Clase (`.card`):** Generación de sombras (`box-shadow`) y bordes suaves para un look moderno.
* **ID (`#titulo-principal`):** Resalte de marca mediante `text-shadow` y escalado.
* **Selector Avanzado (`.nav-link:odd`):** Estilización diferencial de los elementos impares del menú para mejorar la navegación visual.

### 2. Gestión del DOM y Carrito    
Se ha creado un **Carrito de Pedidos dinámico**:
* **Adición:** Uso de `.append()` para insertar elementos `<li>` generados en tiempo real con datos extraídos de atributos `data-nombre`.
* **Eliminación:** Uso de `.remove()` con transiciones de salida.
* **Evento Delegado (Bonus):** Se ha utilizado `$("#lista-carrito").on("click", ".btn-eliminar", ...)` para que los productos añadidos dinámicamente puedan ser borrados correctamente del DOM.

### 3. Gestión de Eventos `.on()` 
* **Ratón:** Captura de `mouseenter` y `mouseleave` en las tarjetas de pan para crear un efecto de "zoom" interactivo usando `$(this)`.
* **Teclado:** Uso de `keyup` en el buscador para inyectar feedback inmediato en el DOM (`#feedback-teclado`).
* **Formulario:** Intercepción de `submit` con `.preventDefault()` para gestionar el envío de forma asíncrona y mostrar una confirmación visual.

### 4. Animaciones y Transiciones 
* **Fundidos:** El banner de ofertas utiliza `.fadeIn(1000)` tras un retardo controlado.
* **Deslizamientos:** Implementación de `.slideToggle(600)` para el panel de horarios, optimizando el espacio vertical.
* **Animación Custom:** Uso de `.animate()` encadenado para modificar `fontSize`, `letterSpacing` y `opacity` de forma secuencial en el título principal.

### 5. Plug-in jQuery UI (Datepicker) 
Integración de un selector de fechas profesional para la recogida de pan:
* **Configuración:** Idioma localizado, formato de fecha `dd/mm/yy` y restricción de días pasados (`minDate: 0`).
* **Feedback:** Uso de la función callback `onSelect` para notificar al usuario su elección.

---

## Archivos del Proyecto
* `jquery.html`: Estructura semántica con contenedores preparados para jQuery.
* `jquery.js`: Script principal con comentarios de cabecera y organización por bloques.
* `style.css`: Estilos base del proyecto.

---

# Panadería Artesanal - Práctica 13: Integración de Contenidos Interactivos

Módulo DAW M09 · Unidad 4 — Charts, Anime.js y Canvas

---

## Selectores HTML utilizados como ancla

Los nuevos componentes se insertan sobre los siguientes elementos del HTML original:

| Selector | Propósito |
|---|---|
| `header.header-bg` | Contiene el canvas de partículas interactivo (fondo del header) |
| `#p13-bg-canvas` | Elemento `<canvas>` para el fondo animado con partículas |
| `#p13-chart-section` | Sección que envuelve el gráfico de ventas semanales |
| `#p13-sales-chart` | Canvas del gráfico Chart.js |
| `#p13-btn-toggle` | Botón para cambiar entre gráfico de barras y de líneas |
| `#p13-btn-refresh` | Botón para regenerar datos aleatorios en el gráfico |
| `.card` | Tarjetas de producto sobre las que se aplica el staggering de Anime.js |

---

## Librerías externas (CDN)

| Librería | Versión | CDN |
|---|---|---|
| **Chart.js** | 4.4.3 | `https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js` |
| **Anime.js** | 3.2.2 | `https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js` |

---

## Resumen por bloques

### Bloque A – Visualización Dinámica (Chart.js)
Gráfico de barras/líneas con datos de ventas semanales por categoría (Pan, Pasteles, Café, Bollería). Usa la paleta ámbar/marrón del proyecto. Dos botones permiten cambiar el tipo de gráfico y regenerar datos.

### Bloque B – Animación de Interfaz (Anime.js)
- **Staggering:** Las 4 tarjetas de producto aparecen escalonadas al cargar la página (translateY + opacity).
- **Micro-interacciones hover:** Las tarjetas se escalan y adquieren sombra dorada al pasar el ratón.
- **Micro-interacciones press:** Los botones `.p13-btn` se comprimen al hacer clic y recuperan su escala con efecto elástico.

### Bloque C – Canvas 2D (requestAnimationFrame)
60 partículas flotantes en el header que ascienden lentamente. Al mover el ratón sobre el header, las partículas cercanas se atraen hacia el cursor. Efecto fade-in/out basado en el ciclo de vida de cada partícula.

### Bloque D – Arquitectura
- Todo el código JS está encapsulado en una **IIFE** (`(function(){ ... })()`), sin variables globales.
- Todos los selectores CSS usan el prefijo `.p13-` o el ID `#p13-` para evitar colisiones.
- Las librerías se cargan vía CDN antes de los scripts propios.

---

## Archivos del Proyecto (Práctica 13)
* `componentes/index.html`: Página principal con los anclajes HTML para los nuevos componentes.
* `componentes/js/interactividad_practica13.js`: Todo el código JS nuevo (IIFE con módulos A, B, C, D).
* `componentes/css/interactividad_practica13.css`: Estilos exclusivos de la práctica 13 (prefijo `.p13-`).

---