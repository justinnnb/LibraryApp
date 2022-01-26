
let myLibrary = [];

class Book {
    constructor(name, pages, read) {
    this.name = name
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.name + " " + this.pages;
        }
    }


}
const theHobbit = new Book("The Hobbit by J.R.R. Tolkien", "295 pages" , "not read yet")
const HarryPotter = new Book("Harry Potter and the Goblet of Fire", "500 pages" , "not read yet")
myLibrary.push(theHobbit);
myLibrary.push(HarryPotter);


function addBookToLibrary(item) {
        let bookName = prompt("Enter book name.")
        let pageNumber = prompt("Enter number of pages.")
        let readStatus = prompt("Have you read it?")
        const newBook = new Book(bookName, pageNumber, readStatus)

        myLibrary.push(newBook)

        displayBook(newBook)
    }


myLibrary.forEach(Book => {
    displayBook(Book)
})

function displayBook (item) {
    let div = document.createElement("div")
    let listName = document.createElement("li")
    let listPages = document.createElement("li")
    let listRead = document.createElement("li")
    let removeButton = document.createElement("button")
    
    
    document.body.appendChild(div)
    div.className = "bookCard"
    div.id = myLibrary.indexOf(item)
    listName.textContent = item.name
    listPages.textContent = item.pages
    listRead.textContent = item.read
    div.appendChild(listName)
    div.appendChild(listPages)
    div.appendChild(listRead)

    div.appendChild(removeButton)
    removeButton.className = "removeButton"
    removeButton.textContent = "Remove Book"
}

document.querySelector("#addBooks").addEventListener("click", function() {
    addBookToLibrary()
})

let removebuttons = document.getElementsByClassName("removeButton")

document.body.addEventListener("click", function (event){
        if ( event.target.className == "removeButton") {
    
        let x = myLibrary.indexOf(Book.name)
        myLibrary.splice(x, 1)
        event.target.parentNode.remove()
        console.log("hey")
        }
    })

