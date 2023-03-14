
localStorage.setItem('date', new Date().toDateString());

// Obtener la hora actual
let currentTime = new Date().getTime();

// Verificar si ya hay una hora de inicio en LocalStorage
let startTime = localStorage.getItem('startTime');

if (!startTime) {
  // Si no hay hora de inicio, establecer la hora actual como hora de inicio
  localStorage.setItem('startTime', currentTime.toString());
} else {
  // Si hay hora de inicio, calcular la duración de la sesión en milisegundos
  let sessionDuration = currentTime - parseInt(startTime);
  localStorage.setItem('sessionDuration', (sessionDuration/1000).toString());
    // Mostrar la duración de la sesión en la consola
  console.log('El usuario ha estado viendo la página durante ' + sessionDuration + ' milisegundos');
  // Eliminar la hora de inicio de LocalStorage
  localStorage.removeItem('startTime');
}