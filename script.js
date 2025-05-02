document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
  
    const mensaje = `¡Gracias ${nombre}! Tu pedido de ${cantidad} ${producto}(s) ha sido recibido. Pronto nos comunicaremos contigo.`;
    
    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('pedidoForm').reset();
  });
  
  const languageBtn = document.getElementById('languageBtn');
  const languageMenu = document.getElementById('languageMenu');
  const languageSelector = document.getElementById('languageSelector');

  languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!languageSelector.contains(e.target)) {
      languageMenu.classList.add('hidden');
    }
  });

  // Opcional: ocultar al salir con el mouse
  languageSelector.addEventListener('mouseleave', () => {
    languageMenu.classList.add('hidden');
  });
