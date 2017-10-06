import stretchAndCenter from '../utils/stretch-and-center';

$(document).ready(function() {
	if ($('.ipb-presentation').length > 0) {
		stretchAndCenter($('.ipb-presentation'), 'img.ipe-presentation-bg');
		window.addEventListener('resize', () => stretchAndCenter($('.ipb-presentation'), 'img.ipe-presentation-bg'));
	}
});