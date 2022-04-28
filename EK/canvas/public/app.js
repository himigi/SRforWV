const webSocket = new WebSocket("ws://localhost:5000");

const btn = document.querySelector("form input");

webSocket.onopen = function () {
  console.log("클라이언트: 서버와 웹소켓 연결 성공!");
};
webSocket.onmessage = function (event) {
  console.log(event.data);
  webSocket.send("클라이언트가 서버로 보내는 부분");
};
