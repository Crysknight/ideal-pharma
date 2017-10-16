import stretchAndCenter from '../utils/stretch-and-center';

if ($('video.ipe-main-page-video').length > 0) {

	let preloadVideo = video => {
		video.animate({
			opacity: 1
		}, 2000);
	};

	$(document).ready(function() {

		let video = $('video.ipe-main-page-video');
		video.on('loadedmetadata', function() {
			stretchAndCenter($('.ipb-main-page'), 'video.ipe-main-page-video', true);
			preloadVideo(video);
			video.get(0).play();
		});

		if ($('html.desktop').length > 0) {
			video.get(0).load();
		}

	});

}