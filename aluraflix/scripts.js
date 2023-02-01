var books = [
    {
        title: "Drácula",
        cover: "https://m.media-amazon.com/images/I/61MgodE1s0L.jpg"
    },
    {
        title: "Quarto de despejo",
        cover: "https://m.media-amazon.com/images/I/81ykDTJWx9L.jpg"
    },
    {
        title: "Diário de Anne Frank",
        cover: "https://m.media-amazon.com/images/I/91fYMzrTIyL.jpg"
    },
    {
        title: "O Guia do mochileiro das galáxias",
        cover: "https://m.media-amazon.com/images/I/91rGyWfZN8L.jpg"
    }
];

booksElement = document.querySelector(".books");
var bookExists = false;
var imageExtensions = ["jpg", "png", "jpeg", "gif", "svg", "tiff"];

function showBooks() {
    booksElement.innerHTML = "";
    books.forEach((book) => {
        var newDiv = document.createElement("div");
        var newImage = document.createElement("img");
        var newTitle = document.createElement("h2");
        newImage.src = book.cover;
        newTitle.innerText = book.title;
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        booksElement.appendChild(newDiv);
    });
}

function addNewBook() {
    var bookTitle = document.getElementById("bookTitle").value;
    var bookCover = document.getElementById("bookCover").value;
    
    var url = bookCover.split(".");
    var extension = url[url.length - 1];
    
    if (bookTitle == "" || bookCover == "") {
        alert("Não foi possível adicionar o livro. Tente novamente.");
    } else if (imageExtensions.includes(extension) == false) {
        alert(
            "Oops! Não foi possível adicionar a imagem. Tente um caminho com alguma destas extensões: jpg, png, jpeg, gif, svg ou tiff."
            );
        } else {
            
            for (var i = 0; i < books.length; i++) {
                if (
                    bookTitle.toLowerCase() == books[i].title.toLowerCase() ||
                    bookCover == books[i].cover
                    ) {
                        alert(bookTitle + " já está na lista de livros. Tente adicionar outro.");
                        bookExists = true;
                        break
                    } 
                }  
                
                if (bookExists == false) {
                    books.push({
                        title: bookTitle,
                        cover: bookCover
                    });
                    showBooks();
                }
            }
        }
        showBooks();