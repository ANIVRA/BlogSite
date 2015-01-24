// carousel recentposts
var $ =jQuery.noConflict();
$(document).ready(function() {
 
  $("#wowrecentposts").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      paginationSpeed : 700,
	  autoPlay : false,
	  autoHeight : true,
	  lazyLoad : true,
      items : 3
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});