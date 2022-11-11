import {Library} from './Library'

export class Newspaper extends Library {
    private releaseDate: number;
    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseDate: number) {
        super(code, publishingCompany: , releaseNumber: number);
        this.releaseDate = releaseDate;
    }
}