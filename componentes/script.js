const translations = {
    'titulo-principal': {
        'ca': 'Forn de Pa Artesanal',
        'es': 'Panadería Artesanal',
        'en': 'Artisan Bakery'
    },
    'mensaje-bienvenida': {
        'ca': 'El sabor del que és fet a mà 🥖',
        'es': 'El sabor de lo hecho a mano 🥖',
        'en': 'The taste of handmade food 🥖'
    }
};

function setLanguage(lang) {
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[key][lang];
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
    
    if (!preferredLang) {
        preferredLang = 'es';
    }
    
    setLanguage(preferredLang);
}

window.onload = loadPreference;