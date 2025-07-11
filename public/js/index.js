//Add error handling

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
                    <button onclick="updateBook('${book._id}')">Update</button>
                    <button onclick="deleteBook('${book._id}')">Delete</button>
                </div>`;
        });
    }
    catch(error){
        console.log(error);
    }
}

async function updateBook(id){
    let bgForm = document.querySelector("#bgForm");
    let form = document.querySelector("#addBookForm");

    bgForm.style.display = "block";

    const response = await fetch(`/api/books/${id}`);
    const existingData = await response.json();

    if(existingData.release_date){
        const formatted = existingData.release_date.split("T")[0];
        document.getElementById("release_date").value = formatted;
    }

    document.getElementById("title").value = existingData.title;
    document.getElementById("author").value = existingData.author;
    document.getElementById("pages").value = existingData.pages;
    document.getElementById("rating").value = existingData.rating;
    document.getElementById("price").value = existingData.price;

    form.addEventListener("submit", async () => {
        let formData = new FormData(form);

        let updatedBook = {
            title: formData.get("title"),
            author: formData.get("author"),
            pages: formData.get("pages"),
            release_date: formData.get("release_date"),
            rating: formData.get("rating"),
            price: formData.get("price"),
        };

        await fetch(`/api/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedBook)
        });
    });
};

async function deleteBook(id){
    try{
        const res = await fetch(`/api/books/${id}`, {
            method: "DELETE"
        });
        console.log(res);
        window.location.reload();
    }
    catch(err){
        console.log(err);
    }
}

let cancelBtn = document.querySelector("#cancelBtn");

cancelBtn.addEventListener("click", () => {window.location.reload()});

loadBooks();