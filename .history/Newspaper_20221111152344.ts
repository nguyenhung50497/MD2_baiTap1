import {Library} from './Library'

export class Newspaper extends Library {
    public releaseDate: Date = new Date;
    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseDate: DOMExceptio) {
        super(code, publishingCompany, releaseNumber);
        this.releaseDate = releaseDate;
    }
    public getReleaseDate(): number {
        return this.releaseDate;
    }
    public setReleaseDate(releaseDate: number): void {
        this.releaseDate = releaseDate;
    }
}