$(function() {
  'use strict';
  if ($(".tinymce").length) {
    tinymce.init({
      selector: '.tinymce',
      height: 250,
      default_text_color: 'red',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
      ],
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor emoticons',
      image_advtab: true,
      templates: [],
      content_css: [],
      entity_encoding: 'raw'
    });
  }
  
});