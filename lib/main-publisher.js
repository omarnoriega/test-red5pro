(function (red5prosdk) {

    // Create a new instance of the WebRTC publisher.
    var publisher = new red5prosdk.RTCPublisher();
    var protocol = window.location.protocol;
    var tipoProtocolo = protocol.charAt(protocol.length -2);
    var isSecure = false;
    if(tipoProtocolo=='s')
        isSecure = true;
    var localhost = document.getElementById("localhost");
    function getValue() {
        var retVal = prompt("Enter localhost : ", "localhost");
        localhost.innerHTML = retVal;
        return retVal;
     }

     var host = getValue();

    // Initialize
    publisher.init({
        protocol: isSecure ? 'wss':'ws',
        host: host,
        port: 5080,
        app: 'live',
        streamName: 'mystream',
        rtcConfiguration: {
          iceServers: [{urls: 'stun:stun2.l.google.com:19302'}],
          iceCandidatePoolSize: 2,
          bundlePolicy: 'max-bundle'
        }, // See https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#RTCConfiguration_dictionary
        streamMode: 'live',
        mediaElementId: 'red5pro-publisher',
        bandwidth: {
          audio: 56,
          video: 512
        },
        mediaConstraints: {
          audio: true,
          video: {
            width: {
              exact: 640
            },
            height: {
              exact: 480
            },
            frameRate: {
              min: 8,
              max: 24
            }
          }
        }
      })
      .then(function() {
        // Invoke the publish action.
        //publisher.on(red5prosdk.PublisherEventTypes.PUBLISH_START, subscribe);
        return publisher.publish();
      })
      .catch(function(error) {
        // A fault occurred while trying to initialize and publish the stream.
        console.error(error);
      });
  
  })
  (window.red5prosdk);