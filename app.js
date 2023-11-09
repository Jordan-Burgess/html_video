let videoElem = document.querySelector(".livestream")

navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
    videoElem.srcObject = stream
})
.catch(error => {
    console.error(error)
})
