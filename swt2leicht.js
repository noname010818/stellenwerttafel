var randomNumberH = 0;
var randomNumberZ = 0;
var randomNumberE = 0;
var solutionIsCorrect;
var resNumber = 0;
var solutionIsCorrect;

//#endregion

window.onload = function() {
    
    document.getElementById('exercise').innerHTML = "Tom hat die Stellenwerttafel ausgefüllt: <button class=\"btn\" style=\"background-color:#41b5b5\" onClick=\"playSound()\"><i class=\"bi bi-mic-fill\"></i></button>";


    randomNumberH =  Math.floor(Math.random() * 9);
    document.getElementById('hunderter').innerHTML = randomNumberH;

    randomNumberZ =  Math.floor(Math.random() * 9);
    document.getElementById('zehner').innerHTML = randomNumberZ;

    randomNumberE =  Math.floor(Math.random() * 9);
    document.getElementById('einer').innerHTML = randomNumberE;

    document.getElementById('feedback').innerHTML = "Welche Zahl ist dargestellt?  <input type=\"text\" name=\"result\" id=\"result\"> ";
}



function refreshBtnClicked() {
    window.location.reload();
}

function submitBtnClicked() {
    var solutionText = "";
    var solutionText1 = "";
    var solutionText2 ="";
    var solutionText3 ="";

    document.getElementById("myModal").style.display = "block";

    resNumber = randomNumberH * 100 + randomNumberZ * 10 + randomNumberE * 1;

    var result = parseInt(document.getElementById("result").value); //Input wird als integer wert zurückgegeben
    //////////////////////////////////////////7
    console.log(typeof result);
    function digit(numberIn, stelle){
        return Math.floor(numberIn%Math.pow(10, stelle+1)/Math.pow(10, stelle))
    }
    
    var checkEiner = digit(result, 0);
    var checkZehner = digit(result, 1);
    var checkHunderter = digit(result, 2);
    console.log("E"+checkEiner);
    console.log("Z"+checkZehner);
    console.log("H"+checkHunderter)


    /////////////////////////////////////////////

    if(resNumber === result) {
        solutionText = "Das ist richtig :)";
        document.getElementById("closeBtn").innerHTML = "Nächste Aufgabe!";

        solutionIsCorrect = true;
        document.getElementById("solution").innerHTML = solutionText;

    } else {
        if(randomNumberH !== checkHunderter ){
            solutionText1 = "<p>Hunderterzahl</p>";
        
        }
        if(randomNumberZ !== checkZehner){
            solutionText2 = "<p>Zehnerrzahl</p> ";

        }
        if(randomNumberE !== checkEiner){
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
