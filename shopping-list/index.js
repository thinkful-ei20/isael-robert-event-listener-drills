'use strict';

function addItem(item) {
  return (`
 <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
`);
}

function createItem() {
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    let item = $(this).find('.js-shopping-list-entry');
    $('.shopping-list').append(addItem(item.val()));
    item.val('');
  });
}

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
  });

}

function checkItem(){
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    
    $(this)
      .closest('li')
      .children('.shopping-item')
      .toggleClass('shopping-item__checked');
  });
}

function main() {
  createItem();
  deleteItem();
  checkItem();
}

$(main);