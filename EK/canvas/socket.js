const fs = require("fs");
const WebSocket = require("ws");
const path = require("path");

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    console.log("소켓 연결!");

    ws.on("message", (message) => {
      if (message.toString() === "Send me BMP!") {
        fs.readFile(path.join(__dirname, "/public/video.mp4"), (err, data) => {
          if (err) throw err;
          console.log(data);
          console.log(data.toJSON());
          ws.send(data);
        });
        console.log("okay, BMP 가고있어 ");
      }
      console.log(message.toString());
    });

    ws.on("error", (error) => {
      console.error(error);
    });

    ws.on("close", (e) => {
      console.log("연결 종료!");
  });
};
