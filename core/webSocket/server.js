var socket = new WebSocket('ws://127.0.0.1:12010/updates');

socket.onopen = function () {
    setInterval(function () {
        if (socket.bufferedAmount == 0) {

        }
    })
}