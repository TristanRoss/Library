let myLibrary = [];
function Book() {
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read == "false") {
            return `${title} by ${author}, ${pages} pages, not read yet.`;
        } else if (read == "true") {
            return `${title} by ${author}, ${pages} pages, has been read.`;
        } else {
            return 'Something went wrong.';
        }
    }
}

function addBookToLibrary() {
    let book = prompt("Please enter a book with a title, author, pages, and if it has been read or not (comma separated).");
    book = book.split(", ");
    const newBook = new Book(book[0], book[1], book[2], book[3]);
    myLibrary.push(newBook);
}

function render() {
    let parent = document.getElementById("parent");
    for(let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = myLibrary[i].info();
        newDiv.style.padding = "10px";
        newDiv.style.border = "1px solid white";
        newDiv.style.textAlign = "center";
        newDiv.style.marginTop = "30px";
        parent.appendChild(newDiv);
    }
    
}

function hideButton() {
    let button = document.getElementById("newBook");
    button.style.visibility = "hidden";
    let form = document.createElement("form");
    form.onsubmit = function() {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        let button = document.getElementById("newBook");
        button.style.visibility = "visible";
        let form = document.getElementById("newBookForm");
        form.style.display = "none";
        console.log("test");
    }
    form.setAttribute('id', "newBookForm");
    form.setAttribute('display', "none");

    let i = document.createElement("input");
    i.setAttribute('text', "text");
    i.setAttribute('name', "title");
    i.setAttribute('id', "title");

    let para = document.createElement("p");
    let titleText = document.createTextNode("Title:");
    para.appendChild(titleText);

    let i2 = document.createElement("input");
    i2.setAttribute('text', "text");
    i2.setAttribute('name', "author");
    i2.setAttribute('id', "author");

    let para2 = document.createElement("p");
    let authorText = document.createTextNode("Author:");
    para2.appendChild(authorText);

    let i3 = document.createElement("input");
    i3.setAttribute('text', "text");
    i3.setAttribute('name', "pages");
    i3.setAttribute('id', "pages");

    let para3 = document.createElement("p");
    let pagesText = document.createTextNode("Pages:");
    para3.appendChild(pagesText);

    let i4 = document.createElement("input");
    i4.setAttribute('text', "text");
    i4.setAttribute('name', "read");
    i4.setAttribute('id', "read");

    let para4 = document.createElement("p");
    let readText = document.createTextNode("Read Yet:");
    para4.appendChild(readText);

    let s = document.createElement("input");
    s.setAttribute('type', 'submit');
    s.setAttribute('value', 'Submit');

    let para5 = document.createElement("p");

    form.appendChild(para);
    form.appendChild(i);
    form.appendChild(para2);
    form.appendChild(i2);
    form.appendChild(para3);
    form.appendChild(i3);
    form.appendChild(para4);
    form.appendChild(i4);
    form.appendChild(para5);
    form.appendChild(s);

    let parent = document.getElementById("formWrapper");
    parent.appendChild(form);

}

console.log(myLibrary);
render();
