$(document).ready(function() {

    
    $.ajax({
        url:"json/lopte.json",
        type:"GET",
        success: function(podaci){
         
            console.log(podaci);
            var ispis = "";
            
            for(var i in podaci){
                
        ispis += '<div class="proizvod"><img src="'+podaci[i].src+'" alt="'+podaci[i].alt+'"/><p><b>'+podaci[i].naziv+'</b></p><span class="cena">'+podaci[i].cena+'</span></div>';
            }
            
            $("#mp_proizvodi").html(ispis);
            
        },
        error:function(greska){
            
            console.log(greska);
        }
    });
    
        var brend = new Array("Nike","Adidas","Reebok","New Balance","Converse","Puma","Hummel");
    
        var broj = 0;
        
        var ispis = "";
        for(var i in brend){
            
            broj ++;
            ispis += "<option value='"+broj+"'>"+brend[i]+"</option>";
        }
    
        document.querySelector("#mp_brend").innerHTML += ispis;
        document.querySelector("#btnMail").addEventListener("click",posaljiMail);
    
        $("#btnPretraga").on("click",function(){
            
            var brend = parseInt($("#mp_brend").val());
            console.log(brend);
            
            $.ajax({
                url:"json/lopte.json",
                type:"GET",
                success:function(podaci){
                    
                    var ispis = "";
                    
                    $.each(podaci,function(i,podatak){
                        
                        if(podaci[i].id == brend || brend == 0){
                            
                            ispis += '<div class="proizvod"><img src="'+podaci[i].src+'" alt="'+podaci[i].alt+'"/><p><b>'+podaci[i].naziv+'</b></p><span class="cena">'+podaci[i].cena+'</span></div>';
                        }
                    });
                    $("#mp_proizvodi").html(ispis);
                }
            });
            
        });
    
          $("#sort_cena").click(function(){
            
     
                      var proizvodi = $(".proizvod");
            
                        proizvodi.sort(function(A, B){
                        var cenaA = parseInt($(A).find('.cena').text());
                        var cenaB = parseInt($(B).find('.cena').text());


                        if(cenaA > cenaB) return 1;
                        else if(cenaA < cenaB) return -1;
                        else return 0;
                    });

            $('#mp_proizvodi').html(proizvodi);
                       
        });
    
          $("#sort_naziv").click(function(){
            
            $.ajax({
                 url:"json/lopte.json",
                type:"GET",
                success:function(podaci){
                    
                        podaci.sort(function(A,B){
                        
                        if(A.naziv > B.naziv) return 1;
                        else if(A.naziv < B.naziv) return -1;
                        else return 0;
                        });
                         var ispis = "";

                        for(var i in podaci){

                        ispis += '<div class="proizvod"><img src="'+podaci[i].src+'" alt="'+podaci[i].alt+'"/><p><b>'+podaci[i].naziv+'</b></p><span class="cena">'+podaci[i].cena+'</span></div>';
                            }

                        $("#mp_proizvodi").html(ispis);
                    }
                });          
        });
});

function posaljiMail() {
    
    var mail = document.querySelector("#mail");
    
    mailProvera = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!mailProvera.test(mail.value)){
        
        document.querySelector("#mail_greska").textContent = "Email adresa nije u dobrom formatu";
    }
}




