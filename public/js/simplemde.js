$(function() {
  'use strict';
  if ($(".tinymce_simple").length) {
    var simplemde = new SimpleMDE({
      element: $(".tinymce_simple")[0]
    });
  }

});