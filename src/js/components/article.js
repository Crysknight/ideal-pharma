import stretchAndCenter from '../utils/stretch-and-center';

$(document).ready(function() {
	if ($('.ipe-media-image').length > 0) {
		let stretchAndCenterContact = () => stretchAndCenter($('.ipe-media-image-wrapper'), '.ipe-media-image');
		stretchAndCenterContact();
		window.addEventListener('resize', stretchAndCenterContact);
	}
});