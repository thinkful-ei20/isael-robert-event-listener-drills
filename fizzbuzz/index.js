'use strict';

function fizzLooper(number) {
  for (let i = 1; i <= number; i++){
    if (i % 3 === 0 && i % 5 === 0) { 
      $('.js-results').append(
        `<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>`
      );
    } else if (i % 5 === 0) {
      $('.js-results').append(
        `<div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>`
      );
    } else if (i % 3 === 0) {
      $('.js-results').append(
        `<div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>`
      );
    } else {
      $('.js-results').append(
        `<div class="fizz-buzz-item">
        <span>${i}</span>
      </div>`
      );
    }
  }
}

function fizzBuzz() {
  $('#number-chooser').submit(e => {
    e.preventDefault();
    let times = ($('#number-choice').val());
    fizzLooper(times);
  });
}

$(fizzBuzz);