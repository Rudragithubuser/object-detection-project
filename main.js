img = "";
status = "";


function setup (){
    canvas = createCanvas(640, 430);
    canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";

}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);

}
function  gotResult(error, results) {
    if (error) {
        console.log(error);

    }
    console.log(results);

}

function preload(){
    img = loadImage("fruits.jpg");

}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#cc21aa");
    text("apple",45, 75);
    noFill();
    stroke("#cc21aa");
    rect(125, 60, 350, 150 );

    fill("#cc21aa");
    text("Banana", 320, 120);
    noFill();
    stroke("#cc21aa");
    rect(100, 150, 270, 200 );

}
