# Preba de Concepto Red 5 Pro Server y SDK WebRTC

## Descripción
Este proyecto permite probar de manera simple un servicio de publicación y suscripción de Streaming sobre Red 5 Pro alojado en EC2 de AWS.

Al iniciar el publicador solicitará un host, (indicar la ip de la instancia de AWS). Luego, habilita un websocket y publicará una transmisión con el Id = "mystream".

Por otro lado el subscritor, tambien solicitará la ip del servidor de la instancia de AWS donde se ejecuta Red 5 Pro. Y verificará qué esté publicado el stream "_mystream_" para conectarse a él por medio de websocket y presentar el video en vivo que se esté capturando desde el publicador.


## Instrucciones
Utilice el archivo _server.bat_ para desplegar un servidor web simple en python. Luego desde el index ingrese al publicador e indique el host. Luego abra en otra ventana el subscriptor e indique el host.

## Tecnologías
1. Red 5 Pro v9
2. SDK WebRTC


