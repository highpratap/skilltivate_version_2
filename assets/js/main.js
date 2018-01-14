/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
 // for the contents in the area
$(document).ready(function(){

  // hide our element on page load
  $('.content').css('opacity', 0);

  $('.content').waypoint(function() {
      $('.content').addClass('fadeInUp');
  }, { offset: '50%' });

});

 // for the heading

$(document).ready(function(){

  // hide our element on page load
  $('.px-heading').css('opacity', 0);

  $('.px-heading').waypoint(function() {
      $('.px-heading').addClass('rotateInDownLeft');
  }, { offset: '50%' });

});

// for the button
$(document).ready(function(){

  // hide our element on page load
  $('.px-btn').css('opacity', 0);

  $('.px-btn').waypoint(function() {
      $('.px-btn').addClass('rotateInUpRight');
  }, { offset: '50%' });

});

// for the text about skilltivate
$(document).ready(function(){

  // hide our element on page load
  $('.about').css('opacity', 0);

  $('.about').waypoint(function() {
      $('.about').addClass('fadeInLeft');
  }, { offset: '50%' });

});

// for the images int the about skilltivate section
$(document).ready(function(){

  // hide our eleabout on page load
  $('.sc-img').css('opacity', 0);

  $('.sc-img').waypoint(function() {
      $('.sc-img').addClass('fadeInRight');
  }, { offset: '50%' });

});

// secnd paragraph heading
$(document).ready(function(){

  // hide our eleabout on page load
  $('.pxx-heading').css('opacity', 0);

  $('.pxx-heading').waypoint(function() {
      $('.pxx-heading').addClass('fadeInUp');
  }, { offset: '50%' });

});
(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
