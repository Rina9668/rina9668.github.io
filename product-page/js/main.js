console.log(5+6)

$(document).ready(function() {
  // Hide confirmation and error texts when loading page.
  $('.confirmation').hide();
  $('.error').hide();

  $('form').submit(function(event) {
    // Hide messages anew each time either button is clicked.
    $('.confirmation').hide();
    $('.error').hide();

    var formData = $(this).serialize();
    $.ajax({ 
         type   	   :'POST',
         url		      :'https://web2-product-page.herokuapp.com/subscribers',
         data   	   :formData,
         dataType   :'json'
    }).done(function(data) {
         // Successful request.
         console.log(data);
         $('.confirmation').fadeIn();

      }).fail(function(data) {
         console.log(data);
         var errorMessage = JSON.parse(data.responseText).email[0];
         $('.error').show();
         $('.error').text(errorMessage);
     });

    event.preventDefault();
    
  });
});

(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
