class Socket {
  constructor(externalSocket) {
    this.socket = externalSocket;
  }

  emit(eventName, data) {
    this.socket.emit(eventName, data);
  }

  listen(eventName, callback) {
    this.socket.on(eventName, callback);
  }

  broadcast(eventName, data) {
    this.socket.broadcast.emit(eventName, data);
  }
}

module.exports = Socket;
