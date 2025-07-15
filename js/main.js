document.getElementById('formularioContacto').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const mensajeExito = document.getElementById('mensajeExito');

  if (nombre && correo && mensaje) {
    mensajeExito.style.display = 'block';
    this.reset();
  } else {
    alert('Por favor, completa todos los campos.');
  }
});
