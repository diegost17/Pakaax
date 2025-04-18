document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
  
    const mensaje = `¡Gracias ${nombre}! Tu pedido de ${cantidad} ${producto}(s) ha sido recibido. Pronto nos comunicaremos contigo.`;
    
    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('pedidoForm').reset();
  });
  