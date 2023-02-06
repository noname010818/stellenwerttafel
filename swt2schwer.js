var randomNumberH = 0;
var randomNumberZ = 0;
var randomNumberE = 0;
var randomNum = 0;
var solutionIsCorrect;
var resNumber = 0;
var solutionIsCorrect;

//#endregion

window.onload = function() {
    
    document.getElementById('exercise').innerHTML = "Merve hat die Stellenwerttafel ausgefüllt: <button class=\"btn\" style=\"background-color:#41b5b5\" onClick=\"playSound()\"><i class=\"bi bi-mic-fill\"></i></button>";

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
        
    }
    randomNum = randomNumber(1,3);

    if(randomNum == 1){
        randomNumberH =  Math.floor(Math.random() * 0);
        document.getElementById('hunderter').innerHTML = randomNumberH;
    
        randomNumberZ =  Math.floor(Math.random() * 9 * 10 ) + Math.floor(Math.random() * 9);
        document.getElementById('zehner').innerHTML = randomNumberZ;
    
        randomNumberE =  Math.floor(Math.random() * 9);
        document.getElementById('einer').innerHTML = randomNumberE;

    }
    else {
        randomNumberH =  Math.floor(Math.random() * 9);
        document.getElementById('hunderter').innerHTML = randomNumberH;
    
        randomNumberZ =  Math.floor(Math.random() * 9);
        document.getElementById('zehner').innerHTML = randomNumberZ;
    
        randomNumberE =  Math.floor(Math.random() * 9 * 10) + Math.floor(Math.random() * 9);
        document.getElementById('einer').innerHTML = randomNumberE;
    }

    document.getElementById('feedback').innerHTML = "Notiere die Zahl: <input type=\"text\" name=\"result\" id=\"result\"> ";
}


function refreshBtnClicked() {
    window.location.reload();
}

function submitBtnClicked() {
    var solutionText = "";
    var solutionText1 = "";
    var solutionText2 = "";
    var solutionText3 = "";



    document.getElementById("myModal").style.display = "block";

    resNumber = randomNumberH * 100 + randomNumberZ * 10 + randomNumberE * 1;

    var result = parseInt(document.getElementById("result").value); //Input wird als integer wert zurückgegeben
    console.log(result);

    function inputHunderter(){
        var inputH = result / 100;
        var inputIntH = Math.trunc(inputH);
        return inputIntH;
    }
    var checkHunderter = inputHunderter();

    function inputZehner(){
        var inputZ = (result % 100) / 10;
        var inputIntZ = Math.trunc(inputZ);

        return inputIntZ;
    }
    var checkZehner = inputZehner();

    function inputEiner(){
        var inputE = (result % 100) % 10;

        return inputE;
    }
    var checkEiner = inputEiner();

    if(resNumber === result) {
        if(checkHunderter == 0 || checkHunderter == 0 && checkZehner == 0){
            solutionText = "Deine Antwort ist nicht richtig. Eine Null darf in der Stellenwerttafel geschrieben werden, aber aber nicht als erste Ziffer.";
            solutionIsCorrect = false;
            document.getElementById("closeBtn").innerHTML = "Nochmal probieren";

        }
        else{
            solutionText = "<p style=\"font-size: 2rem;\"><strong>Das ist richtig :)</strong></p>";
            document.getElementById("closeBtn").innerHTML = "Nächste Aufgabe!";
    
            solutionIsCorrect = true;
        }
        
        document.getElementById("solution").innerHTML = solutionText;

    } else {
        if(checkHunderter != randomNumberH){
            solutionText1 = "<p>Hunderterzahl</p>";
        }

        if(checkZehner != randomNumberZ){
            solutionText2 = "<p>Zehnerrzahl</p> ";
        }
        
        if(checkEiner != randomNumberE){
            solutionText3 = "<p>Einerzahl</p>";
        }
        
        document.getElementById("solution").innerHTML = "<p style=\"font-size: 2rem;\"><strong>Diese Zahlen hast du falsch gemacht:</strong></p> "+ solutionText1 + solutionText2 + solutionText3;
        document.getElementById("closeBtn").innerHTML = "Nochmal probieren";
        solutionIsCorrect = false;
    }
}

function closeModal() {
    console.log(solutionIsCorrect); 
    if(solutionIsCorrect) {
        window.location.reload();
    } else {
        document.getElementById("myModal").style.display = "none";
        
    }
}
function playSound() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Du hast." + randomNumberH + ".Hunderter...." + randomNumberZ +".Zehner....und." + randomNumberE +"Einer...";
    msg.volume = 0.5;
    msg.lang = 'de-at';
    window.speechSynthesis.speak(msg);
}

