async function loadBooks() {
    try{
        let res = await fetch("/api/books");
        let booksDiv = document.querySelector("#books");
    
        if(!res.ok){
            return booksDiv.innerHTML = "Loading books failed!";
        }

        const data = await res.json();
        
        data.forEach((book) => {
            let bookDiv = document.createElement("div");
            bookDiv.id = "booksDiv";
            let bookTitle = document.createElement("h1");
            let bookAuthor = document.createElement("h1");
            let bookPrice = document.createElement("h1");

            bookTitle.innerHTML = book.title;
            bookAuthor.innerHTML = book.author;
            bookPrice.innerHTML = book.price;

            bookDiv.appendChild(bookTitle);
            bookDiv.appendChild(bookAuthor);
            bookDiv.appendChild(bookPrice);

            booksDiv.appendChild(bookDiv);
        });
    }
    catch(error){
        console.log(error);
    }
}

loadBooks();