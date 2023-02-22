let myLibrary = [];
let getAllCards = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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

/*
-- TotalBooks, TotalPages, and TotalBooksRead functionality will be added later.
function setTotalBooks() {
  totalBooks.innerHTML = myLibrary.length;
}

function setTotalPages() {
  totalPages.innerHTML = 0;
  for (i = 0; i < myLibrary.length; i++) {
    totalPages.innerHTML =
      parseInt(totalPages.innerHTML) + parseInt(myLibrary[i].pages);
    if (totalPages.innerHTML === 'NaN') {
      totalPages.innerHTML = 0;
    }
  }
}

function setTotalBooksRead() {
  for (i = 0; i < 1; i++) {
    //loop through each book in the myLibrary array, and check which ones contain the string 'read' for pages property
    // store number in a variable
    if (getAllCards.length === myLibrary.length) {
      if (myLibrary[myLibrary.length - 1].read === 'read') {
        numberBooksRead++;
        totalBooksRead.innerHTML = numberBooksRead;
        break;
      }
    } else {
      numberBooksRead--;
      totalBooksRead.innerHTML = numberBooksRead;
      break;
    }
  }
}*/

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
        console.log(`here + ${getAllCards[i].dataset.cardId}`);
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

submitForm.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(event) {
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
}
