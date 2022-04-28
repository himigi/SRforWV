const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//ctx.fillText("Hello, HTML5!", 155, 110);

var testimg = new Image();

testimg.onload = function () {
  ctx.drawImage(testimg, 20, 20);
};
testimg.src = "https://t1.daumcdn.net/cfile/tistory/99CB97385C6596721D";
