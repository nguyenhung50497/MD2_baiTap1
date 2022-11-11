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
        this.magazines.splice(this.magazines.indexOf(magazine), 1)
    }
    public removeNewspaper(newspaper: Newspaper): void {
        this.newspapers.splice(this.newspapers.indexOf(newspaper), 1)
    }

    public searchCode(codes: number): void {
        this.books.filter(document => document.code === codes).forEach(document => {console.log(document)})
        this.magazines.filter(document => document.code === codes).forEach(document => {console.log(document)})
        this.newspapers.filter(document => document.code === codes).forEach(document => {console.log(document)})
    }

    public showBook(book: Book): void {
        this.books = 
    }

}
