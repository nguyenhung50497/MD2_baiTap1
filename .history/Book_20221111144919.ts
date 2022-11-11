import {Library} from './Library'

export class Book extends Library {
    public author: string;
    public pageNumber: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number, author: string, pageNumber: number) {
        super(code, publishingCompany, releaseNumber);
        this._author = author;
        this.pageNumber = pageNumber;
    }

    public getAuthor(): string {
            return this._author;
    }
    public getPageNumber(): number {
        return this.pageNumber;
    }
    
}