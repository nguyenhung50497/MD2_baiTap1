import {Library} from './Library'

export class Newspaper extends Library {
    private releaseDate: number;
    constructor(code: number, publishingCompany: string, releaseNumber: numbercode: number, publishingCompany: string, releaseNumber: number, releaseDate: number) {
        super();
        this.releaseDate = releaseDate;
    }
}