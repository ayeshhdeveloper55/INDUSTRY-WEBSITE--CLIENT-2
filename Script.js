
    document.addEventListener('DOMContentLoaded', function() {
        var myCarousel = document.getElementById('imageSlider');
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2500,
            wrap: true,
            pause: false
        });
        
        // Force continuous cycling even if mouse hovers
        myCarousel.addEventListener('mouseenter', function() {
            carousel.cycle();
        });
    });
