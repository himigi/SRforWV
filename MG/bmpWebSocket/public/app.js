const webSocket = new WebSocket("ws://localhost:3000"); // Connecting Server

const btn = document.querySelector("form input"); // Declaring

// Noticing when connection open
webSocket.onopen = () => {
  console.log("Connected");
};
// Catching Error
webSocket.onerror = (err) => {
  console.log(err);
};
// Noticing when connection close
webSocket.onclose = () => {
  console.log("Disconnected");
};

// When click button
btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicked!");
  const request = btn.value;
  webSocket.send(request);
  webSocket.send("Still connected(from browser)");
});

// Logging when anything received
webSocket.onmessage = (e) => {
  console.log("received data is... : ", e);
  console.log("BMP received!");

  var blob = e.data;
  console.log("blob size is ... : " + blob.size + " byte.");

  var uri = createObjectURL(blob);
  console.log(uri);
  var img = document.createElement("img");
  img.src = uri;
  document.body.appendChild(img);
};

function createObjectURL(blob) {
  if (window.webkitURL) {
    return window.webkitURL.createObjectURL(blob);
  } else if (window.URL && window.URL.createObjectURL) {
    return window.URL.createObjectURL(blob);
  } else {
    return null;
  }
}
