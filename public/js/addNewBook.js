let form = document.querySelector("#addBookForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const bookData = {
        title: formData.get("title"),
        author: formData.get("author"),
        pages: formData.get("pages"),
        relase_date: formData.get("relase_date"),
        rating: formData.get("rating"),
        price: formData.get("price")
    };

    try{
        const result = await fetch("/api/books", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookData)
        });

        if(result.ok){
            console.log("Book was added successfully!");
        }
        else{
            console.log("Error occured");
        }
    }
    catch(error){
        console.log(error);
    }
});