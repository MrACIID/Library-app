const cardContainer = document.querySelector(".cardContainer");
const newbookTitle = document.getElementById("title");
const newbookAuthor = document.getElementById("author");
const newbookPages = document.getElementById("pages");
const submitBtn = document.querySelector(".submit");

function showForm() {
  document.getElementById("formElement").style.display = "flex";
}

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function createBook(title, author, pages, index) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.setAttribute("data-attribute", index);
  cardContainer.appendChild(bookCard);

  const edit = document.createElement("div");
  edit.classList.add("edit");
  bookCard.appendChild(edit);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "delete";
  edit.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    bookCard.remove();
    console.log(myLibrary);
  });

  const info = document.createElement("div");
  info.classList.add("info");
  bookCard.appendChild(info);

  const bookTitle = document.createElement("div");
  bookTitle.classList.add("title");
  bookTitle.textContent = title;
  info.appendChild(bookTitle);

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("author");
  bookAuthor.textContent = author;
  info.appendChild(bookAuthor);

  const bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  bookPages.textContent = pages;
  info.appendChild(bookPages);

  const doneReading = document.createElement("div");
  doneReading.classList.add("doneReading");
  bookCard.appendChild(doneReading);

  const readBtn = document.createElement("button");
  readBtn.textContent = "done reading ?";
  doneReading.appendChild(readBtn);
}

function updateLib(newBook) {
  createBook(
    newBook.title,
    newBook.author,
    newBook.pages,
    myLibrary.indexOf(newBook)
  );
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(
    newbookTitle.value,
    newbookAuthor.value,
    newbookPages.value
  );
  myLibrary.push(newBook);
  console.log(myLibrary);
  updateLib(newBook);
});

function displayAllBooks() {
  myLibrary.map((book) =>
    createBook(book.title, book.author, book.pages, myLibrary.indexOf(book))
  );
  console.log(myLibrary);
}
displayAllBooks();
