let myLibrary = [
    new Book(crypto.randomUUID(), "The Pragmatic Programmer", "Andrew Hunt & David Thomas", 352, true),
    new Book(crypto.randomUUID(), "You Don’t Know JS Yet", "Kyle Simpson", 143, false),
    new Book(crypto.randomUUID(), "Introduction to Algorithms", "Thomas H. Cormen", 1312, false),
];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

Book.prototype.toggleReadStatus = function(){
  this.read = !this.read;
}

function addBookToLibrary() {
  let id = crypto.randomUUID();
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let book = new Book(id, title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
  clearForm();
}

function displayBooks() {
  const books = document.querySelector('.container')
  books.innerHTML = "";
  myLibrary.forEach((obj, index) => {
      const book_cards = document.createElement('div')
      book_cards.className = 'cards'
      book_cards.innerHTML = `
      <h3>${obj.title} <br> By: ${obj.author}</h3>
      <p>${obj.pages} pages ${obj.read ? "Read" : "Not Read"}</p>
      <button data-id="${obj.id}" class="toggle-read">Read Status </button>
      <button data-id="${obj.id}" class="remove-book">Remove </button>`;
      books.appendChild(book_cards)
  });
  attachEventListeners()
}

function attachEventListeners(){
  const toggleReadBtns = document.querySelectorAll('.toggle-read');
  const removeBtns = document.querySelectorAll('.remove-book');

  toggleReadBtns.forEach((button) =>{
    button.addEventListener('click', toggleRead);
  })

  removeBtns.forEach((button) =>{
    button.addEventListener('click', removeBook);
  })

}

function toggleRead(e){
  const id = e.target.dataset.id;
  const book = myLibrary.find(book => book.id === id);
  console.log(id)
  book.toggleReadStatus();
  displayBooks();
}

function removeBook(e){
  const id = e.target.dataset.id;
  myLibrary = myLibrary.filter(book => book.id !== id);
  displayBooks();
}

function clearForm() {
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
  document.getElementById("read").checked = false;
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