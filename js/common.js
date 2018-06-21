$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    margin:10,
    nav:true,
	})
	console.log('start');
	$(".navigation__burger").click(function() {
		if($(".navigation__burger").hasClass("navigation__burger-active"))
		{
			$(".navigation__burger").removeClass("navigation__burger-active");
			$(".navigation__list").removeClass("navigation__list-active");
		}
		else{
			$(".navigation__burger").addClass("navigation__burger-active");
			$(".navigation__list").addClass("navigation__list-active");
		}

	});
});