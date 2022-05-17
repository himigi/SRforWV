const express = require("express");
const app = express(),
  server = require("http").Server(app),
  io = require("socket.io")(server),
  rtsp = require("rtsp-ffmpeg"),
  RtspServer = require("rtsp-streaming-server").default,
  child_process = require("child_process");

server.listen(5000, () => {
  console.log("✨ 5000 server on!");
});

app.use(express.static("public"));

//rtsp 서버 포트 열기
const rtspServer = new RtspServer({
  serverPort: 5554,
  clientPort: 6554,
  rtpPortStart: 10000,
  rtpPortCount: 10000,
});

//rtsp 서버 오픈, 스크린(gdigrab)을 ffmpeg로 인코딩
async function serverRun() {
  try {
    await rtspServer.start();
    console.log("✨ RTSP server open!");
    child_process.exec(
      "ffmpeg -f gdigrab -framerate 360 -i desktop -codec h264 -acodec aac -pix_fmt yuv420p -f mpegts -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 55 -pix_fmt yuv420p -f rtsp rtsp://127.0.0.1:5554/stream1"
    );
  } catch (error) {
    console.error(error);
  }
}

//버튼 이벤트 수신 -> 서버 run
io.on("connection", (socket) => {
  socket.on("click", () => {
    serverRun();
  });
});

//인코딩된 화면 client로 보내기
const uri = "rtsp://127.0.0.1:6554/stream1";
const stream = new rtsp.FFMpeg({ input: uri }); //생성자 함수

io.on("connection", (socket) => {
  const pipeStream = (data) => {
    socket.emit("data", data.toString("base64"));
    console.log(data);
    console.log(data.toJSON());
  };

  stream.on("data", pipeStream);
  socket.on("disconnect", () => {
    stream.removeListener("data", pipeStream);
  });
});
