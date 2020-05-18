class Book {
    constructor(title, author, pageCount, hasRead) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.hasRead = hasRead;
    }

    info() {
        if (this.hasRead.toLowerCase() == "false") {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, not read yet.`;
        } else if (this.hasRead.toLowerCase() == "true") {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, has been read.`;
        } else {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, not sure if read yet!`;
        }
    }

    changeReadStatus() {
        if (this.hasRead.toLowerCase() == 'true') {
            this.hasRead = 'false';
        } else if (this.hasRead.toLowerCase() == 'false') {
            this.hasRead = 'true';
        }
    }
}

function addBookToLbrary() {
    let input = prompt("Please enter a book with the title, author, page count, and if you have read it (comma separated):");
    input = input.split(', ');
    let newBook = new Book(input[0], input[1], input[2], input[3]);
    myLibrary.push(newBook);
}

function render() {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        const newBookDiv = document.createElement('div');
        newBookDiv.textContent = myLibrary[i].info();
        newBookDiv.dataset.index = i;
        
        const deleteBookButton = document.createElement('button');
        deleteBookButton.textContent = 'Delete book';
        deleteBookButton.addEventListener('click', () => {
            if (myLibrary.length == 1) {
                myLibrary = [];
            } else {
                myLibrary.splice(newBookDiv.dataset.index, 1);
            }
            render();
        });

        const changeReadStatusButton = document.createElement('button');
        changeReadStatusButton.textContent = 'Change read status';
        changeReadStatusButton.addEventListener('click', () => {
            let book = myLibrary[newBookDiv.dataset.index];
            book.changeReadStatus();
            myLibrary[newBookDiv.dataset.index] = book;
            render();
        });
        const br = document.createElement('br');
        newBookDiv.append(br);
        newBookDiv.append(deleteBookButton);
        newBookDiv.append(changeReadStatusButton);
        container.append(newBookDiv);
        
    }
}

let myLibrary = [];
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'false'));
myLibrary.push(new Book('Harry Potter and the Goblet of Fire', 'J.K. Rowling', '600', 'true'));
render();
const newBookButton = document.querySelector('#newBook');
newBookButton.addEventListener('click', () => {
    addBookToLbrary();
    render();
});
