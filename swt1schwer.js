var solutionIsCorrect;
var numTicketsH = 0; 
var numTicketsZ = 0;
var numTicketsE = 0;
var resNumber = 0;
var checkTicketE = 0; 
var checkTicketZ = 0;
var checkTicketH = 0;
var randomNum= 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    
}
randomNum = randomNumber(1,3);


function hunderterTickets(){
    let ww = $(".hunderterFeld").width() -20;
    let wh = $(".hunderterFeld").height() -20;
    
    
    let ticket="<div class='hunderterTicket'></div>";    
    numTicketsH = Math.floor(Math.random() * 10); 

    console.log(numTicketsH)
    
    for(let x=1;x<=numTicketsH;x++){        
        $(ticket).appendTo(".hunderterFeld");    
    }     
        
    $(".hunderterTicket").each(function(i){           
        let posx = Math.round(Math.random() * ww)-40;        
        let posy = Math.round(Math.random() * wh)-40;        
        $(this).css("top", posy + "px").css("left", posx + "px");    
    });
}
hunderterTickets();

function zehnerTickets(){
    let ww = $(".zehnerFeld").width() -20;
    let wh = $(".zehnerFeld").height() -20;
    
    
    let ticket="<div class='zehnerTicket'></div>";  
    if(randomNum == 1){
        numTicketsZ = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 20);
    }  
    else{
        numTicketsZ= Math.floor(Math.random() * 10); 
    }  
    console.log(numTicketsZ)
    
    for(let x=1;x<=numTicketsZ;x++){        
        $(ticket).appendTo(".zehnerFeld");    
    }     
        
    $(".zehnerTicket").each(function(i){           
        let posx = Math.round(Math.random() * ww)-40;        
        let posy = Math.round(Math.random() * wh)-40;        
        $(this).css("top", posy + "px").css("left", posx + "px");    
    });
}
zehnerTickets();


function einerTickets(){
    let ww = $(".einerFeld").width() -20;
    let wh = $(".einerFeld").height() -20;
    
    
    let ticket="<div class='einerTicket'></div>";   
    if(randomNum == 2){
        numTicketsE = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 20);
    }  
    else{
        numTicketsE= Math.floor(Math.random() * 10); 
    }   
     
    console.log(numTicketsE)
    
    for(let x=1;x<=numTicketsE;x++){        
        $(ticket).appendTo(".einerFeld");    
    }     
        
    $(".einerTicket").each(function(i){           
        let posx = Math.round(Math.random() * ww)-40;        
        let posy = Math.round(Math.random() * wh)-40;        
        $(this).css("top", posy + "px").css("left", posx + "px");    
    });
}
einerTickets();

function refreshBtnClicked() {
    window.location.reload();
}

window.onload = function() {
    console.log(randomNum);
    //document.getElementById('exercise').innerHTML = "Trage die Zahl in die Stellenwerttafel ein. <button class=\"btn btn-info\" onClick=\"playSound()\"><i class=\"bi bi-volume-up\"></i></button>" ;
    document.getElementById('exercise').innerHTML = "Trage die Zahl in die Stellenwerttafel ein. <button class=\"btn\" style=\"background-color:#41b5b5\" onClick=\"playSound()\"><i class=\"bi bi-mic-fill\"></i></button>";

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

    resNumber = numTicketsH * 100 + numTicketsZ * 10 + numTicketsE;

    checkTicketE = parseInt(document.getElementById("inputEiner").value); //Input wird als integer wert zurückgegeben
    console.log(inputEiner);

    checkTicketZ = parseInt(document.getElementById("inputZehner").value);
    console.log(inputZehner);

    checkTicketH = parseInt(document.getElementById("inputHunderter").value);
    console.log(inputHunderter);

    var result = checkTicketH * 100 + checkTicketZ * 10 + checkTicketE;
   
    if(resNumber === result) {

        if(checkTicketE > 9 || checkTicketZ > 9 || checkTicketH > 9){
            solutionText = "<p style=\"font-size: 2rem;\"><strong>Deine Antwort ist zwar richtig, aber es ist noch nicht vollständig gebündelt</strong></p>";
            document.getElementById("closeBtn").innerHTML = "Nochmal probieren";
            solutionIsCorrect = false;
        }
        else{
            solutionText = "<p style=\"font-size: 2rem;\"><strong>Das ist richtig :)</strong></p>";
            document.getElementById("closeBtn").innerHTML = "Nächste Aufgabe!";

            solutionIsCorrect = true;
        }
        
        document.getElementById("solution").innerHTML = solutionText;


    } else {
        if(numTicketsH != checkTicketH){
            solutionText1 = "<p>Hunderterzahl</p>";
        }

        if(numTicketsZ != checkTicketZ){
            solutionText2 = "<p>Zehnerrzahl</p> ";
        }
        
        if(numTicketsE != checkTicketE){
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
    msg.text = "Du hast." + numTicketsH + ".Hunderter...." + numTicketsZ +".Zehner....und." + numTicketsE +"Einer..."  ;
    msg.volume = 0.5;
    msg.lang = 'de-at';
    window.speechSynthesis.speak(msg);
}

