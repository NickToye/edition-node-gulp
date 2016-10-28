$( document ).ready(function() {
    $(".fa-angle-down").click(function() {
        $('body').animate({ scrollTop:$(this).parent().next().offset().top}, 'slow');
    });
    $(".fa-angle-up").click(function() {
        $('body').animate({ scrollTop:$(this).parent().prev().offset().top}, 'slow');
    });

});

