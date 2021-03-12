// Empty JS for your own code to be here
$('.navbar-nav>li>a').on('click', function(){
    $('.sidebar-overlay').css('left','200vh');
    $('.sidebar-overlay').collapse('hide');
});

$('button.sidebar-toggler').on('click', function(){
    $('.sidebar-overlay').css('left','0');
});