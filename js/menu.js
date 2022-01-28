$(document).ready(function(){
    $('#menuToggle').click(function(){
        $('#mainNav').stop(true, true).slideToggle(15000);
    });
});