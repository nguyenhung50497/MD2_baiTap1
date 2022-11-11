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

magazines.push(new Magazine(104, "magazine1", 2000, 1234, 2)
magazines.push(new Magazine(106, "magazine1", 2000, 1234, 2)
magazines.push(new Magazine(106, "magazine1", 2000, 1234, 2)



let library = new LibraryManager(books, magazines, newspaper)
// console.log(library);
library.showBook();