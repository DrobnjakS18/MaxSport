window.onload = function() {
    
    document.querySelector("#btnMail").addEventListener("click",posaljiMail)
}

function posaljiMail() {
    
    var mail = document.querySelector("#mail");
    
    mailProvera = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!mailProvera.test(mail.value)){
        
        document.querySelector("#mail_greska").textContent = "Email adresa nije u dobrom formatu";
    }
}