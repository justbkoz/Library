let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {
    return `${this.title}\n\n By: ${this.author}\n ${this.pages} pages`;
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

document.getElementById('form').style.display = 'none';
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
        newDiv.setAttribute('data-arrIndex', `${i}`);
        newDiv.innerText = `${myLibrary[i].info()}`
        document.getElementById('library').appendChild(newDiv);

        document.getElementById(`book${i}`).innerHTML +=
            `<div class='radioButtons'>
                <input type='radio' id='read${i}' name='read${i}' value='Have Read'>
                <label for='read${i}'>Have Read</label>
                <input type='radio' id='notRead${i}' name='read${i}' value='Have not Read'>
                <label for='notRead${i}'>Have Not Read</label>
            </div>
            <input type='button' class='delete' id='delete${i}' value='X'>`;

        if (myLibrary[i].read == 'Have Read') {
            document.getElementById(`read${i}`).checked = true;
        } else { document.getElementById(`notRead${i}`).checked = true };

        document.getElementById(`read${i}`).addEventListener('change', function () {
            myLibrary[this.parentElement.parentElement.getAttribute('data-arrIndex')].read = 'Have Read'
        })

        document.getElementById(`notRead${i}`).addEventListener('change', function () {
            myLibrary[this.parentElement.parentElement.getAttribute('data-arrIndex')].read = 'Have not Read'
        })

        document.getElementById(`delete${i}`).addEventListener('click', function () {
            myLibrary.splice(this.parentElement.parentElement.getAttribute('data-arrIndex'), 1)
            renderLibrary();
        })

    }
}

myLibrary.push(new Book('Version 1.0', '(CSS needs work)', '(no memory)'))
myLibrary.push(new Book('The Hobbit', 'Tolkien', '495', 'Have Read'))
myLibrary.push(new Book('The Cat in the Hat', 'Dr. Suess', '49', 'Have not Read'))
myLibrary.push(new Book('Of Mice and Men', 'John Steinbeck', '205', 'Have Read'))
renderLibrary();









