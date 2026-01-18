const translations = {
    // --- CABECERA Y NAVEGACIÓN COMÚN ---
    'titulo-principal': { 'ca': 'Forn de Pa Artesanal', 'es': 'Panadería Artesanal', 'en': 'Artisan Bakery' },
    'mensaje-bienvenida': { 'ca': 'El sabor del que és fet a mà 🥖', 'es': 'El sabor de lo hecho a mano 🥖', 'en': 'The taste of handmade food 🥖' },
    
    'nav-inicio': { 'ca': 'Inici', 'es': 'Inicio', 'en': 'Home' },
    'nav-herramientas': { 'ca': 'Eines', 'es': 'Herramientas', 'en': 'Tools' },
    'nav-audio': { 'ca': 'Àudio', 'es': 'Audio', 'en': 'Audio' },
    'nav-contacto': { 'ca': 'Contacte', 'es': 'Contacto', 'en': 'Contact' },
    'btn-info': { 'ca': 'Més informació', 'es': 'Más información', 'en': 'More info' },

    // --- PÁGINA INICIO (NUEVO) ---
    'about-title': { 'ca': 'Sobre el nostre forn', 'es': 'Sobre nuestra panadería', 'en': 'About our bakery' },
    'about-desc': { 'ca': 'Elaborem pa i rebosteria amb ingredients frescos, tradició i molt d\'amor.', 'es': 'Elaboramos pan y repostería con ingredientes frescos, tradición y mucho cariño.', 'en': 'We make bread and pastries with fresh ingredients, tradition, and love.' },
    
    'card1-title': { 'ca': 'Pa Tradicional', 'es': 'Pan Tradicional', 'en': 'Traditional Bread' },
    'card1-desc': { 'ca': 'Cruixent per fora, esponjós per dins.', 'es': 'Crujiente por fuera, esponjoso por dentro.', 'en': 'Crispy outside, fluffy inside.' },
    
    'card2-title': { 'ca': 'Pastissos', 'es': 'Pasteles', 'en': 'Cakes' },
    'card2-desc': { 'ca': 'Dolços artesanals per a cada ocasió.', 'es': 'Dulces artesanales para cada ocasión.', 'en': 'Handmade sweets for every occasion.' },
    
    'card3-title': { 'ca': 'Cafè i Esmorzars', 'es': 'Café & Desayunos', 'en': 'Coffee & Breakfast' },
    'card3-desc': { 'ca': 'Acompanya el teu pa amb un cafè acabat de fer.', 'es': 'Acompaña tu pan con un café recién hecho.', 'en': 'Pair your bread with fresh coffee.' },
    
    'card4-title': { 'ca': 'Brioixeria', 'es': 'Bollería', 'en': 'Pastries' },
    'card4-desc': { 'ca': 'Croissants, napolitanes i molt més.', 'es': 'Croissants, napolitanas y mucho más.', 'en': 'Croissants, danishes and much more.' },

    // --- PÁGINA HERRAMIENTAS ---
    'tools-title': { 'ca': 'El nostre equipament professional', 'es': 'Nuestro Equipamiento Profesional', 'en': 'Our Professional Equipment' },
    'tools-desc': { 'ca': 'Utilitzem les millors eines per garantir la qualitat.', 'es': 'Utilizamos las mejores herramientas para garantizar la calidad.', 'en': 'We use the best tools to ensure quality.' },
    
    't1-title': { 'ca': '🥣 Amassadora Industrial', 'es': '🥣 Amasadora Industrial', 'en': '🥣 Industrial Mixer' },
    't1-desc': { 'ca': 'Ideal per a grans volums de massa.', 'es': 'Ideal para grandes volúmenes de masa.', 'en': 'Ideal for large dough volumes.' },
    't1-l1': { 'ca': '✓ Capacitat: 50kg', 'es': '✓ Capacidad: 50kg', 'en': '✓ Capacity: 50kg' },
    't1-l2': { 'ca': '✓ Material: Acer inoxidable', 'es': '✓ Material: Acero inoxidable', 'en': '✓ Material: Stainless steel' },
    
    't2-title': { 'ca': '🔥 Forn Professional', 'es': '🔥 Horno Profesional', 'en': '🔥 Professional Oven' },
    't2-desc': { 'ca': 'Cocció uniforme per a pans perfectes.', 'es': 'Cocción uniforme para panes perfectos.', 'en': 'Uniform baking for perfect loaves.' },
    't2-l1': { 'ca': '✓ Temperatura: fins a 300°C', 'es': '✓ Temperatura: hasta 300°C', 'en': '✓ Temp: up to 300°C' },
    't2-l2': { 'ca': '✓ Sistema de vapor', 'es': '✓ Sistema de vapor', 'en': '✓ Steam system' },

    't3-title': { 'ca': '🍞 Safates Professionals', 'es': '🍞 Bandejas Profesionales', 'en': '🍞 Professional Trays' },
    't3-desc': { 'ca': 'Anti-adherents i resistents.', 'es': 'Antiadherentes y resistentes.', 'en': 'Non-stick and resistant.' },
    't3-l1': { 'ca': '✓ Material: Alumini', 'es': '✓ Material: Aluminio', 'en': '✓ Material: Aluminum' },
    't3-l2': { 'ca': '✓ Anti-adherents', 'es': '✓ Antiadherentes', 'en': '✓ Non-stick' },

    't4-title': { 'ca': '✂️ Talladora de Massa', 'es': '✂️ Cortadora de Masa', 'en': '✂️ Dough Cutter' },
    't4-desc': { 'ca': 'Precisió en cada tall.', 'es': 'Precisión en cada corte.', 'en': 'Precision in every cut.' },
    't4-l1': { 'ca': '✓ Tall precís', 'es': '✓ Corte preciso', 'en': '✓ Precise cut' },
    't4-l2': { 'ca': '✓ Fàcil neteja', 'es': '✓ Fácil limpieza', 'en': '✓ Easy to clean' },

    't5-title': { 'ca': '🌡️ Cambra de Fermentació', 'es': '🌡️ Cámara de Fermentación', 'en': '🌡️ Proofer Chamber' },
    't5-desc': { 'ca': 'Control perfecte de temperatura.', 'es': 'Control perfecto de temperatura.', 'en': 'Perfect temperature control.' },
    't5-l1': { 'ca': '✓ Control temp/humitat', 'es': '✓ Control temp/humedad', 'en': '✓ Temp/humidity control' },
    't5-l2': { 'ca': '✓ Temporitzador 24h', 'es': '✓ Temporizador 24h', 'en': '✓ 24h Timer' },

    't6-title': { 'ca': '⚖️ Bàscula Digital', 'es': '⚖️ Báscula Digital', 'en': '⚖️ Digital Scale' },
    't6-desc': { 'ca': 'Precisió d\'1 gram.', 'es': 'Precisión de 1 gramo.', 'en': '1 gram precision.' },
    't6-l1': { 'ca': '✓ Precisió: 1g', 'es': '✓ Precisión: 1g', 'en': '✓ Precision: 1g' },
    't6-l2': { 'ca': '✓ Pantalla LED', 'es': '✓ Pantalla LED', 'en': '✓ LED Display' },

    'invest-title': { 'ca': 'Per què invertir en equipament professional?', 'es': '¿Por qué invertir en equipamiento profesional?', 'en': 'Why invest in professional equipment?' },
    'inv-1-title': { 'ca': 'Qualitat Superior', 'es': 'Calidad Superior', 'en': 'Superior Quality' },
    'inv-1-desc': { 'ca': 'Resultats consistents i professionals.', 'es': 'Resultados consistentes y profesionales.', 'en': 'Consistent and professional results.' },
    'inv-2-title': { 'ca': 'Major Eficiència', 'es': 'Mayor Eficiencia', 'en': 'Higher Efficiency' },
    'inv-2-desc': { 'ca': 'Estalvia temps i augmenta la producció.', 'es': 'Ahorra tiempo y aumenta la producción.', 'en': 'Save time and increase production.' },
    'inv-3-title': { 'ca': 'Durabilitat', 'es': 'Durabilidad', 'en': 'Durability' },
    'inv-3-desc': { 'ca': 'Inversió a llarg termini.', 'es': 'Inversión a largo plazo.', 'en': 'Long-term investment.' },

    'cta-title': { 'ca': 'Vols saber més?', 'es': '¿Quieres saber más?', 'en': 'Want to know more?' },
    'cta-desc': { 'ca': 'Contacta amb nosaltres.', 'es': 'Contáctanos.', 'en': 'Contact us.' },
    'cta-btn': { 'ca': 'Contactar ara 📧', 'es': 'Contactar ahora 📧', 'en': 'Contact now 📧' },

    // --- PÁGINA AUDIO ---
    'audio-page-title': { 'ca': 'Comparació d\'imatges', 'es': 'Comparación de imágenes', 'en': 'Image Comparison' },
    'label-img-orig': { 'ca': 'Imatge original (sense optimitzar)', 'es': 'Imagen original (sin optimizar)', 'en': 'Original Image (unoptimized)' },
    'label-img-opt': { 'ca': 'Imatge optimitzada (PNG-8)', 'es': 'Imagen optimizada (PNG-8)', 'en': 'Optimized Image (PNG-8)' },
    'audio-player-title': { 'ca': '🎧 El nostre Podcast', 'es': '🎧 Nuestro Podcast', 'en': '🎧 Our Podcast' },
    'audio-player-desc': { 'ca': 'Escolta com elaborem el nostre pa.', 'es': 'Escucha cómo elaboramos nuestro pan.', 'en': 'Listen to how we make our bread.' },

    // --- PÁGINA CONTACTO ---
    'contact-main-title': { 'ca': 'Contacta amb nosaltres', 'es': 'Contáctanos', 'en': 'Contact Us' },
    'contact-main-desc': { 'ca': 'Si tens algun dubte, completa el formulari.', 'es': 'Si tienes alguna duda, completa el formulario.', 'en': 'If you have any questions, fill out the form.' },
    'form-title': { 'ca': '📝 Formulari de Contacte', 'es': '📝 Formulario de Contacto', 'en': '📝 Contact Form' },
    'label-nombre': { 'ca': 'Nom complet', 'es': 'Nombre completo', 'en': 'Full Name' },
    'label-email': { 'ca': 'Correu electrònic', 'es': 'Correo electrónico', 'en': 'Email Address' },
    'label-mensaje': { 'ca': 'Missatge', 'es': 'Mensaje', 'en': 'Message' },
    'btn-enviar': { 'ca': 'Enviar Missatge ✉️', 'es': 'Enviar Mensaje ✉️', 'en': 'Send Message ✉️' },
    
    // --- FOOTER COMÚN ---
    'footer-col1-titulo': { 'ca': '🥖 Forn Artesanal', 'es': '🥖 Panadería Artesanal', 'en': '🥖 Artisan Bakery' },
    'footer-desc': { 'ca': 'Elaborem pa i rebosteria...', 'es': 'Elaboramos pan y repostería...', 'en': 'We make bread and pastries...' },
    'footer-enlaces-titulo': { 'ca': 'Enllaços Ràpids', 'es': 'Enlaces Rápidos', 'en': 'Quick Links' },
    'footer-link-inicio': { 'ca': '🏠 Inici', 'es': '🏠 Inicio', 'en': '🏠 Home' },
    'footer-link-herramientas': { 'ca': '🔧 Eines', 'es': '🔧 Herramientas', 'en': '🔧 Tools' },
    'footer-link-audio': { 'ca': '🎵 Àudio', 'es': '🎵 Audio', 'en': '🎵 Audio' },
    'footer-link-contacto': { 'ca': '📧 Contacte', 'es': '📧 Contacto', 'en': '📧 Contact' },
    'footer-menu': { 'ca': '📋 Menú del dia', 'es': '📋 Menú del día', 'en': '📋 Daily Menu' },
    'footer-encargos': { 'ca': '🎂 Encarrecs especials', 'es': '🎂 Encargos especiales', 'en': '🎂 Special Orders' },
    'footer-contacto-titulo': { 'ca': 'Contacte', 'es': 'Contacto', 'en': 'Contact' },
    'footer-direccion': { 'ca': '📍 Carrer del Pa, 12 – Madrid', 'es': '📍 Calle del Pan, 12 – Madrid', 'en': '📍 Bread Street, 12 – Madrid' },
    'footer-copyright': { 'ca': '© 2025 Forn Artesanal', 'es': '© 2025 Panadería Artesanal', 'en': '© 2025 Artisan Bakery' }
};

function setLanguage(lang) {
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[key][lang];
        }
        
        // Traducción de botones con clase
        if (key === 'btn-info') {
            const buttons = document.querySelectorAll('.btn-translate-info');
            buttons.forEach(btn => {
                btn.innerHTML = translations[key][lang];
            });
        }
    }
}

const selector = document.getElementById('selector-idiomas');

if (selector) {
    selector.addEventListener('click', function(event) {
        const lang = event.target.getAttribute('data-lang');
        if (lang) {
            setLanguage(lang);
            savePreference(lang);
        }
    });
}

function savePreference(lang) {
    localStorage.setItem('userLang', lang);
}

function loadPreference() {
    let preferredLang = localStorage.getItem('userLang');
    if (!preferredLang) { preferredLang = 'es'; }
    setLanguage(preferredLang);
}

window.onload = loadPreference;