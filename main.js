function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet Is Intiliazied!');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
}
}

function draw()
{
    background('#d3d3d3');
}