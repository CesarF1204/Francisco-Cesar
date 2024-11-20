import { Library } from './library.js';

/* Get the forms and input elements */
const library_form = document.getElementById('libraryForm');
const book_form = document.getElementById('bookForm');
const search_bar = document.getElementById('searchBar');

/* Add event listener */
library_form.addEventListener('submit', createLibrary);
book_form.addEventListener('submit', addBook);
search_bar.addEventListener('submit', searchBook);

/* Initialize the library variable as null */
let library = null;

/**
* DOCU: This function is used to handle the creation of library <br>
* This is being called when user wants to create a library. <br>
* Last Updated Date: November 19, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function createLibrary(event){
    event.preventDefault();

    /* Get the library name from input and trim any whitespace */
    const library_name = document.getElementById('library_name');
    const library_name_value = library_name.value.trim();

    /* Check if library_name_value has value */
    if(library_name_value){
        /* Create a new library instance */
        library = new Library(library_name_value);
        alert(`Library "${library.name}" created successfully.`);

        /* Hide the library form when a library is created */
        document.getElementById('libraryContainer').style.display = 'none';
        /* Show the book form when a library is created */
        document.getElementById('bookContainer').style.display = 'block';
    }
    else{
        alert("Library name cannot be empty. Please try again");
    }

    /* Clear the library name input field */
    library_name.value = '';
}

/**
* DOCU: This function is used to handle the adding of book to the library <br>
* This is being called when user wants to add a book to the library. <br>
* Last Updated Date: November 19, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function addBook(event){
    event.preventDefault();

    /* Get the title, author, genre and its current value */
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const genre = document.getElementById('genre');

    const title_value = title.value;
    const author_value = author.value;
    const genre_value = genre.value;

    /* Check if all fields are not empty */
    if(title_value && author_value && genre_value){
        /*  Add the book to the library */
        library.addBook(title_value, author_value, genre_value);
        alert('Book has added successfully!');

        /* Create a new row for the available books table */
        const available_books = document.getElementById("available_book_list");
        const row = document.createElement('tr');

        row.innerHTML = `
            <td id="title">${title_value}</td>
            <td id="author">${author_value}</td>
            <td id="genre">${genre_value}</td>
            <td><button type="button" class="btn btn-primary" id="borrow_btn">Borrow</button></td>
        `;

        /*  Add the row to the available books table */
        available_books.appendChild(row);

        /* Add event listener to the borrow button */
        const borrow_button = row.querySelector('#borrow_btn');
        if(borrow_button){
            borrow_button.addEventListener('click', borrowBook);
        }

        /* Show the available books when the user added a book */
        document.getElementById('availableBooks').style.display = 'block';
    }
    else{
        alert("Book cannot be empty. Please try again");
    }

    /* Clear the title, author, and genre input fields */
    title.value = '';
    author.value = '';
    genre.value = '';
}

/**
* DOCU: This function is used to handle the borrowing of book from the library <br>
* This is being called when user wants to borrow a book from library. <br>
* Last Updated Date: November 19, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function borrowBook(event) {
    /* Get the row of the clicked button */
    const selected_row = event.target.closest('tr');
    /* Get the title of the book */
    const book_title = selected_row.querySelector('#title').textContent;
    /* Get the author of the book */
    const book_author = selected_row.querySelector('#author').textContent;
    /* Get the genre of the book */
    const book_genre = selected_row.querySelector('#genre').textContent;

    /* Find the book in the library */
    const book = library.books.find(book => book.title === book_title);
    
    /* Check if book is not undefined */
    if(book){
        /* Call the borrowBook method on the book */
        book.borrowBook();
        /* Check if the book is borrowed (availability is false) */
        if(book.availability === false){
            selected_row.querySelector('td:last-child').textContent = 'Unavailable';

            /* Create a new row for the borrowed books table */
            const borrowed_books = document.getElementById("borrowed_book_list");
            const row = document.createElement('tr');

            row.innerHTML = `
                <td id="title">${book_title}</td>
                <td id="author">${book_author}</td>
                <td id="genre">${book_genre}</td>
                <td><button type="button" class="btn btn-primary" id="return_btn">Return</button></td>
            `;

            /* Add the row to the borrowed books table */
            borrowed_books.appendChild(row);

            /* Add event listener to the return button */
            const return_button = row.querySelector('#return_btn');
            if(return_button){
                return_button.addEventListener('click', returnBook);
            }

            /* Show the borrowed books when the user click the borrow button */
            document.getElementById('borrowedBooks').style.display = 'block';
        }
    }
}

/**
* DOCU: This function is used to handle the returning of book to the library <br>
* This is being called when user wants to return a book to the library. <br>
* Last Updated Date: November 19, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function returnBook(event){
    /* Find the row of the clicked button */
    const selected_row = event.target.closest('tr');

    const book_title = selected_row.querySelector('#title').textContent;
    const book = library.books.find(book => book.title === book_title);

    /* Check if book is not undefined */
    if(book){
        /* Call the returnBook method on the book */
        book.returnBook();

        /* Check if the book is returned (availability is true) */
        if(book.availability === true){
            /* Update the available books table */
            const available_books = document.getElementById('available_book_list').querySelectorAll('tr');
            
            /* Use forEach to get all the books in available_books */
            available_books.forEach(book => {
                const title_cell = book.querySelector('#title');

                /* Check if the title cell exists and matches the book title  */
                if(title_cell && title_cell.textContent === book_title){
                    /* Replace the "Unavailable" text with a "Borrow" button */
                    const action_cell = book.querySelector('td:last-child');
                    action_cell.innerHTML = `<button type="button" class="btn btn-primary" id="borrow_btn">Borrow</button>`;
                    const borrow_button = action_cell.querySelector('#borrow_btn');

                    /* Re-attach the event listener to handle borrowing */
                    if (borrow_button) {
                        borrow_button.addEventListener('click', borrowBook);
                    }
                }
            });

            /* Remove the row from the borrowed books table */
            selected_row.remove();

            /* Hide the Borrowed Books section if there are no books left */
            const borrowed_books_table = document.getElementById('borrowed_book_list');
            
            /* Check if there are no borrowed books */
            if(borrowed_books_table.rows.length === 0){
                document.getElementById('borrowedBooks').style.display = 'none';
            }
        }
    }
}

/**
* DOCU: This function is used to handle the searching of book to the library <br>
* This is being called when user wants to search the information of the book from library. <br>
* Last Updated Date: November 19, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function searchBook(event){
    event.preventDefault();

    /* Get the search input and convert it to lowercase */
    const search_input = document.getElementById('searchInput');
    const search_title = search_input.value.trim().toLowerCase();
    
    /* Check if search_title value is not null or empty */
    if(search_title){
        /* Call the searchBook method on the library */
        library.searchBook(search_title);
    }
    else{
        alert("Please enter a book title to search.");
    }

    /* Clear the search input field */
    search_input.value = '';
}