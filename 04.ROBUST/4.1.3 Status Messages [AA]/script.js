// Función para mostrar un mensaje de estado con sonido de notificación
function showStatusMessage(message) {
    var statusDiv = document.getElementById('status-message');
    statusDiv.innerText = message;
    statusDiv.style.display = 'block';
  
    // Reproducir el sonido de notificación
    var notificationSound = new Audio('notification.mp3');
    notificationSound.play();
  
    // Después de 3 segundos, ocultar el mensaje
    setTimeout(function() {
      statusDiv.style.display = 'none';
    }, 3000);
  }
  
  // Evento clic del botón para cambiar el estado
  document.getElementById('change-status-btn').addEventListener('click', function() {
    // Aquí puedes cambiar el mensaje según la acción realizada
    showStatusMessage('El estado ha sido cambiado.');
  });
  