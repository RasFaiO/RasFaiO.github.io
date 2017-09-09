$(document).ready(function(){

	$('#abajo').click(function(){
		$('body, html').animate({
			scrollTop: '675px'
		},500);
	});

    $('.arriba').hide();

	$('.arriba').click(function(){//Decimos que vamos a entrar a la class hacia-arriba para que ejecute una funcion//
        $('body, html').animate({//Decimos que la funcion se ara en el body(cuerpo de la pagina)//
            scrollTop: '675px'//Decimos que la funcion que ara sera ir hacia arriba de la pagina//
        },500);//Especificamos la velocidad que dara al ir hacia arriba//
    });

	$(window).scroll(function(){//Estableceremos una funcion al scroll(la barra que nos permite navegar en la pagina de arriba abajo)//
        if( $(this).scrollTop() > 850 ){//La funcion que dara al estar hasta arriba//
            $('.arriba').slideDown(500);//Damos un tiempo para que el botón desaparezca //
        } else {
            $('.arriba').slideUp(500);//Damos un tiempo para que el botón aparezca //
        } 
    }); 

});