import stretchAndCenter from '../utils/stretch-and-center';

$(document).ready(function() {
	if ($('.ipb-intlist-item').length > 0) {
		let stretchAndCenterIntlistItem = () => stretchAndCenter($('.ipb-intlist-item'), 'img.ipe-intlist-item-bg');
		stretchAndCenterIntlistItem();
		window.addEventListener('resize', stretchAndCenterIntlistItem);
	}
});