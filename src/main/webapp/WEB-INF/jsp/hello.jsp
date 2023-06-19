<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
    />
    <link rel="stylesheet" href="css/adminlte.css" />
    <!-- <link rel="stylesheet" href="css/fontawesome.min.css" /> -->
    <style>
      #video-slider {
        width: 100%;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <!-- <script src="js/adminlte.js"></script> -->
    <div class="wrapper" style="    margin: 0 auto;
    padding: 5px;
    box-sizing: border-box;
    max-width: 2120px;">
      <!-- <aside class="main-sidebar"></aside> -->
      <div class="card card-outline card-lightblue">
        <div class="card-header" style="width:2065 !important"><img decoding="async" style="height:30px" src="css/syulogo.png"> 캡스톤디자인2</div>
      </div>
      <!-- <div class="content-wrapper"> -->
        <div style="display: flex; flex-direction: row">
        <div class="card card-outline card-primary">
          <div class="card-header">영상</div>
          <div class="card-body" >
            <canvas
              id="canvas"
              width="2065"
              height="750"
              style="
                text-align: center;
                border: 1px solid ;
                background-size: cover;
              "
            >
            </canvas>
            <!-- <input
              type="range"
              id="video-slider"
              min="0"
              max="100"
              value="0"
              step="1"
              data-slider-tooltip="always"
              oninput="onSliderChange(this.value)"
            />     -->
          </div>
        </div>
        </div>
        <div style="display: flex; flex-direction: row">
          <div class="card card-outline card-primary">
            <div class="card-header card-primary">버튼</div>
            <div class="card-body">
              <a class="btn btn-app" id="backward"> <i class="fas fa-backward"></i> Prev </a>
              <a class="btn btn-app" id="play"> <i class="fas fa-play"></i> Play </a>
              <a class="btn btn-app" id="pause"> <i class="fas fa-pause"></i> Pause </a>
              <a class="btn btn-app" id="forward"> <i class="fas fa-forward"></i> Next </a>
              <a class="btn btn-app" id="180"> <i class="fas fa-adjust"></i> 180 </a>
              <a class="btn btn-app" id="360"> <i class="fas fa-circle"></i> 360 </a>  
              <a class="btn btn-app" id="rotation"> <i class="fas fa-redo"></i> rotation </a>  
            </div>
          </div>
          <div class="card card-outline card-primary">
            <div class="card-header">카메라</div>
            <div class="card-body">
              <a class="btn btn-app" id="camera1"> <i class="fas fa-camera"></i> #1 </a>
              <a class="btn btn-app" id="camera2"> <i class="fas fa-camera"></i> #2 </a>
              <a class="btn btn-app" id="camera3"> <i class="fas fa-camera"></i> #3 </a>
              <a class="btn btn-app" id="camera4"> <i class="fas fa-camera"></i> #4 </a>
              <a class="btn btn-app" id="camera5"> <i class="fas fa-camera"></i> #5 </a>
              <a class="btn btn-app" id="camera6"> <i class="fas fa-camera"></i> #6 </a>
              <a class="btn btn-app" id="camera7"> <i class="fas fa-camera"></i> #7 </a>
            </div>
          </div>
        </div>
    </div>

      <!-- <footer class="main-footer"></footer> -->
    </div>
  </body>
</html>

<script src="js/main.js"></script>
