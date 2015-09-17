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

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
    })

    var wall = new freewall(".image-grid");
    wall.reset({
      selector: '.image-grid-item',
      cellW: 100,
      cellH: 'auto',
      onResize: function() {
        wall.fitWidth();
      }
    });

    var images = wall.container.find('.image-grid-item');
    images.find('img').load(function() {
      wall.fitWidth();
    });
    setTimeout(function(){
      wall.fitWidth();
    }, 3000);
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
 
