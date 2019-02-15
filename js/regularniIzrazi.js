window.onload = function() {
    
    document.querySelector("#potvrdi").addEventListener("click",potvrda);
    document.querySelector("#btnMail").addEventListener("click",posaljiMail)
}



function potvrda() {
    
    greske = new Array();
    
    var ime = document.querySelector("#ime");
    var prezime = document.querySelector("#prezime");
    var email = document.querySelector("#email");
    var email_potvrda = document.querySelector("#email_potvrda");
    var lozinka = document.querySelector("#lozinka");
    var lozinka_potvrda = document.querySelector("#lozinka_potvrda");
    var tel = document.querySelector("#tel");
    var pol = document.getElementsByName("pol");
    
    

    imeProvera = /^([A-ZČĆŠĐŽ][a-zčćšđž]{2,9}(\s)*){1,2}$/;
    
    if(!imeProvera.test(ime.value.trim())){
    
        greske.push("Ime nije u dobrom formatu");
    }

    
    prezimeProvera = /^([A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s)*){1,2}$/;
    
    if(!prezimeProvera.test(prezime.value.trim())){
        
        greske.push("Prezime nije u dobrom formatu");
    }
    
    
    emailProvera = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!emailProvera.test(email.value)){
        
        greske.push("Email adresa nije u dobrom formatu");
    }

    if(email.value != email_potvrda.value){
        
        greske.push("Nije isti email");
    }
    
    
    lozinkaProvera = /^[a-zA-Z]\w{3,14}$/;
    
    if(!lozinkaProvera.test(lozinka.value)){
        
        greske.push("Lozinka nije u dobrom formatu");

    }
        
    if(lozinka.value != lozinka_potvrda.value){
        
        greske.push("Nisu iste lozinke");
        
    }
    
    telProvera = /^\+3816[01234569][0-9]{6,7}$/;
    
    if(!telProvera.test(tel.value)){
        
        greske.push("Telefon nije u dobrom formatu");
    }
    
    
    var izabranoPolje = "";
    
    for(var i in pol){
        
        if(pol[i].checked){
            izabranoPolje += pol[i].value;
            break;
        }
    }
    
    if(izabranoPolje == ""){
        
        alert("Odaberite pol");
    }
    
    
    
    if(greske.length != 0){
         var prikaz = "<ul>";
        
        for(var i in greske){
            
            
            prikaz += "<li>"+greske[i]+"</li>";
        }
        prikaz += "</ul>";
        
        document.querySelector("#prikaz").style.display = "block";
        document.querySelector("#prikaz").innerHTML = prikaz;
    }
    
    else {
        
        alert("Uspesna registracija!");
    }
    
    
}

function posaljiMail() {
    
    var mail = document.querySelector("#mail");
    
    mailProvera = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!mailProvera.test(mail.value)){
        
        document.querySelector("#mail_greska").textContent = "Email adresa nije u dobrom formatu";
    }
}



























