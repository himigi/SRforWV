"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Client", {
  enumerable: true,
  get: function () {
    return _Client.Client;
  }
});
Object.defineProperty(exports, "ClientServerHooksConfig", {
  enumerable: true,
  get: function () {
    return _ClientServer.ClientServerHooksConfig;
  }
});
Object.defineProperty(exports, "ClientWrapper", {
  enumerable: true,
  get: function () {
    return _ClientWrapper.ClientWrapper;
  }
});
Object.defineProperty(exports, "Mount", {
  enumerable: true,
  get: function () {
    return _Mount.Mount;
  }
});
Object.defineProperty(exports, "Mounts", {
  enumerable: true,
  get: function () {
    return _Mounts.Mounts;
  }
});
Object.defineProperty(exports, "PublishServer", {
  enumerable: true,
  get: function () {
    return _PublishServer.PublishServer;
  }
});
Object.defineProperty(exports, "PublishServerHooksConfig", {
  enumerable: true,
  get: function () {
    return _PublishServer.PublishServerHooksConfig;
  }
});
Object.defineProperty(exports, "RtpUdp", {
  enumerable: true,
  get: function () {
    return _RtpUdp.RtpUdp;
  }
});
exports.default = void 0;

var _Client = require("./lib/Client");

var _ClientServer = require("./lib/ClientServer");

var _ClientWrapper = require("./lib/ClientWrapper");

var _Mount = require("./lib/Mount");

var _Mounts = require("./lib/Mounts");

var _PublishServer = require("./lib/PublishServer");

var _RtpUdp = require("./lib/RtpUdp");

class RtspServer {
  constructor(config) {
    this.Mounts = new _Mounts.Mounts({
      rtpPortCount: config.rtpPortCount,
      rtpPortStart: config.rtpPortStart
    });
    this.PublishServer = new _PublishServer.PublishServer(config.serverPort, this.Mounts, config.publishServerHooks);
    this.ClientServer = new _ClientServer.ClientServer(config.clientPort, this.Mounts, config.clientServerHooks);
  }

  async start() {
    try {
      await this.PublishServer.start();
      await this.ClientServer.start();
    } catch (e) {
      throw e;
    }
  }

}

exports.default = RtspServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJSdHNwU2VydmVyIiwiY29uc3RydWN0b3IiLCJjb25maWciLCJNb3VudHMiLCJydHBQb3J0Q291bnQiLCJydHBQb3J0U3RhcnQiLCJQdWJsaXNoU2VydmVyIiwic2VydmVyUG9ydCIsInB1Ymxpc2hTZXJ2ZXJIb29rcyIsIkNsaWVudFNlcnZlciIsImNsaWVudFBvcnQiLCJjbGllbnRTZXJ2ZXJIb29rcyIsInN0YXJ0IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVllLE1BQU1BLFVBQU4sQ0FBaUI7QUFLOUJDLEVBQUFBLFdBQVcsQ0FBRUMsTUFBRixFQUE0QjtBQUNyQyxTQUFLQyxNQUFMLEdBQWMsSUFBSUEsY0FBSixDQUFXO0FBQ3ZCQyxNQUFBQSxZQUFZLEVBQUVGLE1BQU0sQ0FBQ0UsWUFERTtBQUV2QkMsTUFBQUEsWUFBWSxFQUFFSCxNQUFNLENBQUNHO0FBRkUsS0FBWCxDQUFkO0FBS0EsU0FBS0MsYUFBTCxHQUFxQixJQUFJQSw0QkFBSixDQUFrQkosTUFBTSxDQUFDSyxVQUF6QixFQUFxQyxLQUFLSixNQUExQyxFQUFrREQsTUFBTSxDQUFDTSxrQkFBekQsQ0FBckI7QUFFQSxTQUFLQyxZQUFMLEdBQW9CLElBQUlBLDBCQUFKLENBQWlCUCxNQUFNLENBQUNRLFVBQXhCLEVBQW9DLEtBQUtQLE1BQXpDLEVBQWlERCxNQUFNLENBQUNTLGlCQUF4RCxDQUFwQjtBQUNEOztBQUVELFFBQU1DLEtBQU4sR0FBOEI7QUFDNUIsUUFBSTtBQUNGLFlBQU0sS0FBS04sYUFBTCxDQUFtQk0sS0FBbkIsRUFBTjtBQUNBLFlBQU0sS0FBS0gsWUFBTCxDQUFrQkcsS0FBbEIsRUFBTjtBQUNELEtBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixZQUFNQSxDQUFOO0FBQ0Q7QUFDRjs7QUF2QjZCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2xpYi9DbGllbnQnO1xuaW1wb3J0IHsgQ2xpZW50U2VydmVyLCBDbGllbnRTZXJ2ZXJIb29rc0NvbmZpZyB9IGZyb20gJy4vbGliL0NsaWVudFNlcnZlcic7XG5pbXBvcnQgeyBDbGllbnRXcmFwcGVyIH0gZnJvbSAnLi9saWIvQ2xpZW50V3JhcHBlcic7XG5pbXBvcnQgeyBNb3VudCB9IGZyb20gJy4vbGliL01vdW50JztcbmltcG9ydCB7IE1vdW50cyB9IGZyb20gJy4vbGliL01vdW50cyc7XG5pbXBvcnQgeyBQdWJsaXNoU2VydmVyLCBQdWJsaXNoU2VydmVySG9va3NDb25maWcgfSBmcm9tICcuL2xpYi9QdWJsaXNoU2VydmVyJztcbmltcG9ydCB7IFJ0cFVkcCB9IGZyb20gJy4vbGliL1J0cFVkcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnRzcFNlcnZlckNvbmZpZyB7XG4gIGNsaWVudFBvcnQ6IG51bWJlcjtcbiAgcnRwUG9ydENvdW50OiBudW1iZXI7XG4gIHJ0cFBvcnRTdGFydDogbnVtYmVyO1xuICBzZXJ2ZXJQb3J0OiBudW1iZXI7XG5cbiAgcHVibGlzaFNlcnZlckhvb2tzPzogUHVibGlzaFNlcnZlckhvb2tzQ29uZmlnO1xuICBjbGllbnRTZXJ2ZXJIb29rcz86IENsaWVudFNlcnZlckhvb2tzQ29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdHNwU2VydmVyIHtcbiAgcHVibGljIENsaWVudFNlcnZlcjogQ2xpZW50U2VydmVyO1xuICBwdWJsaWMgTW91bnRzOiBNb3VudHM7XG4gIHB1YmxpYyBQdWJsaXNoU2VydmVyOiBQdWJsaXNoU2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWc6IFJ0c3BTZXJ2ZXJDb25maWcpIHtcbiAgICB0aGlzLk1vdW50cyA9IG5ldyBNb3VudHMoe1xuICAgICAgcnRwUG9ydENvdW50OiBjb25maWcucnRwUG9ydENvdW50LFxuICAgICAgcnRwUG9ydFN0YXJ0OiBjb25maWcucnRwUG9ydFN0YXJ0XG4gICAgfSk7XG5cbiAgICB0aGlzLlB1Ymxpc2hTZXJ2ZXIgPSBuZXcgUHVibGlzaFNlcnZlcihjb25maWcuc2VydmVyUG9ydCwgdGhpcy5Nb3VudHMsIGNvbmZpZy5wdWJsaXNoU2VydmVySG9va3MpO1xuXG4gICAgdGhpcy5DbGllbnRTZXJ2ZXIgPSBuZXcgQ2xpZW50U2VydmVyKGNvbmZpZy5jbGllbnRQb3J0LCB0aGlzLk1vdW50cywgY29uZmlnLmNsaWVudFNlcnZlckhvb2tzKTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0ICgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5QdWJsaXNoU2VydmVyLnN0YXJ0KCk7XG4gICAgICBhd2FpdCB0aGlzLkNsaWVudFNlcnZlci5zdGFydCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIENsaWVudCxcbiAgQ2xpZW50U2VydmVySG9va3NDb25maWcsXG4gIENsaWVudFdyYXBwZXIsXG4gIE1vdW50LFxuICBNb3VudHMsXG4gIFB1Ymxpc2hTZXJ2ZXIsXG4gIFB1Ymxpc2hTZXJ2ZXJIb29rc0NvbmZpZyxcbiAgUnRwVWRwXG59O1xuIl19