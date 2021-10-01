$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				// return item.el.attr('title') + '<small>Foto: Marsel Van Oosten</small>';
				return '<small>Foto: Marsel Van Oosten</small>';
			}
		},
		callbacks: {
			lazyLoad: function(item) {
				console.log(item); // Magnific Popup data object that should be loaded
			}
		}
	});

	const galleryTag = document.querySelectorAll('#foto-wrapper');
	const galleryTagHeight = $(galleryTag).height();

	$(galleryTag).scroll(function(){
    let wScroll = $(this).scrollTop();
		if(wScroll < galleryTagHeight - 1) {
			$('footer').css('display', 'none')
		} else {
			$('footer').css('display', 'flex')
		}
    // console.log(wScroll);
  });
});
