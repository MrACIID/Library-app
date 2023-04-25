const cardContainer = document.querySelector(".cardContainer");

const myLibrary = [
  { title: "test", author: "moi", pages: "50" },
  { title: "testaaaa", author: "moi", pages: "50" },
  { title: "testaaaa", author: "moi", pages: "50" },
];

function displayBook(title, author, pages, index) {
  cardContainer.innerHTML += `<div class="bookCard" data-attribute=${index}>
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

function showForm() {
  document.getElementById("formElement").style.display = "flex";
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  myLibrary.forEach((book) =>
    displayBook(book.title, book.author, book.pages, myLibrary.indexOf(book))
  );
}

addBookToLibrary();

console.log(myLibrary);
