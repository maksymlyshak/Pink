$(document).ready(function(){
    $('.main-header__burger').click(function(event) {
        $('.main-header__burger,.main-header__nav').toggleClass('active');
        $('body').toggleClass('lock')
    }); 
});