//scroll
$('a[href^=#]').click(function() {
    var herf   = $(this).attr("href");
    var target = $(href);
    var posTop = target.offset().top;
    
    $('body,html').animate({ scrollTop : posTop }, 300, 'swing'};
    return false;
});
