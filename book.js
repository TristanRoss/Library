function Book(title, author, pageCount, hasRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasRead = hasRead;
    this.info = () => {
        if (hasRead.toLowerCase() == "false") {
            return `${title} by ${author}, ${pageCount} pages, not read yet.`;
        } else if (hasRead.toLowerCase() == "true") {
            return `${title} by ${author}, ${pageCount} pages, has been read.`;
        } else {
            return `${title} by ${author}, ${pageCount} pages, not sure if read yet!`;
        }
    };
}
