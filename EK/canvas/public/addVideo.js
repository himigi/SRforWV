const canvas = document.querySelector(".canvas"); //html 요소들을 js에서 변경, 단 첫번째 요소만!
const ctx = canvas.getContext("2d"); //렌더링 컨텍스트 타입을 지정하는 하나의 파라메터 // CanvasRenderingContext2D (en-US)을 얻기위해 "2d"로 지정

//ctx.textAlign = "center";
//ctx.fillText("비디오 로딩 중..", 300, 200);

// let canPlayState = false;

const myVideo = document.querySelector(".video");
myVideo.addEventListener("canplaythrough", render); // 이미지는 load, 비디오는 canplaythrough 이벤트 사용

function render() {
  ctx.drawImage(myVideo, 0, 0, 600, 400); // 첫 번째 인자로 비디오를 넣어준다.
  requestAnimationFrame(render); //프레임 단위로 픽셀을 재렌더링하는 효과 API
}
