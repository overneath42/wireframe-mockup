var $themeSelect = jQuery('#themeSelect');

function switchTheme(tile) {
	"use strict";
	var tileOpt;
	tileOpt = parseInt(tile.substr(4), 10);
	tileOpt = "opt-" + tileOpt;
	jQuery('body').removeClass().addClass(tileOpt);
}

jQuery(document).ready(function($) {
	"use strict";

	$themeSelect.on("change", function () {
		var opt = $(this).find('option:selected').text();
		$('#tileClass').remove();
		$('head').append('<link rel=\"stylesheet\" id=\"tileClass\" href=\"css/tiles/tile' + opt + '.css\">');
		switchTheme(opt);
	});

});