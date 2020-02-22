$(document).ready(function() {
	
	  setTimeout(function() {
		$('.spinner').fadeOut("slow");
			
		  setTimeout(function() {
		  $('#prelaoder').fadeOut("slow"); 
		  
			  setTimeout(function() {
				  $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
			       $('#footer').fadeIn('slow');
				   
			  },100);
		  }, 100);	  
	  }, 100);	
  
});