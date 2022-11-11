import {Book} from './Book'
import {Magazine} from './Magazine'
import {Newspaper} from './Newspaper'

export class LibraryManager {
    private boo
    constructor() {
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }
}
