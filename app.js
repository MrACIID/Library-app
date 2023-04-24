const cardContainer = document.querySelector(".cardContainer");

const myLibrary = [];

function displayBook(title, author, pages) {
  cardContainer.innerHTML += `<div class="bookCard">
  <div class="info">
    <div class="title">${title}</div>
    <div class="author">${author}</div>
    <div class="pages">${pages}</div>
  </div>
  <div class="doneReading">
    <button>done reading ?</button>
  </div>
</div>`;
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  myLibrary.push(new Book("test", "moi", "50"), new Book("a", "b", "z"));
  myLibrary.forEach((book) => displayBook(book.title, book.author, book.pages));
}

addBookToLibrary();

console.log(myLibrary);
