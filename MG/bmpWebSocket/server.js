// 패키지 소환
const express = require("express");
const path = require("path");
const fs = require("fs");
const ws = require("ws");

// 서버 열고 웹소켓 올림
const app = express();
const HTTPServer = app.listen(3000, () => {
  console.log("Server listening on 3000");
});
const wss = new ws.Server({ server: HTTPServer });

// static으로 정적 리소스 읽을 준비
app.use(express.static("public"));

// 라우팅. 여기서는 public폴더에 index.html 파일을 불러들이고 있음.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// 테스트 편의를 위해 모든 경로를 root 경로로 리다이렉트.
app.get("/*", (req, res) => {
  res.redirect("/");
});

// 웹소켓서버 실행
wss.on("connection", (ws, request) => {
  console.log("WSS Connected");

  // 웹소켓서버에서 현재 발생된 소켓에 대한 에러와 close 메세지 미리 적어둠.
  ws.on("error", (err) => console.log(err));
  ws.on("close", () => console.log("WSS Disconnected"));

  // 소켓에서 이벤트 발생시 (고양이 mp4 약 24초길이 총 120장짜리 )
  ws.on("message", (msg) => {
    if (msg.toString() === "Send me!") {
      for (i = 1; i < 120; i++) {
        (function (x) {
          setTimeout(() => {
            console.log(x);
            fs.readFile(
              path.join(
                __dirname,
                `/public/mp4/pexels-anete-lusina-5248199_out (${x}).bmp`
              ),
              (err, data) => {
                if (err) throw err;
                console.log(data); // 서버 콘솔에서 현재 읽어들인 data 통째로 로그 찍어봄
                console.log(data.toJSON()); // 서버 콘솔에서 data의 JSON형태는 어떨지 로그 찍어봄
                ws.send(data); // 소켓으로 클라이언트에 send
              }
            );
          }, 200 * x);
        })(i);
      }
    }
  });
});

/*
  // 소켓에서 이벤트 발생시 프로세스 (사진 1장)
  ws.on("message", (msg) => {
    if (msg.toString() === "Send me BMP!") {
      // 여기서는 클라이언트에서 요청 이벤트 발생 시 파일을 읽고 있지만, 원래는 읽은 상태에서 서버가 대기하는게 더 좋을듯
      fs.readFile(
        // path.join(__dirname, "/public/spotcatJPG.jpg"),
        // path.join(__dirname, "/public/snowleopardPNG.png"),
        path.join(__dirname, "/public/greenBMP.bmp"),
        (err, data) => {
          if (err) throw err;
          
          console.log(data); // 서버 콘솔에서 현재 읽어들인 data 통째로 로그 찍어봄
          console.log(data.toJSON()); // 서버 콘솔에서 data의 JSON형태는 어떨지 로그 찍어봄
          ws.send(data); // 소켓으로 클라이언트에 send
        }
      );
      console.log("Okay, BMP on way");
    }
  });
});
*/
