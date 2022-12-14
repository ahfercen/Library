
//Book Code
let myLibrary = [];
class Book {
    #title;
    #author;
    #pages;
    #read;
    constructor(title, author, pages, read){
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
        this.#read = read;
    }
    info() {
        return this.#title + "by " + this.#author + ", " + this.#pages + " pages, " + ((this.#read) ? "read.":"not read yet."); 
    }
    get title(){
        return this.#title;
    }
    get author(){
        return this.#author;
    }
    get pages(){
        return this.#pages;
    }
    get read(){
        return this.#read;
    }
    set title(title){
        this.#title = title;
    }
    set author(author){
        this.#author = author;
    }
    set read(read){
        this.#read = read;
    }
}

function AddToLibrary(Book){
    myLibrary.push(Book);
}


//html code

function randomImg(){
    return Math.ceil(Math.random() * 10 );
}

const libraryContainer = document.getElementById("Library");
function drawBooks(){
    libraryContainer.textContent = "";

    myLibrary.forEach(Book => {
        const bookContainer = (document.createElement("div"));
        bookContainer.className = "book";

        const titleContainer = document.createElement("div");
        titleContainer.className = "title-author";
        bookContainer.appendChild(titleContainer);
        const title = document.createElement("div");
        title.textContent = Book.title;
        title.className = "title";
        titleContainer.appendChild(title);
        const author = document.createElement("div");
        author.textContent = Book.author;
        author.className = "author"
        titleContainer.appendChild(author);

        const coverContainer = document.createElement("div");
        coverContainer.className = "cover"
        bookContainer.appendChild(coverContainer);
        const cover = document.createElement("img");
        cover.src = `./assets/books/${randomImg()}.jpeg`;
        coverContainer.appendChild(cover);

        const pagesContainer = document.createElement("div");
        pagesContainer.className = "pages-read";
        bookContainer.appendChild(pagesContainer);
        const pages = document.createElement("div");
        pages.textContent = Book.pages + " pages";
        pages.className = "pages"
        pagesContainer.appendChild(pages);
        const read = document.createElement("div");
        if(Book.read == true ){
            read.textContent = "Finished";
        }else{
            read.textContent = "Not Started";
        }
        read.className = "read";
        pagesContainer.appendChild(read);

        libraryContainer.appendChild(bookContainer);
    });
}

addEventListener("submit", (evt) =>{
    evt.preventDefault();
    const data = [...(new FormData(evt.target)).entries()];
    console.log(data);
    myLibrary.push( new Book(data[0][1], data[1][1], data[2][1], data[3][1]));
    drawBooks();
});


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

