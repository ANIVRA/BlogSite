jQuery(function ($) {

    'use strict';
	
// =============================================
// BEGIN THEME SCRIPTS
// =============================================

// =============================================
// Active Menu Item on Scroll
// =============================================
	var sections = $('section')
	  , nav = $('.navbar')
	  , nav_height = nav.outerHeight();
	 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
	 
		if (cur_pos >= top && cur_pos <= bottom) {
		  nav.find('a').removeClass('active');
		  sections.removeClass('active');
	 
		  $(this).addClass('active');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	  });
	});	
	
// =============================================
// Navigation Scroll
// =============================================	
	jQuery('.nav a, .nav li a').bind('click',function(event){
		var $anchor = jQuery(this);
		
		jQuery('html, body').stop().animate({
		scrollTop: jQuery($anchor.attr('href')).offset().top -59
		}, 1400,'easeOutQuad');
		
		event.preventDefault();
	});
	

// =============================================
// Smooth Scroll
// =============================================	
	
$(".goscroll").click(function (event) {
          event.preventDefault();
          //calculate destination place
          var dest = 0;
          if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
              dest = $(document).height() - $(window).height();
          } else {
              dest = $(this.hash).offset().top;
          }
          //go to destination
          $('html,body').animate({
              scrollTop: dest
          }, 1000, 'easeOutQuad');
      });
	
// =============================================
// Fixed Header Shrink
// =============================================
	jQuery(window).scroll(function () {
	  if (jQuery(document).scrollTop() == 0) {
		jQuery('.navbar-fixed-top').removeClass('tiny');
	  } else {
		jQuery('.navbar-fixed-top').addClass('tiny');
	  }
	});

// =============================================
// To Top Scroll
// =============================================
	$("#back-top").hide();	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1800) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});		
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	

// =============================================
// Animate on Appear
// =============================================
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       10,          // distance to the element when triggering the animation (default is 0)
		mobile:       false       // trigger animations on mobile devices (true is default)
	  }
	);
	wow.init();
	
	
// =============================================
// Video Background
// =============================================
	function iedetect(v) {

	    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
		return r.test(navigator.userAgent);
			
	}
	if(screen.width < 800 || iedetect(8) || iedetect(7) || 'ontouchstart' in window) {
	
		(adjSize = function() {
			
			$width = $(window).width();
			$height = $(window).height();
			
			$('.videowrap').css({
				'background-image' : '', 
				'background-size' : 'cover', 
				'width' : $width+'px', 
				'height' : $height+'px'
			});			
			
			$('video').hide();
			
		})();		
		
		$(window).resize(adjSize);
	}
	else {
		
		$('.videowrap video').on('loadedmetadata', function() {
			
			var $width, $height,
				$vidwidth = this.videoWidth,
				$vidheight = this.videoHeight,
				$aspectRatio = $vidwidth / $vidheight;
						
			(adjSize = function() {
							
				$width = $(window).width();
				$height = $(window).height();
							
				$boxRatio = $width / $height;
							
				$adjRatio = $aspectRatio / $boxRatio;
							
			
				$('.videowrap').css({'width' : $width+'px', 'height' : $height+'px'}); 
							
				if($boxRatio < $aspectRatio) {
					
					$vid = $('.videowrap video').css({'width' : $width*$adjRatio+'px'}); 
				} else {
					
					$vid = $('.videowrap video').css({'width' : $width+'px'});
				}
								 
			})();
						
			$(window).resize(adjSize);
						
		});
	}
	
		
// =============================================
// Toggle
// =============================================	   
	(function () {
	
	$("h3.wow-toggle-trigger").click(function(){		
	$(this).toggleClass("active").next().slideToggle("fast");return false;		
	});
	
	}());
	

	
// =============================================
// END THEME SCRIPTS
// =============================================
	
});