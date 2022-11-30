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
function drawBooks(){
    console.log("Start drawing books");
    console.log(myLibrary);
}


//initial Book creation and driver
myLibrary.push(new Book("Book1", "Author", 400, true));
myLibrary.push(new Book("Book2", "Author", 500, false));
myLibrary.push(new Book("Book3", "Author", 336, true));
myLibrary.push(new Book("Book4", "Author", 523, false));
myLibrary.push(new Book("Book5", "Author", 264, false));
myLibrary.push(new Book("Book6", "Author", 699, false));
myLibrary.push(new Book("Book7", "Author", 772, true));

//Initial population of library
drawBooks();

