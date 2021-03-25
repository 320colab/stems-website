// Empty JS for your own code to be here
$('.navbar-nav>li>a, .navbar-nav+button.nav-back').on('click', function(){
    $('.sidebar-overlay').css('left','250vh');
    $('.sidebar-overlay').collapse('hide');
});

$('button.sidebar-toggler').on('click', function(){
    $('.sidebar-overlay').css('left','0');
});