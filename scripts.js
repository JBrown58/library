let myLibrary = [];

function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;

  // the constructor...
}

const newBook = new Book('Riordan', 'Percy Jackson', '345', 'not read');
const newBook2 = new Book('Amazing story', 'Best Guy', '524', 'read');

function addBookToLibrary() {
  myLibrary.push(newBook);
  myLibrary.push(newBook2);
  return myLibrary;
  // do stuff here
}

console.log(addBookToLibrary());
