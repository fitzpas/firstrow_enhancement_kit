(function ($) {
	// Add some classes to make things easier.
	$('table, div').each(function(index) {
		$(this).addClass('el' + index);
  });
	// Add a new wrapper element.
	$('body').add('div').addClass('ext-wrap');
	// Clone the actual video element to save arsing around. ! WON'T FUCKING WORK, XSS !
	// $('#player').contents().find('body').clone().html().appendTo('.ext-wrap');
	// Remove some elements.
	$('.table0, .el7 td:last-child, div#fb-root').remove();
})(jQuery);