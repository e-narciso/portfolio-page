// scroll functions
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    $('.navbar')[$(window).scrollTop() >= 100 ? 'addClass' : 'removeClass']('navbar-hide');

});

$(window).scroll(function(){
    $(".quote").css("opacity", 1 - $(window).scrollTop() / 600);
  });

  $(window).scroll(function(){
    $(".self-description").css("opacity", 1 - $(window).scrollTop() / 500);
  });



  $('body').not('a.btn.modal-btn').click(function(){
    console.log('helllooo')
    $('#exampleModalCenter').modal('hide');
  })
