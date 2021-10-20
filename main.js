function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/U-aoWVdwR/model.json'
    )
}

function modelReady(){
  classifier.classify( gotResults);
}

