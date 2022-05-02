const express = require("express");

const webSocket = require("./socket");

const app = express();

app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server on!");
});

app.use(express.static("public"));

webSocket(server);
