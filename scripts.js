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
let index = -1;

const addBookBtn = document.getElementById('addBtn');
const cardContainer = document.getElementById('card-container');
let getAllCards = [];

let myEvent;
function addCard() {
  const book = myLibrary[myLibrary.length - 1];
  let card = document.createElement('div');
  card.classList.add('card');
  card.dataset.cardId = ++index;

  console.log(card.dataset);

  let title = document.createElement('p');
  title.innerHTML = book.title;
  card.appendChild(title);

  let author = document.createElement('p');
  author.innerHTML = book.author;
  card.appendChild(author);

  let pages = document.createElement('p');
  pages.innerHTML = book.pages;
  card.appendChild(pages);

  let isRead = document.createElement('button');
  if (inputRead.checked === false) {
    myLibrary[myLibrary.length - 1].read = 'not read';
  } else {
    myLibrary[myLibrary.length - 1].read = 'read';
  }

  isRead.innerHTML = myLibrary[myLibrary.length - 1].read;
  card.appendChild(isRead);

  isRead.addEventListener('click', toggleReadStatus);
  function toggleReadStatus() {
    if (myLibrary[myLibrary.length - 1].read === 'not read') {
      myLibrary[myLibrary.length - 1].read = 'read';
    } else {
      myLibrary[myLibrary.length - 1].read = 'not read';
    }
    isRead.innerHTML = myLibrary[myLibrary.length - 1].read;

    /*let toggleRead = document.createElement('button');
  toggleRead.innerHTML = 'ToggleRead';
  card.appendChild(toggleRead);*/

    /*toggleRead.addEventListener('click', toggleReadStatus);*/

    /* if (isRead.innerHTML === 'not read') {
      isRead.innerHTML = 'read';
    } else {
      isRead.innerHTML = 'not read';
    }*/
  }

  let deletebtn = document.createElement('button');
  deletebtn.innerHTML = 'Delete';
  card.appendChild(deletebtn);

  deletebtn.addEventListener('click', deleteBookFromLibrary);

  function deleteBookFromLibrary() {
    console.log(card.dataset.cardId);
    index = card.dataset.cardId;

    function refreshcardId() {
      // for each card in getAllCards, check if their card id is > the card id that was removed.
      //for all cards that meet this requirement, subtract their card id by 1.

      for (i = 0; i < getAllCards.length; i++) {
        console.log(`here + ${getAllCards[i].dataset.cardId}`);
        if (getAllCards[i].dataset.cardId >= index) {
          getAllCards[i].dataset.cardId = getAllCards[i].dataset.cardId - 1;
        }
      }
    }
    refreshcardId();
    myLibrary.splice(index, 1);

    card.remove();
  }

  /*if(inputRead.value === "") {
			isRead.innerHTML = "no"
		} else {isRead.innerHTML = "yes"}*/

  cardContainer.appendChild(card);
  getAllCards = document.querySelectorAll('.card');
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
