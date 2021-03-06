/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('#header').hide();
    var scrollHeight= $('#myCarousel').height();
    var navbarHeight= $('#header').height();
    if(window.innerWidth< 768){
       var scrollHeight=600; 
    }
    $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + " and "+ scrollHeight);
    if(currentScroll > scrollHeight) {
           $('#header').show();  
    } else{
           $('#header').hide();
    }
    
    });
});
$(function(){
	$('.carousel').carousel({
		interval:6000,
		pause:false,
		keyboard:false
	});
});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});