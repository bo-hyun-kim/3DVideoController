<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
    />
    <link rel="stylesheet" href="css/adminlte.css" />
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
    <link href="css/prism.css" rel="stylesheet">
    <link href="https://raw.githubusercontent.com/koehlersimon/bootstrap-videoplayer/master/favicon.ico" rel="shortcut icon">
    <!-- <link rel="stylesheet" href="css/fontawesome.min.css" /> -->
    <style>
      #rotatespeed-slider {
        width: 50%;
        margin-left: 10px;
      }
    </style>
  </head>
  <body>
    <!-- <script src="js/adminlte.js"></script> -->
    <div  style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <!-- <aside class="main-sidebar"></aside> -->
      <!-- <div class="content-wrapper"> -->
        <div class="container">
          
        </div>
        <div class="context-wrapper">
          <div class="ui">
            <div style="display: flex; justify-content: center; align-items: center;" class="card-body">
              <canvas
                id="canvas"
                width="1320"
                height="700"
                style="border: none !important;
                       border: 1px solid;
                       background-size: cover;
                       margin-top: 20px;
                       margin-left: 30px;"
              >
              </div>
            
            <div class="ui-actions">
              <div class="ui-cover-title">
                <h2 style="font-weight: bold;">tennis practice</h2>
                <h4>student</h4>
              </div>
            </div>
            <div class="ui-controls">
              <a class="btn btn-app" id="180"> <i class="fas fa-adjust"></i></a>
              <a class="btn btn-app" id="360"> <i class="fas fa-circle"></i></a>  
              <a class="btn btn-app" id="rotation"> <i class="fas fa-redo"></i></a>
              <input
              type="range"
              id="rotatespeed-slider"
              min="100"
              max="400"
              value="210"
              step="10"
              oninput="onVideoSliderChange(this.value)"
            /> 
            <span id="rotatespeed-value">210</span>
            </div>
            <div>
              <input
                class="ui-color"
                type="range"
                id="video-slider"
                style="width: 100%;"
                min="0"
                max="100"
                value="0"
                step="1"
                data-slider-tooltip="always"
                oninput="onSliderChange(this.value)"
              />    
            </div>
            <div class="ui-controls">
              <a class="btn btn-app" id="backward"><i class="fas fa-step-backward"></i></a>
              <a class="btn btn-app" id="play"> <i class="fas fa-play"></i></a>
              <a class="btn btn-app" id="pause"> <i class="fas fa-pause"></i></a>
              <a class="btn btn-app" id="forward"><i class="fas fa-step-forward"></i></a>
            </div>
          </div>
          <div class="card-body" style="display: flex; flex-direction: column;">
            <a class="btn btn-app" id="camera1"> <i class="fas fa-camera"></i>#1 </a>
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
  </body>
</html>

<script src="js/main.js"></script>
<script crossorigin="anonymous" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>