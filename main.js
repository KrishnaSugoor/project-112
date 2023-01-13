prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(pickurl){
        document.getElementById("result").innerHTML='<img id="captureimage" src="'+pickurl+'"/>';
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O3B16Yl62/model.json",modelloaded);
function modelloaded()
{
    console.log("model is loaded");
}
function check()
{
    img=document.getElementById("captureimage");
    classifier.classify(img,getresult);
}
function getresult(error, result){
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("emotion1").innerHTML=result[0].label;
        document.getElementById("emotion2").innerHTML=result[1].label;
        prediction1=result[0].label;
        prediction2=result[1].label;
        if(result[0].label=="Sooper")
        {
            document.getElementById("emoji1").innerHTML="&#128076;"
        }
        if(result[0].label=="you")
        {
            document.getElementById("emoji1").innerHTML="&#128053;"
        }
        if(result[0].label=="peace")
        {
            document.getElementById("emoji1").innerHTML="&#9996;"
        }
        if(result[1].label=="Sooper")
        {
            document.getElementById("emoji2").innerHTML="&#128522;"
        }
        if(result[1].label=="you")
        {
            document.getElementById("emoji2").innerHTML="&#128053;"
        }
        if(result[1].label=="peace")
        {
            document.getElementById("emoji2").innerHTML="&#9996;"
        }
        
    }
}