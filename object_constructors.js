//Object Constructors

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'


// Odin Project Exercises

  function Book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.info = function() {
          message = `${title} by ${author}, ${pages} pages, ${read} yet`
          return message;
      }
  }

const theHobbit = new Book('The Hobbit','J.R.R. Tolkien', 295, 'not read');
console.log(theHobbit.info());

  book.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"