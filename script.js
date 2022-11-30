//Book Code
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + "by " + author + ", " + pages + " pages, " + ((read) ? "read.":"not read yet."); 
    }
}
function AddToLibrary(Book){
    myLibrary.push(Book);
}


//html code
const libraryContainer = document.getElementById("Library");



//initial Book creation
const book1 = new Book("Book1", "Author", 400, true);
const book2 = new Book("Book2", "Author", 500, false);
const book3 = new Book("Book3", "Author", 336, true);
const book4 = new Book("Book4", "Author", 523, false);
const book5 = new Book("Book5", "Author", 264, false);
const book6 = new Book("Book6", "Author", 699, false);
const book7 = new Book("Book7", "Author", 772, true);