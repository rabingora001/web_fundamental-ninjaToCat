$(document).ready(function(){

    $('img').click(function() {
        let temp= $(this).attr('src');
        $(this).attr('src',$(this).attr('alt-src'));
        $(this).attr('alt-src', temp);
      });
      $('.restore').click(function(){
          ('.swap').show();
      });
});