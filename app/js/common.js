$(function() {

	var seeMore = document.getElementById('main-see');
	var card = document.querySelector(".batu__card");
	seeMore.onclick = function(){
		card.classList.toggle("display-card");
		
	}
	var seeTwo = document.getElementById('sec-see');
	var cardTwo = document.querySelector(".bromo__card");
	seeTwo.onclick = function(){
		cardTwo.classList.toggle("display-card");
		
	}

	var seeThree = document.getElementById('three-see');
	var cardThree = document.querySelector(".palma__card");
	seeThree.onclick = function(){
		cardThree.classList.toggle("display-card");
		
	}


    $(".pagination").pagination({
        items: 10,
        itemsOnPage: 3,
        cssStyle: 'light-theme'
    });

	$(".nav-mobile").on("click", function(){
		$(this).toggleClass("active");
		$("ul.menu").toggleClass("showed");

	});
	$(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 992) {
       $(".menu").removeClass("showed");
	   $(".nav-mobile").removeClass("active");
    }
  });
});
