let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

document.getElementById('submit').addEventListener('click', function (e) {
    myLibrary.push(new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.forms.form.read.value
    ))
    document.forms.form.reset();
    renderLibrary();
})

function renderLibrary() {
    document.getElementById('books').innerHTML = '';
    for (i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'book';
        newDiv.id = `book${i}`;
        newDiv.innerText = `${myLibrary[i].info()}`
        document.getElementById('books').appendChild(newDiv);
    }
}






