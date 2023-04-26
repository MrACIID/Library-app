const cardContainer = document.querySelector(".cardContainer");
const newbookTitle = document.getElementById("title");
const newbookAuthor = document.getElementById("author");
const newbookPages = document.getElementById("pages");
const submitBtn = document.querySelector(".submit");

const myLibrary = [{ title: "test", author: "moi", pages: "50" }];

function addbooktoLibrary(title, author, pages, index) {
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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(
    newbookTitle.value,
    newbookAuthor.value,
    newbookPages.value
  );
  myLibrary.push(newBook);
  addbooktoLibrary(
    newbookTitle.value,
    newbookAuthor.value,
    newbookPages.value,
    myLibrary.indexOf(newBook)
  );
  console.log(myLibrary);
});

function existingBooks() {
  if (myLibrary.length > 0) {
    myLibrary.forEach((book) =>
      addbooktoLibrary(
        book.title,
        book.author,
        book.pages,
        myLibrary.indexOf(book)
      )
    );
  }
}
existingBooks();

console.log(myLibrary);
