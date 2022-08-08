$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:39,
        dots:false,
        nav:true,
        navText: [ '<img src="img/left.png">', '<img src="img/right.png">' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});