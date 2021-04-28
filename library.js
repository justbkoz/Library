let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {
    return `${this.title}\n\n By: ${this.author}\n ${this.pages} pages\n ${this.read}`;
}

document.getElementById('submit').addEventListener('click', function () {
    myLibrary.push(new Book(
        document.forms.form.title.value,
        document.forms.form.author.value,
        document.forms.form.pages.value,
        document.forms.form.read.value
    ))
    document.forms.form.reset();
    document.getElementById('form').style.display = 'none';
    document.getElementById('newBook').style.display = 'block'
    renderLibrary();
})

document.getElementById('cancel').addEventListener('click', function () {
    document.forms.form.reset();
    document.getElementById('form').style.display = 'none';
    document.getElementById('newBook').style.display = 'block'
})

document.getElementById("form").style.display = 'none';
document.getElementById('newBook').addEventListener('click', function () {
    document.getElementById('form').style.display = 'block';
    document.getElementById('newBook').style.display = 'none'

})

function renderLibrary() {
    [...document.getElementsByClassName('book')].map(thumb => thumb.remove())
    for (i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'book';
        newDiv.id = `book${i}`;
        newDiv.innerText = `${myLibrary[i].info()}`
        document.getElementById('library').appendChild(newDiv);

        document.getElementById(`book${i}`).innerHTML +=
            ` <input type = 'button' id = 'readButton${i}' value = 'Read?'>`
    }
}

myLibrary.push(new Book('The Hobbit', 'Tolkien', '495', 'Have Read'))
myLibrary.push(new Book('The Cat in the Hat', 'Dr. Suess', '49', 'Have not Read'))
myLibrary.push(new Book('Of Mice and Men', 'somebody', '205', 'Have Read'))
renderLibrary();



// toggle read status button



