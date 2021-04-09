video="";
status="";
function preload(){
    
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(380,480)
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object detecting";
}
function draw(){
    image(video, 0,0,480,380);
}

function modelLoaded(){
console.log("Model is loaded");
status=true;

}