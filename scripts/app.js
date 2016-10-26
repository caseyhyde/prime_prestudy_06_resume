$(document).ready(function() {
  $('#wrapper').hide();
  $('button').on('click', function () {
    $('#wrapper').fadeIn();
    $('button').remove();
  });
});
