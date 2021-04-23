const books = document.getElementById('books');
const form = document.getElementById('form')
//const title = document.getElementById('title');
const submit = document.getElementById('submit')
const testDiv = document.getElementById('testDiv')  // test div




// const submit = function (e) {
//     e.preventDefault();
//     //console.log(title.value, author.value, pages.value, read.value);
// }
// document.getElementById('submit').addEventListener('click', submit); //calls the submit func



form.addEventListener("submit", function (event) {
    let data = new FormData(form);
    let output = "";
    for (const entry of data) {
        output = output + entry[1] + ', ';
    };
    testDiv.innerText = output;
    event.preventDefault();
});


// submit.addEventListener('click', function (e) {
//     e.preventDefault;
//     testDiv.appendChild('test')
//     console.log(e)
// })







let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false)  // test books manually input 
let bible = new Book('Bible', 'God', '999', true)
let theCat = new Book('The Cat in the Hat', 'Dr. Suess', '68', true)


function Book(title, author, pages, read,) {  //take input and make a book object
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? 'have read' : 'have not read'
}
Book.prototype.info = function () {   //add info/string func to book proto
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

function addBookToLibrary() {  // add book object to myLibrary array
    // do stuff here
}

let myLibrary = [theHobbit, bible, theCat]; // array of book 'objects'





function bookDiv(book) {  //This func add a new div with books info
    const newDiv = document.createElement('div');
    newDiv.className = 'book';
    newDiv.innerHTML = book.info()
    books.appendChild(newDiv);
}  // bookDiv(theHobbit)  <---- called liked this


bookDiv(theHobbit)
bookDiv(bible)
bookDiv(theCat)



//const bookCard = // turn book object(s) into something displayable (make this part of newDiv func?)

// do my bookDivs even need an ID? if so... maybe covert title to lowercase and no whitespace
// or special chars, then assign that to the ID inside of the bookDiv func.