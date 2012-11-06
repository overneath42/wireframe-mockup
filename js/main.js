var $mainNav = jQuery('.main-nav'),
	$menuHead = jQuery('.menu-head');

function navToStart(wrap, head) {
	var totalHeight,
		menuHead,
		bottomPadding,
		finalStop;

	// get total height of nav menu
	totalHeight = parseInt(wrap.css('height'), 10);

	// get height of "site menu" and bottom padding
	menuHead = parseInt(head.css('height'), 10);
	bottomPadding = parseInt(wrap.css('padding-bottom'), 10);

	//do some math and determine where to move the menu ...
	finalStop = totalHeight - (menuHead + (bottomPadding*2));

	// .. and move it, with some help from CSS transitions
	wrap.css('top', -finalStop);
}

function navReveal(wrap) {
	wrap.css('top', 0);
}

jQuery(document).ready(function($) {

	navToStart($mainNav, $menuHead);
	setTimeout(function () { $mainNav.css('opacity', 1); }, 500);

	$menuHead.on('click', function () {
		navReveal($mainNav);
	});

	$('.main-nav li a').on('click', function (e) {
		e.preventDefault();
		navToStart($mainNav, $menuHead);
	});

});