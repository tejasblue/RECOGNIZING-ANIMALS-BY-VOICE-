function startClassification()
{navigator.mediaDevices.getUserMedia({audio:true});
 classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZSzT9xKBM/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;



document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img1=document.getElementById('fatdog-dog.gif')
img2=document.getElementById('giphy.gif')
img3=document.getElementById('proud-oops.gif')

if (results[0].label=="Barking"){
    img1.src='fatdog-dog.gif';
} else if (results[0].label=="Meowing"){
    img2.src='giphy.gif';
} else {
    img3.src='proud-oops.gif';
}}}