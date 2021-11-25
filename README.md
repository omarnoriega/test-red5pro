![alt text](/lib/red5pro/assets/red5pro_logo.svg)
# Prueba de Concepto Red 5 Pro Server y SDK WebRTC


## Descripción del proyecto
Este proyecto permite probar de manera simple un servicio de publicación y suscripción de video streaming sobre un servidor de Red 5 Pro alojado en EC2 de AWS.

![Video Stream](/img/diagrama-componentes.drawio.svg)

Al iniciar el publicador solicitará un host, (debe indicar la ip de la instancia de AWS). Luego, habilita un websocket y publicará una transmisión con el Id "_mystream_".

Por otro lado el subscritor, tambien solicitará la ip del servidor de la instancia de AWS donde se ejecuta Red 5 Pro. Y verificará qué esté publicado el stream "_mystream_" para conectarse a él por medio de websocket y presentar el video en vivo que se esté capturando desde el publicador.


## Instrucciones
Ejecute el archivo _server.bat_ (win) o _server.sh_ (mac/linux) para desplegar un servidor web simple en python, después desde el navegador ingrese a http://localhost:8000 y luego al publicador e indique el host. De igual manera para el subscriptor.

Si no se inicia el servidor web de python usando _server.bat_:

    > python -m http.server 8000

intente con:

    > python -m SimpleHTTPServer 8000


## Tecnologías
1. [Servidor Red 5 Pro v9](https://www.red5pro.com/docs/server/quickstart/serverinstall/)
2. [SDK Red 5 Pro para WebRTC](https://github.com/red5pro/red5pro-webrtc-sdk.git)


