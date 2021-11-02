$(function(){
	$('.navigation__hamburger-trigger').on('click', function(){
		$('.navigation__hamburger-list').toggle(1000);
	});

	$('[name=tel]').bind("change keyup input click", function() {
if (this.value.match(/[^0-9]/g)) {
this.value = this.value.replace(/[^0-9]/g, '');
}
});
});
$(function(){
	$(".owl-carousel").owlCarousel({
		nav: true,
		dots: true,
		loop: true,
		margin: 10,
		navText: [
		'<img src="img/arrow.png">',
		'<img src="img/arrow.png">'],
		responsive: {
			320: {
				items: 1,
				nav: false,
				dots: true
			},
			700: {
				items: 2
			},
			1400: {
				items: 3
			}
		}
	});
});
$(function(){
	$('.phone-picture, .navigation__btn-call, .profession__btn-2, .whatdoing__btn, .examples__btn-3, .footer__column-right-btn-4')
	.click(function(){
		$('#callbacks-container').fadeIn(400);
	});
	$('#callbacks-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	});
});












