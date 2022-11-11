import {Book} from './Book'
import {Magazine} from './Magazine'
import {Newspaper} from './Newspaper'
import {LibraryManager} from './LibraryManager'

let books: Book[] = []
let magazines: Magazine[] = []

books.push(new Book(101, "new1", 1000, "adam1", 150))
books.push(new Book(102, "new1", 1200, "adam1", 160))
books.push(new Book(103, "new1", 1300, "adam1", 170))
books.push(new Book(104, "new1", 1400, "adam1", 180))
books.push(new Book(105, "new1", 1500, "adam1", 190))

console.log(books);
let library: LibraryManager[] = []

library.push(new LibraryManager(books,));

