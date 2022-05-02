const ffmpeg = require('ffmpeg')

const targetMP4File = 'http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv'  //영상 파일
const to_img_file = './build' // 사진 저장될 위치
new ffmpeg( targetMP4File,  (err, video)=>{  //ffmpeg 객체 생성
    if (!err) {
        console.log(video.metadata)  //비디오 메타정보(시간, 길이, 형식 등등)

        //#0. 이미지 추출 옵션
        let img_option = {
            start_time : 0,
            frame_rate : 1,
            number : video.metadata.duration.seconds,
            file_name : 'file_%t_%s'
        }
        //#1. 동영상에서 이미지를 추출하기 (비동기 방식)
        video.fnExtractFrameToJPG(to_img_file, img_option, (error, files)=>{
            if(!error) console.log('finish imgs!')
        });       
    }
})