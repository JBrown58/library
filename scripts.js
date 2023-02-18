let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // the constructor...
}

const newBook = new Book('gdrg', 'grd', '345', 'not read');
const newBook2 = new Book('Best Guy', 'Amazing story', '524', 'read');

let inputTitle = document.getElementById('input-title');
let inputAuthor = document.getElementById('input-author');
let inputPages = document.getElementById('input-pages');
let inputRead = document.getElementById('input-read');
let inputTrueFalse = inputRead.checked;

const addBookBtn = document.getElementById('addBtn');
const cardContainer = document.getElementById('card-container');
let myEvent;
function addCard() {
  const book = myLibrary[myLibrary.length - 1];
  let card = document.createElement('div');
  card.classList.add('card');

  let title = document.createElement('p');
  title.innerHTML = book.title;
  card.appendChild(title);

  let author = document.createElement('p');
  author.innerHTML = book.author;
  card.appendChild(author);

  let pages = document.createElement('p');
  pages.innerHTML = book.pages;
  card.appendChild(pages);

  let isRead = document.createElement('p');
  if (inputRead.checked === false) {
    inputRead.value = 'not read';
  } else {
    inputRead.value = 'read';
  }
  isRead.innerHTML = inputRead.value;

  card.appendChild(isRead);

  /*if(inputRead.value === "") {
			isRead.innerHTML = "no"
		} else {isRead.innerHTML = "yes"}*/

  cardContainer.appendChild(card);
}

addBookBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(event) {
  myEvent = event;
  event.preventDefault();
  myLibrary.push(
    new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputRead.value
    )
  );
  addCard();

  inputTitle.value = null;
  inputAuthor.value = null;
  inputPages.value = null;
  inputRead.value = null;

  /*myLibrary.push(newBook);
  myLibrary.push(newBook2);
  return myLibrary;*/
  // do stuff here
}

/*let cardTitle = document.getElementById('card-title');
cardTitle.innerHTML = newBook.title;

let cardAuthor = document.getElementById('card-author');
cardAuthor.innerHTML = newBook.author;

let cardPages = document.getElementById('card-pages');
cardPages.innerHTML = newBook.pages;

let cardRead = document.getElementById('card-read');
cardRead.innerHTML = newBook.readStatus;*/

/*addBookToLibrary();
let jsonString = JSON.stringify(myLibrary);

cardTitle.innerHTML = jsonString;

/*let cardItem = document.getElementById('card');
addBookToLibrary();

let jsonString = JSON.stringify(myLibrary);

cardItem.innerHTML = jsonString; */
