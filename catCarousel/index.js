'use strict';
function main(){
  $('.thumbnail').on('click', function (){
    const source = $(this).children('img').attr('src');
    const alt = $(this).children('img').attr('alt');
    $('.hero').children('img').attr('src', source).attr('alt', alt);
  });
}
$(main);