$( document ).ready(function() {
    $(".fa-angle-down").click(function() {
        $('body').animate({ scrollTop:$(this).parent().next().offset().top}, 'slow');
    });
    $(".fa-angle-up").click(function() {
        $('body').animate({ scrollTop:$(this).parent().prev().offset().top}, 'slow');
    });

    // Headroom/Sticky
    // grab an element
    var myHeadroom = document.querySelector("header");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myHeadroom, {
        classes : {
        // when element is initialised
        initial : "u-headroom",
        // when scrolling up
        pinned : "u-headroom--pinned",
        // when scrolling down
        unpinned : "u-headroom--unpinned",
        // when above offset
        top : "u-headroom--top",
        // when below offset
        notTop : "u-headroom--not-top",
        // when at bottom of scoll area
        bottom : "u-headroom--bottom",
        // when not at bottom of scroll area
        notBottom : "u-headroom--not-bottom"
    },
    });
    // initialise
    headroom.init();

});

