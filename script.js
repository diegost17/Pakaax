document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
  
    const mensaje = `¡Gracias ${nombre}! Tu pedido de ${cantidad} ${producto}(s) ha sido recibido. Pronto nos comunicaremos contigo.`;
    
    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('pedidoForm').reset();
  });
  

  const translations = {
    es: {
      greeting: "Hola",
      description: "Este es un sitio multilenguaje."
    },
    en: {
      greeting: "Hello",
      description: "This is a multilingual site."
    }
  };

  function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    applyTranslations(lang);
  }

  function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key] || key;
    });
  }

  // Cargar idioma guardado al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "es";
    applyTranslations(savedLang);
  });
