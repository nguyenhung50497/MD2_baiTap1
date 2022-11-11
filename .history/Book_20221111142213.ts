import {Library} from './Library'

export class Book extends Library {
    private _author: string;
    private pageNumber: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number, author: string, pageNumber: number) {
        super(code, publishingCompany, releaseNumber);
        this._author = author;
        this.pageNumber = pageNumber;
    }

    pu
}