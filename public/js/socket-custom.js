var socket = io();
//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'Juan Ignacio',
    mensaje: 'Hola Mundo'
}, function(respuesta) {
    console.log('Respuesta server: ', respuesta);
});

//Escuchar Información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});