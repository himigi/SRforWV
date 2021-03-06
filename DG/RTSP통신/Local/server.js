const express = require('express')
const path = require("path")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const rtsp = require("rtsp-ffmpeg")
const RtspServer = require("rtsp-streaming-server").default;
const child_process = require("child_process");

// [ ============================= http 서버 생성 ============================= ]
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
  }); 

//static으로 정적 리소스 읽을 준비
app.use("/", express.static(path.join(__dirname, "public")))

server.listen(6148, ()=>{
  console.log('✅ 6148포트  연결')
}); //열고싶은 포트번호 입력



// rtsp 서버
io.on("connection", (socket) => {
  // [ ================================================= PORT 분기처리 : one ================================================= ]
  socket.on('one', (one)=>{
    if(one === "one"){
      // [ ======= rtsp서버 설정 & FFMPEG 으로 화면영상 인코딩후 보내기 ======= ]
      const cp = 6551
      console.log('cp done one')

      const rtspServer = new RtspServer({
        serverPort: 5551,//서버 포트
        clientPort: cp,// 클라이언트 포트
        rtpPortStart: 10001,
        rtpPortCount: 10001,
      });

      // [ FFMPEG 함수 선언 : yuv420인코딩 후 데이터 송신 명령문 cmd에서 실행 ]
      async function serverRun() {
        try {
          await rtspServer.start();
          console.log("✅ RTSP server open");
          child_process.exec(
            'ffmpeg -f gdigrab -framerate 60 -i title="업무망PC-100" -codec h264 -acodec aac -pix_fmt yuv420p -f mpegts -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 50 -pix_fmt yuv420p -f rtsp rtsp://127.0.0.1:5551/stream1'
          );
        } catch (e) {
          console.error(e);
        }
      }


      // 버튼이벤트 값 수신후 serverRun() 함수 실행
      io.on("connection", (socket) => {
        socket.on('click',()=>{
          serverRun()
        })
      })

      // [ =======  FFMPEG 으로 인코딩된 화면 영상 받은후 client에 보내주기 ======= ]
      // rtsp를 통한 ffmpeg 인코딩 데이터 받기
      var uri = "rtsp://127.0.0.1:6551/stream1",
      stream = new rtsp.FFMpeg({ input: uri });

      io.on("connection", function (socket) {
      var pipeStream = function (data) {
        socket.emit("one")
        socket.emit("data", data.toString("base64"));
      };
      
      stream.on("data", pipeStream);
      socket.on("disconnect", function () {
        stream.removeListener("data", pipeStream);
      });

      });
      
    }
  })

  // [ ================================================= PORT 분기처리 : two ================================================= ]
  socket.on('two', (two)=>{
    if(two === "two"){
      // [ ======= rtsp서버 설정 & FFMPEG 으로 화면영상 인코딩후 보내기 ======= ]
      const cp = 6552
      console.log('cp done two')

      const rtspServer = new RtspServer({
        serverPort: 5552,//서버 포트
        clientPort: cp,// 클라이언트 포트
        rtpPortStart: 10002,
        rtpPortCount: 10002,
      });

      // [ FFMPEG 함수 선언 : yuv420인코딩 후 데이터 송신 명령문 cmd에서 실행 ]
      async function serverRun() {
        try {
          await rtspServer.start();
          console.log("✅ RTSP server open");
          child_process.exec(
            'ffmpeg -f gdigrab -framerate 60 -i title="업무망PC-100" -codec h264 -acodec aac -pix_fmt yuv420p -f mpegts -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 50 -pix_fmt yuv420p -f rtsp rtsp://127.0.0.1:5552/stream1'
          );
        } catch (e) {
          console.error(e);
        }
      }


      // 버튼이벤트 값 수신후 serverRun() 함수 실행
      io.on("connection", (socket) => {
        socket.on('click',()=>{
          serverRun()
        })
      })

      // [ =======  FFMPEG 으로 인코딩된 화면 영상 받은후 client에 보내주기 ======= ]
      // rtsp를 통한 ffmpeg 인코딩 데이터 받기
      var uri = "rtsp://127.0.0.1:6552/stream1",
      stream = new rtsp.FFMpeg({ input: uri });

      io.on("connection", function (socket) {
      var pipeStream = function (data) {
        socket.emit("two")
        socket.emit("data", data.toString("base64"));
      };
      
      stream.on("data", pipeStream);
      socket.on("disconnect", function () {
        stream.removeListener("data", pipeStream);
      });

      });
      
    }
  })

  // // [ ================================================= PORT 분기처리 : three ================================================= ]
  // socket.on('one', (one)=>{
  //   if(one === "one"){
  //     // [ ======= rtsp서버 설정 & FFMPEG 으로 화면영상 인코딩후 보내기 ======= ]
  //     const cp = 6551
  //     console.log('cp done')

  //     const rtspServer = new RtspServer({
  //       serverPort: 5554,//서버 포트
  //       clientPort: cp,// 클라이언트 포트
  //       rtpPortStart: 10000,
  //       rtpPortCount: 10000,
  //     });

  //     // [ FFMPEG 함수 선언 : yuv420인코딩 후 데이터 송신 명령문 cmd에서 실행 ]
  //     async function serverRun() {
  //       try {
  //         await rtspServer.start();
  //         console.log("✅ RTSP server open");
  //         child_process.exec(
  //           'ffmpeg -f gdigrab -framerate 360 -i title="업무망PC-100" -codec h264 -acodec aac -pix_fmt yuv420p -f mpegts -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 100 -pix_fmt yuv420p -f rtsp rtsp://127.0.0.1:5554/stream1'
  //         );
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     }


  //     // 버튼이벤트 값 수신후 serverRun() 함수 실행
  //     io.on("connection", (socket) => {
  //       socket.on('click',()=>{
  //         serverRun()
  //       })
  //     })

  //     // [ =======  FFMPEG 으로 인코딩된 화면 영상 받은후 client에 보내주기 ======= ]
  //     // rtsp를 통한 ffmpeg 인코딩 데이터 받기
  //     var uri = "rtsp://127.0.0.1:6551/stream1",
  //     stream = new rtsp.FFMpeg({ input: uri });

  //     io.on("connection", function (socket) {
  //     var pipeStream = function (data) {
  //       socket.emit("one")
  //       socket.emit("data", data.toString("base64"));
  //     };
      
  //     stream.on("data", pipeStream);
  //     socket.on("disconnect", function () {
  //       stream.removeListener("data", pipeStream);
  //     });

  //     });
      
  //   }
  // })

  // // [ ================================================= PORT 분기처리 : four ================================================= ]
  // socket.on('one', (one)=>{
  //   if(one === "one"){
  //     // [ ======= rtsp서버 설정 & FFMPEG 으로 화면영상 인코딩후 보내기 ======= ]
  //     const cp = 6551
  //     console.log('cp done')

  //     const rtspServer = new RtspServer({
  //       serverPort: 5554,//서버 포트
  //       clientPort: cp,// 클라이언트 포트
  //       rtpPortStart: 10000,
  //       rtpPortCount: 10000,
  //     });

  //     // [ FFMPEG 함수 선언 : yuv420인코딩 후 데이터 송신 명령문 cmd에서 실행 ]
  //     async function serverRun() {
  //       try {
  //         await rtspServer.start();
  //         console.log("✅ RTSP server open");
  //         child_process.exec(
  //           'ffmpeg -f gdigrab -framerate 360 -i title="업무망PC-100" -codec h264 -acodec aac -pix_fmt yuv420p -f mpegts -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 100 -pix_fmt yuv420p -f rtsp rtsp://127.0.0.1:5554/stream1'
  //         );
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     }


  //     // 버튼이벤트 값 수신후 serverRun() 함수 실행
  //     io.on("connection", (socket) => {
  //       socket.on('click',()=>{
  //         serverRun()
  //       })
  //     })

  //     // [ =======  FFMPEG 으로 인코딩된 화면 영상 받은후 client에 보내주기 ======= ]
  //     // rtsp를 통한 ffmpeg 인코딩 데이터 받기
  //     var uri = "rtsp://127.0.0.1:6551/stream1",
  //     stream = new rtsp.FFMpeg({ input: uri });

  //     io.on("connection", function (socket) {
  //     var pipeStream = function (data) {
  //       socket.emit("one")
  //       socket.emit("data", data.toString("base64"));
  //     };
      
  //     stream.on("data", pipeStream);
  //     socket.on("disconnect", function () {
  //       stream.removeListener("data", pipeStream);
  //     });

  //     });
      
  //   }
  // })
})



  




