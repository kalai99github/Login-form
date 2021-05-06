$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.nav-list').toggleClass('open');
    });
});


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});