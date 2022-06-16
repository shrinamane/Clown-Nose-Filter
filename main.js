function preload(){

}
function setup(){
canvas = createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotResult)
}
function draw(){
image(video,0,0,300,300)
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResult(results){
if (results.length>0) {
    console.log(results)
    console.log("nosx=" +results[0].pose.nose.x) 
    console.log("nosy=" +results[0].pose.nose.y) 
}
}