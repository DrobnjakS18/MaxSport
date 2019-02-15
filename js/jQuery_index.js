$(document).ready(function(){
    
     document.querySelector("#btnMail").addEventListener("click",posaljiMail)
    
    $(".rslides").responsiveSlides();
    $("#sportovi").picturehover()

    $("#brendovi .sport_brend img").hover(function(){
        
        $(this).css("opacity","1");
    },function(){
        $(this).css("opacity","0.5");
    });
    
    $(".sport_brend_drugi img").hover(function(){
        
        $(this).css("opacity","1");
    },function(){
        $(this).css("opacity","0.5");
    });
    
    $('#popust h1').hover(function(){

       $(this).animate(
           { fontSize: '+=20px'}, 2000);

   }, function(){

       $(this).animate(
           { fontSize: '-=20px'}, 2000);

   });
    
       $(window).scroll(function(){
   
		var skrolovano = $(this).scrollTop();

		if(skrolovano > 300){
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}

	});
   $('#scrollToTop').click(function(){
        
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });

   
});

function posaljiMail() {
    
    var mail = document.querySelector("#mail");
    
    mailProvera = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!mailProvera.test(mail.value)){
        
        document.querySelector("#mail_greska").textContent = "Email adresa nije u dobrom formatu";
    }
}

