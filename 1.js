

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    rtl:true,
    nav:true,
    loop:true,
    margin:10,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

    owl.trigger('play.owl.autoplay',[3000])
