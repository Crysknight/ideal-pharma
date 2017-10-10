const Masonry = require('masonry-layout');

$(document).ready(function() {
	if ($('.ipb-new').length > 0) {
		let msnry = new Masonry('.ipb-news', {
			itemSelector: '.ipb-new',
			columnWidth: '.ipb-new',
			percentPosition: true,
			gutter: 15,
			fitWidth: true
		});
	}
});