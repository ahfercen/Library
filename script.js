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
        cover.src = "./assets/placeholder.png";
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

