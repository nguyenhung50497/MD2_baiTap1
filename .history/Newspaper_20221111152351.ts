import {Library} from './Library'

export class Newspaper extends Library {
    public releaseDate: Date = new Date;
    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseDate: Date) {
        super(code, publishingCompany, releaseNumber);
        this.releaseDate = releaseDate;
    }
    public getReleaseDate(): Dat {
        return this.releaseDate;
    }
    public setReleaseDate(releaseDate: number): void {
        this.releaseDate = releaseDate;
    }
}