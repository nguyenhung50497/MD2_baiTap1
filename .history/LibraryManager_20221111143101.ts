import {Book} from './Book'
import {Magazine} from './Magazine'
import {Newspaper} from './Newspaper'

export class LibraryManager {
    private books: Book[] = []
    private magazines: Magazine[] = []
    private newspapers: Newspaper[] = []

    constructor(book) {
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }
}
