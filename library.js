const books = document.getElementById('books');


let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false)  // test books manually input 
let bible = new Book('Bible', 'God', '999', true)
let theCat = new Book('The Cat in the Hat', 'Dr. Suess', '68', true)


function Book(title, author, pages, read,) {  //take input and make a book object
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? 'have read' : 'have not read'
}
Book.prototype.info = function () {   //and info/string func to book proto
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}



function addBookToLibrary() {  // add book object to myLibrary array
    // do stuff here
}

let myLibrary = [theHobbit, bible, theCat]; // array of book 'objects'





function bookDiv(book) {
    const newDiv = document.createElement('div');
    newDiv.className = 'book';
    newDiv.innerHTML = book.info()
    books.appendChild(newDiv);
    console.log(this)
}
bookDiv(theHobbit)


console.log(theCat.info())



//const bookCard = // turn book object(s) into something displayable (make this part of newDiv func?)


  //  book1.innerHTML = `${theHobbit.info()}`  // test what a book looks like on the page
// console.log(myLibrary)



// do my bookDivs even need an ID? if so... maybe covert title to lowercase and no whitespace
// or special chars, then assign that to the ID inside of the bookDiv func.