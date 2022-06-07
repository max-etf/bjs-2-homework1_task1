class PrintEditionItem {
/*     name
    releaseDate
    pagesCount
    state
    type */

    constructor (name, releaseDate, pagesCount, state=100,type=null)
    {
       this.name = name; 
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = state;
       this.type = type;
    }

    fix() {
        /* this.state = this.state*1.5 ;
        if (this.state > 100) this.state = 100; */
        this.Status = this.state*1.5
    }

    set Status(num){
        this.state = num ;
        if (num < 0) this.state = 0 ;
        if (num > 100) this.state = 100 ;  
    }
    
    get Status() {
        return this.state;
    }

}

/* const sherlock1 = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock1.releaseDate); //2019
  console.log(sherlock1.state); //100
  sherlock1.fix();
  console.log(sherlock1.state); //100
  sherlock1.Status = 50;
  console.log(sherlock1.state);
  console.log(sherlock1.Status);
  sherlock1.fix();
  console.log(sherlock1.state); */

  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state=100,type='magazine'){
       super (name, releaseDate, pagesCount, state,type)
 /*       this.name = name; 
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = state;
       this.type = type; */
    }
  }

  class Book extends PrintEditionItem {
    constructor (author,name, releaseDate, pagesCount, state=100,type='book'){
       super (name, releaseDate, pagesCount, state,type)
       /*  this.name = name; 
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = state;
       this.type = type; */
       this.author = author;
    }
  }


  class NovelBook extends Book {
    constructor (author,name, releaseDate, pagesCount, state=100,type='novel'){
        super (author, name, releaseDate, pagesCount, state,type)
        /*    this.name = super.name; 
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
        this.author = author; */
     }
  }

  class FantasticBook extends Book {
    constructor (author,name, releaseDate, pagesCount, state=100,type='fantastic'){
        super (author, name, releaseDate, pagesCount, state,type)/* 
        this.name = name; 
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
        this.author = author; */
     }
  }


  class DetectiveBook extends Book {
    constructor (author,name, releaseDate, pagesCount, state=100,type='detective'){
        super (author, name, releaseDate, pagesCount, state,type)
       /*  this.name = name; 
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
        this.author = author; */
     }
  }
  /* const picknick1 = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick1.author); //"Аркадий и Борис Стругацкие"
  picknick1.state = 10;
  console.log(picknick1.state); //10
  picknick1.fix();
  console.log(picknick1.state); //15 */

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

 const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Пикник на обочине")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3