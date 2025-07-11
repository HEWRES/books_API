async function loadBooks() {
    try{
        let res = await fetch("/api/books");
        let booksDiv = document.querySelector("#books");
    
        if(!res.ok){
            return booksDiv.innerHTML = "Loading books failed!";
        }

        const data = await res.json();
        
        data.forEach((book) => {
            booksDiv.innerHTML += `
                <div id='booksDiv'>
                    <h1>${book.title}</h1>
                    <h1>${book.author}</h1>
                    <h1>${book.price}</h1>
                    <button onclick='deleteBook(${book._id})'>Delete</button>
                </div>`;
        });
    }
    catch(error){
        console.log(error);
    }
}

loadBooks();