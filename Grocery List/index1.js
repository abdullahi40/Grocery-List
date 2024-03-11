const groceries = document.querySelectorAll('.groceries')[0];
const pencil = document.querySelector('#pencil');
const allitems = document.querySelector('#allitems');
const userInput = document.querySelector('#userInput');

pencil.addEventListener('click', () => {
  allitems.innerHTML = '';
});

userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
});

function addItem() {
  var h2 = document.createElement('h2');
  h2.innerHTML = '- ' + userInput.value;

  h2.addEventListener('click', () => {
    h2.style.textDecoration = 'line-through';
  });

  allitems.insertAdjacentElement('beforeend', h2);

  userInput.value = ' ';
}
