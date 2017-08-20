;(function ($, window, undefined) {
  'use strict';
  $("#featured").orbit();

  $("#paint").click(function(){
    $('#paintings').html('<iframe src="Paintings.html" frameborder="0" scrolling="no" id="myFrame"></iframe>');
  })
})(jQuery, this);
