$(document).ready(function () {
    
    // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
    $(".scroll").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top-40
          }, 800, function(){
            window.location.hash = hash;
          });
        }
    });
   
    $('.my_btn').click(function () {
       if($('#exampleInputEmail1').text() == '' || $('#exampleTextarea').text() == '') {
           $('#my_msg').html('Jeżeli chcesz sie z nami skontaktować - proszę, uzupełnij poniższe pola');
           $('#my_msg').css('background', 'rgba(250,76,5, 0.7)');
           $('#my_msg').css('padding', '6px');
           $('#my_msg').css('margin', '10px');
           $('#my_msg').css('color', '#ededed');
       } 
    });
    
});