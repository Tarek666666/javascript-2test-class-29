/* Create a function, called injectBooksToDOM, that: - Takes 1 argument: an array of objects - Loops over the array - 
Display the content of each book along with the book image - Returns true if it works, false if it doesn't */

/* 
 Target the '#root' element in 'index.html'.
  Use the following object: 
  const books = [
        {
              bookName: "The Nature of Software Development",
              author: "Ron Jeffries",
              coverURL:
                    "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
        },
        {
              bookName: "Clean Code",
              author: "Robert Cecil Martin",
              coverURL:
              */

const books = [
    {
        bookName: "The Nature of Software Development",
        author: "Ron Jeffries",
        coverURL: "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png",
    },

    {
        bookName: "Clean Code",
        author: "Robert Cecil Martin",
        coverURL: "",
    },
];

const injectBooksToDOM = function (array) {
    let book = array.forEach((book) => {
        let createdUl = document.createElement("ul");

        createdUl.innerHTML += `  <img width='250px' heigth='250px' src='${book.coverURL}'> 
                            <li>${book.bookName}</li>
                            <li>${book.author}</li>  `;

        // check if it's gonna work or not , if not cause there is no link for the photo then the function will stop , before printing the second book
        // which has no photo link
        if (book.coverURL === "") {
            return;
        }

        document.querySelector("body").appendChild(createdUl);
    });
};

injectBooksToDOM(books);
