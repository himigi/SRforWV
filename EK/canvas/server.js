const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

const webSocket = require("./socket");

const app = express();

app.set("port", process.env.PORT || 5000);
app.set("view engine", "html");

app.use("/public", express.static(path.join(__dirname, "/public"))); //app.use는 앱 전체에 사용할 시
// app.use(express.static("public"));

app.get("/", (req, res) => {
  //get은 요청시에만
  //res.send("Hello, Express");
  res.sendFile(path.join(__dirname, "/index.html")); //__dirname은 현재경로
});

const server = app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server on!");
});

webSocket(server);
