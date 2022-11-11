import {Book} from './Book'
import {Magazine} from './Magazine'
import {Newspaper} from './Newspaper'

export class LibraryManager {
    private books: Book[] = []
    private magazines: Magazine[] = []
    private newspapers: Newspaper[] = []

    constructor(books: Book[], magazines: Magazine[], newspapers: Newspaper[]) {
        this.books = books
        this.magazines = magazines
        this.newspapers = newspapers
    }

    public getBooks(): Book[]{
        return this.books;
    }
    public getMagazines(): Magazine[]{
        return this.magazines;
    }
    public getNewspapers(): Newspaper[]{
        return this.newspapers;
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }
    public addMagazine(magazine: Magazine): void {
        this.magazines.push(magazine);
    }
    public addNewspaper(newspaper: Newspaper): void {
        this.newspapers.push(newspaper);
    }

    public removeBook(book: Book): void {
        this.books.splice(this.books.indexOf(book), 1);
    }
    public removeMagazine(magazine: Magazine): void {
        this.magazines.splice(this.magazines.indexOf(magazine
}
