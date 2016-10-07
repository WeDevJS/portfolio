


$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();        
});
$('.head-link').click(function(e) {
      e.preventDefault();
      
      var goto = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(goto).offset().top
      }, 800);
});

// Submit para cerrar session
function logout(){
      document.logout.submit();
}