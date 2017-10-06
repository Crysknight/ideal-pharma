$(document).ready(function() {
	$(document).click(function() {
		if ($('.navbar-collapse.show').length > 0) {
			$('.navbar-toggler').click();
		}
	});
});