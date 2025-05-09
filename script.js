document.addEventListener("DOMContentLoaded", function () {


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

  // Configuracion de chatbot

  const toggleBtn = document.getElementById('chatbot-toggle');
  const chatBox = document.getElementById('chatbot-box');
  const chatInput = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');

  toggleBtn.addEventListener('click', () => {
    console.log('Botón clickeado');
    chatBox.classList.toggle('hidden');
  });

  chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
      const userMessage = this.value;
      addMessage('Tú', userMessage);
      this.value = '';

      // Simulación de respuesta del bot
      setTimeout(() => {
        const reply = generateBotReply(userMessage);
        addMessage('Bot', reply);
      }, 1000);
    }
  });

  function addMessage(sender, message) {
    const messageHTML = `<div><strong>${sender}:</strong> ${message}</div>`;
    chatBody.innerHTML += messageHTML;
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function generateBotReply(userInput) {
    // Respuestas básicas simuladas
    const lower = userInput.toLowerCase();
    if (lower.includes('pedido')) return 'Puedes hacer un pedido desde la sección Pedido.';
    if (lower.includes('pago')) return 'Aceptamos tarjetas, transferencias y pronto PayPal.';
    if (lower.includes('envío')) return 'Hacemos envíos a todo México.';
    return 'Gracias por tu pregunta. Pronto tendrás una respuesta personalizada.';
  }

});