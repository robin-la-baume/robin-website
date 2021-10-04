$(document).ready(function () {
	// jQuery code goes here

		$('#foto-wrapper').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					// return item.el.attr('title') + '<small>Foto: Marsel Van Oosten</small>';
					return item.el.attr('title');
					// return `<small>Foto: test</small>`;
				}
			},
			callbacks: {
				lazyLoad: function (item) {
					console.log(item); // Magnific Popup data object that should be loaded
				}
			}
		});
});

