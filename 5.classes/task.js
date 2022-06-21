class PrintEditionItem {

    constructor (name, releaseDate, pagesCount, _state=100,type=null)
    {
       this.name = name; 
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = _state;
       this.type = type;
    }

    fix() {
        /* this.state = this.state*1.5 ;
        if (this.state > 100) this.state = 100; */
        this.state = this.state*1.5
    }

    set state(num){
        this._state = num ;
        if (num < 0) this._state = 0 ;
        if (num > 100) this._state = 100 ;  
    }
    
    get state() {
        return this._state;
    }

}
  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state=100,type='magazine'){
       super (name, releaseDate, pagesCount, state,type)
    }
  }

  class Book extends PrintEditionItem {
    constructor (author,name, releaseDate, pagesCount, state=100,type='book'){
       super (name, releaseDate, pagesCount, state,type)
       this.author = author;
    }
  }


  class NovelBook extends Book {
    constructor (author,name, releaseDate, pagesCount, state=100,type='novel'){
        super (author, name, releaseDate, pagesCount, state,type)
     }
  }

  class FantasticBook extends Book {
    constructor (author,name, releaseDate, pagesCount, state=100,type='fantastic'){
        super (author, name, releaseDate, pagesCount, state,type)
     }
  }


  class DetectiveBook extends Book {
    constructor (author,name, releaseDate, pagesCount, state=100,type='detective'){
        super (author, name, releaseDate, pagesCount, state,type)
     }
  }

  class Library {
      constructor(name,books=[]) {
        this.name = name;
        this.books = books;
      }
      addBook(book) {
          if (book.state>30) this.books.push(book);     
      }

      findBookBy(type, value) {
        let book = null
       for (let i = 0; i < this.books.length; i++) {
        if(this.books[i][type]===value) {
            book = this.books[i];
            break;
        }}
        return book;      
         //прошу пояснить, почему у меня не заработал этот способ:   
/*             this.books.forEach(element => {
                for (const key of Object.keys(element)) {
                    if ((key===type)&&(element[key]===value)) return element;
                    else return null;  
                }
            }); */

      }

      giveBookByName(bookName) {
        let book = null
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name===bookName) {
                book =  this.books[i];
                this.books.splice(i,1);
                break;
            }
         }
         return book;
        }
    }

 const library1 = new Library("Библиотека имени Ленина");

library1.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library1.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library1.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library1.addBook(new Magazine("Мурзилка", 1924, 60));
/* 
console.log(library1.findBookBy("name", "Пикник на обочине")); //null
console.log(library1.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library1.books.length); //Количество книг до выдачи: 4
library1.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library1.books.length); //Количество книг после выдачи: 3 */