import {Book} from './Book'
import {Magazine} from './Magazine'
import {Newspaper} from './Newspaper'
import {LibraryManager} from './LibraryManager'

let books: Book[] = []
let magazines: Magazine[] = []
let newspaper: Newspaper[] = []

books.push(new Book(101, "book1", 1000, "adam1", 150))
books.push(new Book(102, "book2", 1200, "adam2", 160))
books.push(new Book(103, "book3", 1300, "adam3", 170))
books.push(new Book(104, "book4", 1400, "adam4", 180))
books.push(new Book(105, "book5", 1500, "adam5", 190))

magazines.push(new Magazine(106, "magazine1", 2000, )

let library = new LibraryManager(books, magazines, newspaper)
// console.log(library);
library.showBook();