import {Book} from './Book'
import {Magazine} from './Magazine'
import {Newspaper} from './Newspaper'

export class LibraryManager {
    private books: Book[] = []
    private magazines: Magazine[] = []
    private newspapers: Newspaper[] = []

    constructor() {
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }
    public addMagazine(magazine: Magazine): void {
        this.magazines.push(magazine);
        
}
