import { Book } from './book.js';
/** 
* @class 
* This class contains methods related to the Library Management System. <br>
* Last Updated Date: November 19, 2024
*/
export class Library{
    constructor(name){
        /* Initialize the library with an empty array of books */
        this.name = name;
        this.books = [];
    }

    /**
    * DOCU: This function is used to handle the adding of book to the library. <br>
    * This is being called when user wants to add a book the the library. <br>
    * Last Updated Date: November 19, 2024 <br>
    * @function
    * @param {string} title - The title of the book.
    * @param {string} author - The author of the book.
    * @param {string} genre - The genre of the book.
    * @author Cesar
    */
    addBook(title, author, genre){
        /* Create a new book instance and add it to the books array */
        const book1 = new Book(title, author, genre);
        this.books.push(book1);
    }

    /**
    * DOCU: This function is used to handle the searching of book to the library. <br>
    * This is being called when user wants to search for a book the the library. <br>
    * Last Updated Date: November 19, 2024 <br>
    * @function
    * @param {string} title - The title of the book.
    * @author Cesar
    */
    searchBook(title){
        /* Find a book that matches the given title (case-insensitive) */
        const book = this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());

        /* If the book is found, call displayInfo() function to display its details
        else print to the console that the book is not found in the library. */
        if(book){
            book.displayInfo();
        }
        else{
            alert(`Book titled "${title}" not found in the library.`);
        }
    }

    /**
    * DOCU: This function is used to handle the displaying of book available from library. <br>
    * This is being called when user wants to view or display the available books from library. <br>
    * Last Updated Date: November 19, 2024 <br>
    * @function
    * @author Cesar
    */
    displayBooks(){
        /* Filter books that are currently available */
        const availableBooks = this.books.filter((book) => book.availability);

        /* Check if there are available books, display their 
        else print to the console that their are no books available. */
        if(availableBooks.length > 0){
            console.log("Available Books:");
            availableBooks.forEach((book) => book.displayInfo());
        }
        else{
            console.log("No books are currently available.");
        }
    }
}