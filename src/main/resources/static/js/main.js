const video = document.getElementById("canvas");
const myContext = video.getContext("2d");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const prevButton = document.getElementById("backward");
const nextButton = document.getElementById("forward");
const rotate180Button = document.getElementById("180");
const rotate360Button = document.getElementById("360");
const camera1Button = document.getElementById("camera1");
const camera2Button = document.getElementById("camera2");
const camera3Button = document.getElementById("camera3");
const camera4Button = document.getElementById("camera4");
const camera5Button = document.getElementById("camera5");
const camera6Button = document.getElementById("camera6");
const camera7Button = document.getElementById("camera7");
const transitionButton = document.getElementById("rotation");
const videoSlider = document.getElementById("video-slider");
const camera_number = 7;
let camera_index = 0;
let photo_index = 1;
let i = 1;
let imageUrl = [];
let imageURL1 = [];
let imageURL2 = [];
let imageURL3 = [];
let imageURL4 = [];
let imageURL5 = [];
let imageURL6 = [];
let imageURL7 = [];
let myTimeout = 0;
let myInterval = 0;
let isPaused = false;
let rotationSpeed = 210;
const rotatespeedSlider = document.getElementById("rotatespeed-slider");
const rotatespeedValue = document.getElementById("rotatespeed-value");

//클릭 이벤트 리스너
playButton.addEventListener("click", playVideoFunction);
pauseButton.addEventListener("click", pauseVideoFunction);
prevButton.addEventListener("click", prevVideoFunction);
nextButton.addEventListener("click", nextVideoFunction);
transitionButton.addEventListener("click", transitionFunction);
rotate180Button.addEventListener("click", function () {
  init(180, 961);
  camera_index = 0;
});
rotate360Button.addEventListener("click", function () {
  init(360, 861);
  camera_index = 0;
});
camera1Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(0);
  }
  camera_index = 0;
});
camera2Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(1);
  }
  camera_index = 1;
});
camera3Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(2);
  }
  camera_index = 2;
});
camera4Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(3);
  }
  camera_index = 3;
});
camera5Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(4);
  }
  camera_index = 4;
});
camera6Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(5);
  }
  camera_index = 5;
});
camera7Button.addEventListener("click", function () {
  if (isPaused) {
    pausedTransition(6);
  }
  camera_index = 6;
});

//각 디렉토리에 있는 사진 업로드
function init(angle, length) {
  imageURL1 = [];
  imageURL2 = [];
  imageURL3 = [];
  imageURL4 = [];
  imageURL5 = [];
  imageURL6 = [];
  imageURL7 = [];

  for (let i = 1; i <= length; i++) {
    imageURL1.push(`/img/camera1/${angle}/${i}.jpg`);
    imageURL2.push(`/img/camera2/${angle}/${i}.jpg`);
    imageURL3.push(`/img/camera3/${angle}/${i}.jpg`);
    imageURL4.push(`/img/camera4/${angle}/${i}.jpg`);
    imageURL5.push(`/img/camera5/${angle}/${i}.jpg`);
    imageURL6.push(`/img/camera6/${angle}/${i}.jpg`);
    imageURL7.push(`/img/camera7/${angle}/${i}.jpg`);
  }
}
init(180, 961);

//현재 카메라인덱스에 해당하는 이미지 배열 가져오는 함수
function getCamDir(cam_num) {
  if (cam_num === 0) {
    imageUrl = imageURL1;
  } else if (cam_num === 1) {
    imageUrl = imageURL2;
  } else if (cam_num === 2) {
    imageUrl = imageURL3;
  } else if (cam_num === 3) {
    imageUrl = imageURL4;
  } else if (cam_num === 4) {
    imageUrl = imageURL5;
  } else if (cam_num === 5) {
    imageUrl = imageURL6;
  } else if (cam_num === 6) {
    imageUrl = imageURL7;
  }
}

function pausedTransition(cam) {
  getCamDir(cam);
  const img = new Image();
  img.src = imageUrl[i];
  img.onload = () => {
    myContext.drawImage(img, 0, 0);
    const sliderValue = Math.floor((i / (imageUrl.length - 1)) * 100);
    videoSlider.value = sliderValue;
  };
}

//실행버튼 클릭시 동작
function draw_image() {
  if (myTimeout) {
    pauseVideoFunction();
  }
  let c_index = camera_index;
  getCamDir(c_index);
  const img = new Image();
  img.src = imageUrl[i];
  // console.log("img i값" + i);
  img.onload = () => {
    //img가 로드되면 drawImage 메서드 실행
    myContext.drawImage(img, 0, 0); //img: 그려질 이미지를 나타내는 요소, x: 이미지의 x좌표, y: 이미지의 y좌표
    const sliderValue = Math.floor((i / (imageUrl.length - 1)) * 100); // 이미지 인덱스에 따른 슬라이더 값 계산
    videoSlider.value = sliderValue; // 슬라이더 값을 업데이트
  };
  i++;
  if (i > imageUrl.length) {
    pauseVideoFunction();
    i = 0;
    return;
  }
  myTimeout = setTimeout(draw_image, 41);
}

function playVideoFunction() {
  draw_image();
  isPaused = false;
  // console.log("play 버튼 눌렀을때 isPaused", isPaused);
}

function pauseVideoFunction() {
  clearTimeout(myTimeout);
  clearInterval(myInterval);
  isPaused = true;
  // console.log("정지 버튼 눌렀을때 isPaused", isPaused);
}

function prevVideoFunction() {
  if (camera_index === 0) {
    camera_index = 6;
  }
  camera_index = --camera_index % camera_number;
  draw_image();
}

function nextVideoFunction() {
  camera_index = ++camera_index % camera_number;
  draw_image();
}

//현재 카메라 시점 기준 시점 변경만 해준 후 마지막 시점에서 play
function transitionFunction() {
  pauseVideoFunction();
  if (camera_index <= 5) {
    camera_index = 0;

    myInterval = setInterval(() => {
      getCamDir(camera_index);
      const img = new Image();
      img.src = imageUrl[i];
      img.onload = () => {
        myContext.drawImage(img, 0, 0);
        const sliderValue = Math.floor((i / (imageUrl.length - 1)) * 100);
        videoSlider.value = sliderValue;
      };
      camera_index++;
      console.log("camera index" + camera_index);
      if (camera_index == 6) {
        setTimeout(draw_image, rotationSpeed);
      }
    }, rotationSpeed);
  } else {
    camera_index = 6;

    myInterval = setInterval(() => {
      getCamDir(camera_index);
      const img = new Image();
      img.src = imageUrl[i];
      img.onload = () => {
        myContext.drawImage(img, 0, 0);
        const sliderValue = Math.floor((i / (imageUrl.length - 1)) * 100);
        videoSlider.value = sliderValue;
      };
      camera_index--;
      console.log("camera index" + camera_index);
      if (camera_index == 0) {
        setTimeout(draw_image, rotationSpeed);
      }
    }, rotationSpeed);
  }
  //console.log("rotationspeed: " + rotationSpeed);
}

//재생바 슬라이더
// 슬라이더 값이 변경되었을 때 실행되는 함수
function onSliderChange(value) {
  i = Math.floor((value * (imageUrl.length - 1)) / 100); // 슬라이더 값에 따라 이미지 인덱스 계산
  camera_index = Math.floor((value * camera_number) / 100); //카메라 인덱스 업데이트
  draw_image(); // 이미지를 그림
}

// 슬라이더 값 관련 이벤트 리스너
videoSlider.addEventListener("input", function () {
  onSliderChange(videoSlider.value);
});

//rotation속도 슬라이더
// 슬라이더 값이 변경되었을 때 실행되는 함수
function onVideoSliderChange(value) {
  rotationSpeed = parseInt(value);
  rotatespeedValue.textContent = rotationSpeed.toString();
}

// 슬라이더 값 관련 이벤트 리스너
rotatespeedSlider.addEventListener("input", function () {
  onVideoSliderChange(rotatespeedSlider.value);
});

//키 관련 이벤트리스너
window.addEventListener("keydown", function (event) {
  //console.log("스페이스바를 눌렀을때", isPaused);
  if (event.key == "ArrowLeft") {
    // left
    if (camera_index === 0) {
      camera_index = 7;
    }
    camera_index = --camera_index % camera_number;
    draw_image();
    console.log(camera_index);
  } else if (event.key == "ArrowRight") {
    // right
    camera_index = ++camera_index % camera_number;
    draw_image();
    console.log(camera_index);
  } else if (isPaused == false && event.key == " ") {
    //console.log(isPaused);
    // 스페이스바 키
    pauseVideoFunction();
    isPaused = true;
    //console.log("스페이스바로 정지");
  } else if (isPaused == true && event.key == " ") {
    //console.log(isPaused);
    // 스페이스바 키
    playVideoFunction();
    //console.log("스페이스바로 실행");
  }
});
