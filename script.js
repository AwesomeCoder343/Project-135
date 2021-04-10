video="";
status="";
objects=[];
function preload(){
    
}
function start(){
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object detecting";
    input=document.getElementById("input").value;
    console.log(input);
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(380,480)

}
function draw(){
    image(video, 0,0,480,380);
    objectdetector.detect=gotResult;
    if(status!=""){
        for(i=0;i<objects.length; i++){
            percentage=floor(objects[i].confidence)*100;
            text(objects[i].label + " "+ percentage+"%", objects[i].x, objects[i].y);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        if(input==objects[i].label){
            video.stop();
            document.getElementById("object_detected").innerHTML="Object detected";
            var synth = window.speechSynthesis;
            var utterThis = new SpeechSynthesisUtterance("Object mentioned found");
            }
            else{
                document.getElementById("object_detected").innerHTML="Object not detected";
            }
        }
    }
    


function modelLoaded(){
console.log("Model is loaded");
status=true;

}
function gotResult(results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    objects=results;
}
}