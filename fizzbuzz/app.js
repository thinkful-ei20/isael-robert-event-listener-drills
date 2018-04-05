'use strict';

function fizzBuzz() {
  $('button').submit(e => {
    e.preventDefault();
    console.log($('#number-choice').text());
  });
}

$(fizzBuzz);