noseX = 0;
noseY = 0;
difference = 0;
LeftWristx = 0;
RightWristx = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');

    document.getElementById("label").innerHTML = "Square's Width and Height = " + difference + "px";
    fill("#2faff3");
    stroke("#000000");
    square(noseX , noseY , difference);
}

function modelLoaded() {
    console.log('PoseNet is Initialized.')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX + " noseY = " + noseY);

    LeftWristx = results[0].pose.leftWrist.x;
    RightWristx = results[0].pose.rightWrist.x;
    difference = floor(LeftWristx - RightWristx);
    console.log("LeftWristx = " + LeftWristx + " RightWristx = " + RightWristx + " difference = " + difference);

    }
}