const webSocket = new WebSocket("ws://localhost:3000"); // Connecting Server

const btn = document.querySelector("form input"); // Declaring
const canvas = document.querySelector("canvas");
canvas.width = 1500;
canvas.height = 1000;

const img = new Image();

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

// // Logging when anything received(URL version test)
// webSocket.onmessage = (e) => {
//   e.preventDefault();
//   console.log("received data is... : ", e);
//   console.log("Data received!");

//   var imgURL = e.data;
//   console.log(imgURL);
//   img.src = imgURL;
//   img.onload = () => {
//     canvas.getContext("2d").drawImage(img, 0, 0);
//   };
// };

// Logging when anything received(Mp4 version)
webSocket.onmessage = (e) => {
  e.preventDefault();
  console.log("BMP received!");
  console.log("received data is... : ", e);

  var blob = e.data;

  var uri = createObjectURL(blob);
  console.log("uri is ...: ", uri);
  img.src = uri;
  img.onload = () => {
    canvas.getContext("2d").drawImage(img, 0, 0);
  };
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
