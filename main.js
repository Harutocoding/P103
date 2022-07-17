

Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});

camer = document.getElementById("camera");

Webcam.attach( "#camera" );


function take_snapshot()
{

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
function modelLoaded(){
    console.log("model is Loaded");
}
console.log("ml5 version:", ml5.version);

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JumyLEQVY/model.json',modelLoaded);

function check ()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTMl = results[0].confidence.tofixed(3);
    }
}