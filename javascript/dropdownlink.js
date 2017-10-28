$(document).ready(function() {
$('.navbar-nav > li').click(function(event) {
    event.preventDefault();
    var target = $(this).find('>a').prop('hash');
    $('html, body').animate({
        scrollTop: $(target).offset().top // this line here
    }, 500);
});
})