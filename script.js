const display = document.querySelector("#result");


function displayResult(){
    //caso haja erro
    //display.innerHTML ="Username/Password errado";

    //caso não haja
    window.location.replace("/welcome.html");
}


function displayQuery(){
    window.location.replace("/");
}