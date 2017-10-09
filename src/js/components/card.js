import stretchAndCenter from '../utils/stretch-and-center';

$(document).ready(function() {
	if ($('.ipb-card').length > 0) {
		let stretchAndCenterContact = () => stretchAndCenter($('.ipe-card-image-wrapper'), '.ipe-card-image');
		stretchAndCenterContact();
		window.addEventListener('resize', stretchAndCenterContact);
	}
});