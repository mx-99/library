let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrar(){
    let title = prompt("enter book title");
    let author = prompt("Enter book author");
    let pages = prompt("Enter book pages in numbers");
    let book = new Book
    (title, author, pages);
    myLibrary.push(book);
}
