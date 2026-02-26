let myLibrary = [
  {
    id: "a6bc2b3f-060c-40b2-91dd-1743d3b91888",
    title: "Introduction to the Algorithms",
    author: "Thomas H. Cormen",
    pages: 1312,
    read: false
  }
];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

function addBookToLibrary() {
  let id = crypto.randomUUID();
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  console.log
  let book = new Book(id, title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const books = document.querySelector('.container');
  books.innerHTML = '';
  myLibrary.forEach((obj) => {
    const book_cards = document.createElement('div');
    book_cards.className = 'cards';
    book_cards.innerHTML = `
    <h3>Id:= ${obj.id}<br> Title:= ${obj.title}<br> Author:= ${obj.author}<br>
    Pages:= ${obj.pages}<br> ${obj.read ? "Read" : "Not Read"}</h3>`;
    books.appendChild(book_cards)
  })
}


const addBtn = document.querySelector('#show-dialog');
const dialog = document.querySelector('#my-dialog');
const closeBtn = document.querySelector('#save');


addBtn.addEventListener('click', () => {
  dialog.showModal();
})

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
})

displayBooks()