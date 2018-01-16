$(document).ready(function() { 
	$('#mobile-menu').on('click', function(event) {
		event.preventDefault();
		$(this).parent().find('nav').toggleClass('mobile-menu-hide');
	});
});