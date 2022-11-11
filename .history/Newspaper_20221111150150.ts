import {Library} from './Library'

export class Newspaper extends Library {
    public releaseDate: number;
    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseDate: number) {
        super(code, publishingCompany, releaseNumber);
        this.releaseDate = releaseDate;
    }
    public getReleaseDate(): number {
        return this.releaseDate;
    }
    public setReleaseDate(releaseDate: number) {
        this.releaseDate = releaseDate;
    }
}