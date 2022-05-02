## how to run :

### 1. npm i

### 2. node server.js

### localhost:3000

#### How to use FFMPEG

#### FFMPEG Send : ffmpeg -f gdigrab -framerate 15 -i title="Windows PowerShell" -codec h264 -acodec aac -pix_fmt yuv420p -f mpegts -c:v libx264 -r 15 -preset ultrafast -tune zerolatency -crf 25 -pix_fmt yuv420p -f rtsp rtsp://127.0.0.1:5554/stream1

#### FFMPEG Receive : ffplay -i rtsp://127.0.0.1:6554/stream1
