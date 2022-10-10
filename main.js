function preload(){
doodle=ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas=createCanvas(250,250);
    canvas.center();
    background("white");
    canvas.mouseReleased(identify_drawing);
}


function draw(){
strokeWeight(8);
stroke("red");

if (mouseIsPressed){
    line(pmouseX,pmouseY, mouseX, mouseY);
}
}

function identify_drawing(){
    doodle.classify(canvas,getresults);
}

function clear_canvas(){
    background("white");
}
 function getresults( error,result){
    if(error){
        console.log(error);
    }
   confidence=result[0].confidence;
   answer=result[0].label;
   document.getElementById("confidence").innerHTML=confidence;
   document.getElementById("answer").innerHTML=answer;
   
 }