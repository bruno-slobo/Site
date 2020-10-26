//Transições
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

// Parallax

$(document).ready(function() {
    setTimeout(function() {
    
        $('#apply-area').parallax({imageSrc: 'imgs/pattern.png'});
    
    }, 250);
});
