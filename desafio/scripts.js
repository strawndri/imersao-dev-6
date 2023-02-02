var books = [
    {
      title: "Drácula",
      cover: "https://m.media-amazon.com/images/I/61MgodE1s0L.jpg",
      link:
        "https://www.amazon.com.br/Dr%C3%A1cula-Bram-Stoker/dp/6555520000/ref=asc_df_6555520000/?tag=googleshopp00-20&linkCode=df0&hvadid=379725837307&hvpos=&hvnetw=g&hvrand=13828463029376746385&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-912820413544&psc=1"
    },
    {
      title: "Quarto de despejo",
      cover: "https://m.media-amazon.com/images/I/81ykDTJWx9L.jpg",
      link:
        "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjaq7Pv0Pf8AhUBxpEKHZhZCc4YABAHGgJjZQ&ohost=www.google.com&cid=CAESZ-D2LUe_vx9vzXFnOrwbU4gx2Xcf5hHuEFWSOD57WGtVZHQLmHIhVqFEcXFHoUiF7VdLGLHzLFIO5_hjVjT5D34hbMBv33pS-Hr2GYCvZXmlD0q4KqD81UClHLwPd0cRu9yo6zLUdkg&sig=AOD64_1I6ZFKdZJN0ba5MB1-5ujiaMOMZA&ctype=5&q=&ved=2ahUKEwjHvK3v0Pf8AhUhLrkGHecEDB8Q9aACKAB6BAgGEAw&adurl="
    },
    {
      title: "Diário de Anne Frank",
      cover: "https://m.media-amazon.com/images/I/91fYMzrTIyL.jpg",
      link:
        "https://www.amazon.com.br/di%C3%A1rio-Anne-Frank-edi%C3%A7%C3%A3o-capa/dp/8501068209"
    },
    {
      title: "O guia do mochileiro das galáxias",
      cover: "https://m.media-amazon.com/images/I/91rGyWfZN8L.jpg",
      link:
        "https://www.amazon.com.br/guia-mochileiro-das-gal%C3%A1xias-Ilustrada/dp/6555651326/ref=sr_1_2?keywords=guia+do+mochileiro+das+gal%C3%A1xias&qid=1675368242&s=books&sprefix=guia+do+m%2Cstripbooks%2C193&sr=1-2"
    }
  ];
  
  booksElement = document.querySelector(".books");
  var bookExists = false;
  var imageExtensions = ["jpg", "png", "jpeg", "gif", "svg", "tiff"];
  
  function showBooks() {
    booksElement.innerHTML = "";
    books.forEach((book) => {
      var newLink = document.createElement("a");
      var newImage = document.createElement("img");
      var newTitle = document.createElement("h2");
  
      newImage.src = book.cover;
      newTitle.innerText = book.title;
  
      newLink.target = "_blank";
      newLink.href = book.link;
      newLink.appendChild(newImage);
      newLink.appendChild(newTitle);
      booksElement.appendChild(newLink);
    });
    bookExists = false;
  }
  
  function addNewBook() {
    var bookTitle = document.getElementById("bookTitle").value;
    var bookCover = document.getElementById("bookCover").value;
    var bookLink = document.getElementById("bookLink").value;
  
    var url = bookCover.split(".");
    var extension = url[url.length - 1];
  
    if (bookTitle == "" || bookCover == "" || bookLink == "") {
      alert("Não foi possível adicionar o livro. Tente novamente.");
    } else if (imageExtensions.includes(extension) == false) {
      alert(
        "Oops! Não foi possível adicionar a imagem. Tente um caminho com alguma destas extensões: jpg, png, jpeg, gif, svg ou tiff."
      );
    } else {
      for (var i = 0; i < books.length; i++) {
        if (
          bookTitle.toLowerCase() == books[i].title.toLowerCase() ||
          bookCover == books[i].cover ||
          bookLink == books[i].link
        ) {
          alert(
            bookTitle + " já está na lista de livros. Tente adicionar outro."
          );
          bookExists = true;
          break;
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
  
  function removeBook() {
    var bookToRemove = document.getElementById("bookToRemove").value;
  
    if (bookToRemove == "") {
      alert("Não foi possível adicionar o livro. Tente novamente.");
    } else {
      for (var i = 0; i < books.length; i++) {
        if (books[i].title.toLowerCase() == bookToRemove.toLowerCase()) {
          books.splice(i, 1);
          bookExists = true;
          break;
        }
      }
  
      if (bookExists == false) {
        alert("Oops! Parece que este livro não existe. Tente novamente.");
      }
  
      showBooks();
    }
  }
  