/** 
* @class 
* All method here are related to Library Management System. <br>
* Last Updated Date: November 19, 2024
*/
export class Book{
    constructor(title, author, genre, availability=true) {
        /* Initialize the book's title, author, genre, and availability */
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.availability = availability;
    }

    /**
    * DOCU: This function is used to handle the borrowing of the book. <br>
    * This is being called when user wants to borrow a book. <br>
    * Last Updated Date: November 19, 2024 <br>
    * @function
    * @author Cesar
    */
    borrowBook(){
        /* Check if the book is available, set the availability to false.
        else print to the console that the book is currently unavailable.  */
        if(this.availability){
            this.availability = false;
        }
        else{
            console.log(`Sorry, "${this.title}" is currently unavailable.`);
        }
    }

    /**
    * DOCU: This function is used to handle the returning of the borrowed book. <br>
    * This is being called when user wants to return a book. <br>
    * Last Updated Date: November 19, 2024 <br>
    * @function
    * @author Cesar
    */
    returnBook(){
        /* Check if the book is not available, set the availability to true and print to the console that the book is returned.
        else print to the console that the book was not borrowed.  */
        if(!this.availability){
            this.availability = true;
        }
        else{
            console.log(`"${this.title}" was not borrowed.`);
        }
    }

    /**
    * DOCU: This function is used to handle the diplaying of the book's information. <br>
    * This is being called when user wants to view and display the information of the selected book. <br>
    * Last Updated Date: November 19, 2024 <br>
    * @function
    * @author Cesar
    */
    displayInfo(){
        alert(`Title: ${this.title}\nAuthor: ${this.author}\nGenre: ${this.genre}\nAvailability: ${this.availability}\n\nThis book is currently ${this.availability ? 'Available' : 'Not Available'} now.`);
    }
}