let myLibrary = [
    {
        id: "a6bc2b3f-060c-40b2-91dd-1743d3b91888",
        title: "Introduction to the Algorithms",
        author: "Thomas H. Cormen",
        pages: 1312,
        read: false
      },
      {
        id: " c6a6f0ab-1372-46a5-a510-46844934a5dc",
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        pages: 352,
        read: true
      },
      {
        id: "a2332cd0-2d56-47a6-8325-0bb02e2f8ee6",
        title: "Structure and Interpretation of Computer Programs",
        author: "Harold Abelson & Gerald Jay Sussman",
        pages: 657,
        read: false
      },
      {
        id: " f69b2824-08d0-4836-bf01-2c0455afad2e",
        title: "You Don't Know JS Yet",
        author: "Kyle Simpson",
        pages: 143,
        read: true
      }
];

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function addBookToLibrar(){
    let id = crypto.randomUUID();
    let title = prompt("enter book title");
    let author = prompt("Enter book author");
    let pages = prompt("Enter book pages in numbers");
    let read = prompt("Read status");
    let book = new Book(id, title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(){
    const books = document.querySelector('.container');
    books.innerHTML = '';
    myLibrary.forEach((obj, index) =>{
        const book_cards = document.createElement('div');
        book_cards.className = 'cards';
        book_cards.innerHTML = `
                <h3>Random_Id: ${obj.id} <br> ${obj.title} <br> By: ${obj.author}</h3>
        <h3>${obj.pages} pages <br> ${obj.read ? "Read" : "Not Read"}</h3>`;
        books.appendChild(book_cards)
    })
}

addBookToLibrar();
displayBooks();

