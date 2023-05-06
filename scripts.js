let myLibrary = [];
let getAllCards = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

let inputTitle = document.getElementById('input-title');
let inputAuthor = document.getElementById('input-author');
let inputPages = document.getElementById('input-pages');
let inputRead = document.getElementById('input-read');
let totalBooks = document.getElementById('total-books');
let totalPages = document.getElementById('total-pages');
let totalBooksRead = document.getElementById('total-books-read');

let numberBooksRead = 0;
let inputTrueFalse = inputRead.checked;
let index = -1;

const submitForm = document.getElementById('form');
const addBookBtn = document.getElementById('addBtn');
const cardContainer = document.getElementById('card-container');

function addCard() {
  const book = myLibrary[myLibrary.length - 1];
  let card = document.createElement('div');
  card.classList.add('card');
  card.dataset.cardId = ++index;

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
  isRead.classList.add('read-button');
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
  }

  const deletebtn = document.createElement('button');
  deletebtn.innerHTML = 'Delete';
  deletebtn.classList.add('delete-button');
  card.appendChild(deletebtn);

  deletebtn.addEventListener('click', deleteBookFromLibrary);

  function deleteBookFromLibrary() {
    index = card.dataset.cardId;

    function refreshcardId() {
      // for each card in getAllCards, check if their card id is > the card id that was removed.
      //for all cards that meet this requirement, subtract their card id by 1.

      for (i = 0; i < getAllCards.length; i++) {
        if (getAllCards[i].dataset.cardId > index) {
          getAllCards[i].dataset.cardId = getAllCards[i].dataset.cardId - 1;
        }
      }
    }
    refreshcardId();
    myLibrary.splice(index, 1);
    card.remove();
  }

  cardContainer.appendChild(card);
  getAllCards = document.querySelectorAll('.card');
}




  function addBookToLibrary(event) {
    event.preventDefault();
    if (inputTitle.value === '') {
      inputTitle.setCustomValidity('You must enter this title field!!!');
    } else {
      inputTitle.setCustomValidity('');
    }

    if (inputAuthor.value === '') {
      inputAuthor.setCustomValidity('You must enter this author field!!!');
    } else {
      inputAuthor.setCustomValidity('');
    }

    if (inputPages.value === '') {
      inputPages.setCustomValidity('You must enter this pages field!!!');
    } else {
      inputPages.setCustomValidity('');
    }
    const isValid =
      inputTitle.checkValidity() &&
      inputAuthor.checkValidity() &&
      inputPages.checkValidity();
    if (isValid) {
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
    }
    inputTitle.reportValidity()
    inputAuthor.reportValidity()
    inputRead.reportValidity()
  }
  submitForm.addEventListener('submit', addBookToLibrary);
